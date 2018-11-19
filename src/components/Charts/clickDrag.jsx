/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { findDOMNode } from 'react-dom';

const noop = () => {
};

function clickDrag(Component, opts = {}) {
    const touch = opts.touch || false;
    const resetOnSpecialKeys = opts.resetOnSpecialKeys || false;
    const getSpecificEventData = opts.getSpecificEventData || (() => ({}));

    const onDragStart = opts.onDragStart || noop;
    const onDragStop = opts.onDragStop || noop;
    const onDragMove = opts.onDragMove || noop;

    class ClickDrag extends React.Component {
        constructor(props) {
            super(props);

            this.onMouseDown = this.onMouseDown.bind(this);
            this.onMouseUp = this.onMouseUp.bind(this);
            this.onMouseMove = this.onMouseMove.bind(this);

            this.state = {
                isMouseDown: false,
                isMoving: false,
                mouseDownPositionX: 0,
                mouseDownPositionY: 0,
                moveDeltaX: 0,
                moveDeltaY: 0,
            };

            this.wasUsingSpecialKeys = false;
        }

        componentDidMount() {
            const node = findDOMNode(this);

            node.addEventListener('mousedown', this.onMouseDown);
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);

            if (touch) {
                node.addEventListener('touchstart', this.onMouseDown, { passive: true });
                document.addEventListener('touchmove', this.onMouseMove);
                document.addEventListener('touchend', this.onMouseUp);
            }
        }

        componentWillUnmount() {
            const node = findDOMNode(this);

            node.removeEventListener('mousedown', this.onMouseDown);
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);

            if (touch) {
                node.removeEventListener('touchstart', this.onMouseDown, { passive: true });
                document.removeEventListener('touchmove', this.onMouseMove);
                document.removeEventListener('touchend', this.onMouseUp);
            }
        }

        onMouseDown(e) {
            // only left mouse button
            if (touch || e.button === 0) {
                const pt = (e.changedTouches && e.changedTouches[0]) || e;

                this.setMousePosition(pt.clientX, pt.clientY);

                onDragStart(e);
            }
        }

        onMouseUp(e) {
            if (this.state.isMouseDown) {
                this.setState({
                    isMouseDown: false,
                    isMoving: false,
                });

                onDragStop(e);
            }
        }

        onMouseMove(e) {
            const {
                mouseDownPositionX,
                mouseDownPositionY,
            } = this.state;
            if (this.state.isMouseDown) {
                const pt = (e.changedTouches && e.changedTouches[0]) || e;

                const isUsingSpecialKeys = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
                if (resetOnSpecialKeys && this.wasUsingSpecialKeys !== isUsingSpecialKeys) {
                    this.wasUsingSpecialKeys = isUsingSpecialKeys;
                    this.setMousePosition(pt.clientX, pt.clientY);
                } else {
                    this.setState({
                        isMoving: true,
                        moveDeltaX: pt.clientX - mouseDownPositionX,
                        moveDeltaY: pt.clientY - mouseDownPositionY,
                        ...getSpecificEventData(e),
                    });
                }

                onDragMove(e);
            }
        }

        setMousePosition(x, y) {
            this.setState({
                isMouseDown: true,
                isMoving: false,
                mouseDownPositionX: x,
                mouseDownPositionY: y,
                moveDeltaX: 0,
                moveDeltaY: 0,
            });
        }

        render() {
            return <Component {...this.props} dataDrag={this.state} />;
        }
    }

    return ClickDrag;
}

export default clickDrag;
