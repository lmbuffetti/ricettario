/* eslint react/forbid-prop-types:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';
import connect from 'react-redux/es/connect/connect';
import get from 'lodash/get';
import { withRouter } from 'react-router';
import { getCurrentIcon } from './assetsIcon';
import clickDrag from './clickDrag';


class IconCurrent extends Component {
    constructor(props) {
        super(props);
        const {
            editPosX, editPos, editPosLabelx, editPosLabel, editPosDotX, editPosDot,
        } = this.props;
        this.state = {
            lastPositionX: 0,
            lastPositionY: 0,
            lastPositionDotX: 0,
            lastPositionDotY: 0,
            lastPositionLabelX: isNaN(editPosLabelx) ? 0 : editPosLabelx,
            lastPositionLabelY: isNaN(editPosLabel) ? 0 : editPosLabel,
            currentX: editPosX,
            currentY: editPos,
            currentLabelX: editPosLabelx,
            currentLabelY: editPosLabel,
            currentDotX: isNaN(editPosDotX) ? 0 : editPosDotX,
            currentDotY: isNaN(editPosDot) ? 0 : editPosDot,
            active: '',
            activeEl: '',
        };
        this.changeState = this.changeState.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {
            edit, editNewPosition, editNewPositionX, editPosDot, editNewPositionDot, editPosDotX, editNewPositionDotX, editPosLabel, editNewPositionLabel, editPosLabelx, editNewPositionLabelX,
        } = this.props;
        const {
            lastPositionX, lastPositionY, currentX, currentY, active, lastPositionDotX, lastPositionDotY, currentDotX, currentDotY, lastPositionLabelY, lastPositionLabelX, currentLabelX, currentLabelY,
        } = this.state;
        if (edit) {
            if (active === 'icon') {
                if (nextProps.dataDrag.isMoving) {
                    this.setState({
                        currentX: lastPositionX + nextProps.dataDrag.moveDeltaX,
                        currentY: lastPositionY + nextProps.dataDrag.moveDeltaY,
                    });
                    editNewPosition(lastPositionY + nextProps.dataDrag.moveDeltaY);
                    editNewPositionX(lastPositionX + nextProps.dataDrag.moveDeltaX);
                } else {
                    this.setState({
                        lastPositionX: isNaN(currentX) ? 0 : currentX,
                        lastPositionY: isNaN(currentY) ? 0 : currentY,
                    });
                }
            }
            if (active === 'dot') {
                if (nextProps.dataDrag.isMoving) {
                    this.setState({
                        currentDotX: lastPositionDotX + nextProps.dataDrag.moveDeltaX,
                        currentDotY: lastPositionDotY + nextProps.dataDrag.moveDeltaY,
                    });
                    if (editPosDot !== lastPositionDotY + nextProps.dataDrag.moveDeltaY) {
                        editNewPositionDot(lastPositionDotY + nextProps.dataDrag.moveDeltaY);
                    }
                    if (editPosDotX !== lastPositionDotX + nextProps.dataDrag.moveDeltaX) {
                        editNewPositionDotX(lastPositionDotX + nextProps.dataDrag.moveDeltaX);
                    }
                } else {
                    this.setState({
                        lastPositionDotX: isNaN(currentDotX) ? 0 : currentDotX,
                        lastPositionDotY: isNaN(currentDotY) ? 0 : currentDotY,
                    });
                }
            }
            if (active === 'label') {
                if (nextProps.dataDrag.isMoving) {
                    this.setState({
                        currentLabelX: lastPositionLabelX + nextProps.dataDrag.moveDeltaX,
                        currentLabelY: lastPositionLabelY + nextProps.dataDrag.moveDeltaY,
                    });
                    if (editPosLabel !== lastPositionLabelY + nextProps.dataDrag.moveDeltaY) {
                        editNewPositionLabel(lastPositionLabelY + nextProps.dataDrag.moveDeltaY);
                    }
                    if (editPosLabelx !== lastPositionLabelX + nextProps.dataDrag.moveDeltaX) {
                        editNewPositionLabelX(lastPositionLabelX + nextProps.dataDrag.moveDeltaX);
                    }
                } else {
                    this.setState({
                        lastPositionLabelX: isNaN(currentLabelX) ? 0 : currentLabelX,
                        lastPositionLabelY: isNaN(currentLabelY) ? 0 : currentLabelY,
                    });
                }
            }
        }
    }

    onMouseEnter() {
        const { selectedIcon, edit } = this.props;
        if (edit) {
            selectedIcon(true);
            this.setState({ activeEl: 'selectedIcon' });
        }
    }

    onMouseLeave() {
        const { selectedIcon, edit } = this.props;
        if (edit) {
            selectedIcon(false);
            this.setState({ activeEl: '' });
        }
    }

    changeState(name, val) {
        this.setState({
            [name]: val,
        });
    }

    render() {
        const {
            color, section, viewBox, clientCase, curY, y, editPos, value, array, x, width, height, editLine, editPosX, near,
            editPosDotX, editPosDot, label, editAreaLabel, lastPoint, edit, key, areaLabelValue, clientLabel, name, clientGender, partnerGender,
        } = this.props;
        let {
            icon,
        } = this.props;
        const {
            currentDotY, currentDotX, active, activeEl, currentLabelY, currentLabelX,
        } = this.state;
        // let svg;
        // const widthText = 104;
        // const xPosText = -60;
        const colorDot = color;
        icon = icon || 'placeholder';
        if (section === 'box') {
            return (
                <svg
                    key={1}
                    x={0}
                    y={0}
                    width={80}
                    height={80}
                    viewBox={viewBox}
                    className="iconBlack"
                    style={{ width: '80px', height: '80px', overflow: 'visible' }}
                >
                    {getCurrentIcon[icon]}
                </svg>
            );
        }
        const sub = document.getElementsByClassName('recharts-area-curve');
        // let chartHeight = 0;

        if (sub.length > 0) {
            // chartHeight = parseFloat(sub[0].style.height);
        }
        let maxTopPos = false;
        if ((y - curY + (editPos * -1) < 36) && !clientCase) {
            maxTopPos = true;
        }
        let posPos = editPos < 0 ? editPos * -1 : editPos;
        posPos = isNaN(posPos) ? 0 : posPos;
        const colorCurDot = (isNaN(y) || value <= 0) ? '#FF0000' : colorDot;
        const dotStyle = {
            position: 'relative',
            top: currentDotY - posPos - 5,
            left: isNaN(currentDotX) ? 0 : currentDotX,
            display: 'block',
            width: '10px',
            height: '10px',
            border: `2px solid ${colorCurDot}`,
            borderRadius: '50%',
            margin: '0 auto',
            background: '#FFFFFF',
            cursor: 'pointer',
            zIndex: '2000',
            boxSizing: 'border-box',
            padding: '0',
        };
        const spanStyle = {
            height: '80px',
            verticalAlign: 'baseline',
            display: 'flex',
            alignItems: maxTopPos ? 'flex-start' : 'flex-end',
            justifyContent: 'center',
            margin: '0',
            padding: '0',
            fontFamily: 'Montserrat,sans-serif',
        };
        const styleParagraph = {
            cursor: 'pointer',
            height: '80px',
            display: 'block',
            fontSize: '12px',
            fontWeight: '600',
            textAlign: 'center',
            lineHeight: '1.2',
            boxSizing: 'border-box',
            margin: '0 0 10px',
            padding: '0',
            fontFamily: 'Montserrat,sans-serif',
        };
        const styleParagraphNoIcon = {
            cursor: 'pointer',
            height: '80px',
            display: 'block',
            fontSize: '12px',
            fontWeight: '600',
            textAlign: 'center',
            lineHeight: '1.2',
            boxSizing: 'border-box',
            margin: '0 0 10px',
            padding: '0',
            fontFamily: 'Montserrat,sans-serif',
            color: 'transparent',
        };
        if (icon && icon !== 'placeholder') {
            let initialTop;
            if (array > 0 && editPos === 0 && !maxTopPos) {
                initialTop = editPos;
            } else {
                initialTop = editPos;
            }
            const defIcon = icon || 'placeholder';
            return (
                <div
                    style={{ width, height }}
                    key={x.toString()}
                    className={`noPlace singleIcon ${maxTopPos ? 'invertIcon' : 'normalIcon'} ${active} ${activeEl}`}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >

                    {(((editPos < 0) || (editPos < 0 && editPos !== -120)) && editLine)
                    && (
                        <svg style={{
                            position: 'absolute',
                            overflow: 'visible',
                        }}
                        >
                            <line
                                x1={editPosX}
                                y1={near ? editPos + 180 : editPos + 140}
                                x2={editPosDotX}
                                y2={near ? editPosDot + 170 : editPosDot + 130}
                                strokeWidth="1"
                                stroke="#000000"
                                style={{ opacity: '0.2' }}
                            />
                        </svg>
                    )
                    }
                    {(editPos > 120 && editLine)
                        && (
                            <svg style={{
                                position: 'absolute',
                                overflow: 'visible',
                            }}
                            >
                                <line
                                    x1={editPosX}
                                    y1={editPos + 40}
                                    x2={editPosDotX}
                                    y2={editPosDot + 150}
                                    strokeWidth="1"
                                    stroke="#000000"
                                    style={{ opacity: '0.2' }}
                                />
                            </svg>
                        )
                    }
                    <div
                        style={{
                            position: 'relative',
                            left: isNaN(editPosX) ? 0 : editPosX,
                            top: near ? editPos + 40 : initialTop,
                            height: near ? posPos + 180 : posPos + 140,
                            cursor: 'pointer',
                        }}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <button
                            className="no_btn"
                            type="button"
                            onClick={this.changeState.bind(this, 'active', 'icon')}
                            style={{
                                border: 'none', background: 'transparent',
                            }}
                        >
                            {
                                !maxTopPos
                                    ? [
                                        <p
                                            key={0}
                                            style={styleParagraph}
                                            onMouseOver={this.changeState.bind(this, 'active', 'icon')}
                                            onFocus={this.changeState.bind(this, 'active', 'icon')}
                                        >
                                            <span style={spanStyle}>{label}</span>
                                        </p>,
                                        <svg
                                            key={1}
                                            x={0}
                                            y={0}
                                            viewBox={viewBox}
                                            onClick={this.changeState.bind(this, 'active', 'icon')}
                                            className={(isNaN(y) || value <= 0) ? 'iconBlack' : 'iconBlack'}
                                            style={{ cursor: 'pointer', width: '40px' }}
                                        >
                                            {getCurrentIcon[defIcon]}
                                        </svg>,
                                    ]
                                    : [
                                        <svg
                                            key={2}
                                            x={0}
                                            y={0}
                                            viewBox={viewBox}
                                            onClick={this.changeState.bind(this, 'active', 'icon')}
                                            className={(isNaN(y) || value <= 0) ? 'iconBlack' : 'iconBlack'}
                                            style={{ cursor: 'pointer', width: '40px' }}
                                        >
                                            {getCurrentIcon[defIcon]}
                                        </svg>,
                                        <p
                                            key={3}
                                            style={styleParagraph}
                                            onMouseOver={this.changeState.bind(this, 'active', 'icon')}
                                            onFocus={this.changeState.bind(this, 'active', 'icon')}
                                        >
                                            <span style={spanStyle}>{label}</span>
                                        </p>,
                                    ]
                            }
                        </button>
                    </div>

                    {array === 0
                        && (
                            <button
                                className="no_btn"
                                type="button"
                                style={dotStyle}
                                onClick={this.changeState.bind(this, 'active', 'dot')}
                            />
                        )
                    }
                </div>
            );
        } if (edit && !editAreaLabel && x !== lastPoint && (icon || label) && (!isNaN(editPos) && !isNaN(editPosX)) && icon === 'placeholder') {
            return (
                <div
                    style={{ width, height }}
                    key={x}
                    className={`withPlace singleIcon ${maxTopPos ? 'invertIcon' : 'normalIcon'} ${active} ${activeEl}`}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >

                    {(((editPos < 0) || (editPos < 0 && editPos !== -120)) && editLine)
                    && (
                        <svg style={{
                            position: 'absolute',
                            overflow: 'visible',
                        }}
                        >
                            <line
                                x1={editPosX}
                                y1={near ? editPos + 180 : editPos + 140}
                                x2={editPosDotX}
                                y2={near ? editPosDot + 170 : editPosDot + 130}
                                strokeWidth="1"
                                stroke="#000000"
                                style={{ opacity: '0.2' }}
                            />
                        </svg>
                    )
                    }
                    {(editPos > 120 && editLine)
                    && (
                        <svg style={{
                            position: 'absolute',
                            overflow: 'visible',
                        }}
                        >
                            <line
                                x1={editPosX}
                                y1={editPos + 40}
                                x2={editPosDotX}
                                y2={editPosDot + 150}
                                strokeWidth="1"
                                stroke="#000000"
                                style={{ opacity: '0.2' }}
                            />
                        </svg>
                    )
                    }
                    <div
                        style={{
                            position: 'relative',
                            left: isNaN(editPosX) ? 0 : editPosX,
                            top: near ? editPos + 140 : editPos,
                            height: near ? posPos + 180 : posPos + 140,
                            cursor: 'pointer',
                        }}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <button
                            type="button"
                            className="no_btn"
                            onClick={this.changeState.bind(this, 'active', 'icon')}
                            style={{
                                border: 'none', background: 'transparent',
                            }}
                        >
                            {
                                !maxTopPos
                                    ? [
                                        <p
                                            key={0}
                                            style={styleParagraphNoIcon}
                                            onMouseOver={this.changeState.bind(this, 'active', 'icon')}
                                            onFocus={this.changeState.bind(this, 'active', 'icon')}
                                        >
                                            <span style={spanStyle}>{label}</span>
                                        </p>,
                                        <svg
                                            key={1}
                                            x={0}
                                            y={0}
                                            viewBox={viewBox}
                                            onClick={this.changeState.bind(this, 'active', 'icon')}
                                            className={(isNaN(y) || value <= 0) ? 'iconBlack' : 'iconBlack'}
                                            style={{ cursor: 'pointer', width: '40px' }}
                                        >
                                            {getCurrentIcon[icon]}
                                        </svg>,
                                    ]
                                    : [
                                        <svg
                                            key={2}
                                            x={0}
                                            y={0}
                                            viewBox={viewBox}
                                            onClick={this.changeState.bind(this, 'active', 'icon')}
                                            className={(isNaN(y) || value <= 0) ? 'iconBlack' : 'iconBlack'}
                                            style={{ cursor: 'pointer', width: '40px' }}
                                        >
                                            {getCurrentIcon[icon]}
                                        </svg>,
                                        <p
                                            key={3}
                                            style={styleParagraphNoIcon}
                                            onMouseOver={this.changeState.bind(this, 'active', 'icon')}
                                            onFocus={this.changeState.bind(this, 'active', 'icon')}
                                        >
                                            <span style={spanStyle}>{label}</span>
                                        </p>,
                                    ]
                            }
                        </button>
                    </div>

                    {array === 0
                    && (
                        <button
                            type="button"
                            className="no_btn"
                            style={dotStyle}
                            onClick={this.changeState.bind(this, 'active', 'dot')}
                        />
                    )
                    }
                </div>
            );
        }
        let labelValueCompare = areaLabelValue;
        let newValue;
        let defLabel;
        let sign = '+';
        if (labelValueCompare < 0) {
            labelValueCompare *= -1;
            sign = '-';
        }
        if (labelValueCompare > 1000000) {
            newValue = (labelValueCompare / 1000000).toFixed(1);
            defLabel = `${sign} £${newValue}m`;
        } else if (labelValueCompare > 1000) {
            newValue = (labelValueCompare / 1000).toFixed(0);
            defLabel = `${sign} £${newValue}k`;
        } else if (labelValueCompare > 0) {
            newValue = labelValueCompare.toFixed(0);
            defLabel = `${sign} £${newValue}`;
        }
        // const posy = y - (this.props.clientCase ? 50 : 20);
        let posLine = clientCase ? 140 : 100;
        if (typeof defLabel !== 'undefined') {
            if (defLabel.indexOf('k') !== -1 && newValue < 300) {
                posLine = clientCase ? 140 : 100;
            }
        }
        if (typeof areaLabelValue !== 'undefined') {
            posLine = clientCase ? 140 : 100;
        }
        let nestPosLineTop = isNaN(currentLabelY) ? -120 : currentLabelY - 70;
        let posLineTop = clientCase ? -120 : nestPosLineTop;
        if (currentLabelY < 0) {
            nestPosLineTop = isNaN(currentLabelY) ? -100 : currentLabelY - 70;
            posLineTop = clientCase ? -120 : nestPosLineTop;
        }
        const nestPosLineX = isNaN(currentLabelX) ? -15 : 85 + currentLabelX;
        let posLineX = clientCase ? -15 : nestPosLineX;
        if (currentLabelX > -50) {
            posLineX = currentLabelX - 50;
        }
        // let color = 'black';
        if (posLineTop - posLine < 80 && posLineTop - posLine > -80) {
            // color = 'transparent';
        }
        if (y > 430) {
            posLine = 70;
        }
        const nestStyleIconLeft = (clientCase ? -110 : currentLabelX - 10);
        const nestLeftIsClientCase = clientCase ? -110 : -110;
        const nestStyleIconTop = (isNaN(currentLabelY) ? -40 : currentLabelY);
        let lastAge = parseInt(name, 10);
        if (clientGender === 'female' || partnerGender === 'female') {
            if (lastAge > 100) {
                lastAge = 100;
            }
        }
        if (clientGender === 'male' && partnerGender === 'male') {
            if (lastAge > 95) {
                lastAge = 95;
            }
        }
        return (
            <div
                key={key}
                style={{
                    width: '170px',
                    height: '100px',
                    cursor: 'pointer',
                }}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <button
                    type="button"
                    onClick={this.changeState.bind(this, 'active', 'label')}
                    className="no_btn"
                    style={{
                        border: 'none', background: 'transparent',
                    }}
                >
                    {((areaLabelValue && x === lastPoint && areaLabelValue !== '0') || editAreaLabel)
                        ? [
                            <div
                                style={{
                                    left: isNaN(currentLabelX) ? nestLeftIsClientCase : nestStyleIconLeft,
                                    top: clientCase ? -50 : nestStyleIconTop,
                                    position: 'relative',
                                }}
                                key={9}
                            >
                                {
                                    clientCase
                                        ? (
                                            <p
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    color: '#1b063a',
                                                    fontSize: '20px',
                                                    textAlign: 'right',
                                                    fontWeight: '300',
                                                    fontFamily: 'Montserrat,sans-serif',
                                                }}
                                                key={0}
                                            >
                                                <b
                                                    key={1}
                                                    style={{
                                                        color: '#6c087c',
                                                        fontSize: '30px',
                                                    }}
                                                >
                                                    {clientLabel.label1.replace('[', '').replace(']', '')}
                                                </b>
                                                <br />
                                                {clientLabel.label2.replace('[', '').replace(']', '')}
                                            </p>
                                        )
                                        : (
                                            <p
                                                key={2}
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    color: '#1b063a',
                                                    fontSize: '20px',
                                                    textAlign: 'right',
                                                    fontWeight: '300',
                                                    fontFamily: 'Montserrat,sans-serif',
                                                }}
                                            >
                                                <b
                                                    key={3}
                                                    style={{
                                                        color: '#6c087c',
                                                        fontSize: '30px',
                                                    }}
                                                >
                                                    {defLabel || areaLabelValue}
                                                </b>
                                                <br />
                                                    at
                                                {' '}
                                                {lastAge}
                                            </p>
                                        )
                                }
                            </div>,
                            <svg style={{ position: 'absolute', overflow: 'visible' }} key={10}>
                                <line
                                    key={10}
                                    x1={posLineX}
                                    y1={posLineTop}
                                    x2={-15}
                                    y2={posLine}
                                    strokeWidth="1"
                                    stroke={color}
                                />
                            </svg>,
                        ]
                        : <div />
                    }
                </button>
            </div>
        );
    }
}

IconCurrent.propTypes = {
    areaLabelValue: PropTypes.number,
    array: PropTypes.number,
    editAreaLabel: PropTypes.any,
    editPos: PropTypes.number,
    editPosX: PropTypes.number,
    editLine: PropTypes.bool,
    editPosDot: PropTypes.number,
    editPosDotX: PropTypes.number,
    editNewPosition: PropTypes.func,
    editNewPositionX: PropTypes.func,
    editPosLabel: PropTypes.number,
    editPosLabelx: PropTypes.number,
    editNewPositionLabel: PropTypes.func,
    editNewPositionLabelX: PropTypes.func,
    editNewPositionDot: PropTypes.func,
    editNewPositionDotX: PropTypes.func,
    // fill: PropTypes.string,
    height: PropTypes.number,
    icon: PropTypes.string,
    // id: PropTypes.number,
    label: PropTypes.string,
    lastPoint: PropTypes.number,
    // multiEl: PropTypes.number,
    section: PropTypes.string,
    viewBox: PropTypes.string,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    dataDrag: PropTypes.object,
    clientLabel: PropTypes.any,
    key: PropTypes.number,
    color: PropTypes.string,
    clientCase: PropTypes.bool,
    curY: PropTypes.number,
    value: PropTypes.number,
    selectedIcon: PropTypes.func,
    near: PropTypes.bool,
    edit: PropTypes.bool,
    name: PropTypes.any,
    clientGender: PropTypes.string,
    partnerGender: PropTypes.string,
};

IconCurrent.defaultProps = {
    editNewPosition: null,
    editNewPositionX: null,
    editNewPositionLabel: null,
    editNewPositionLabelX: null,
    editNewPositionDot: null,
    editNewPositionDotX: null,
    areaLabelValue: -1,
    array: 0,
    editAreaLabel: false,
    editPos: 0,
    editPosX: 0,
    editLine: false,
    editPosDot: 0,
    editPosDotX: 0,
    editPosLabel: 0,
    editPosLabelx: 0,
    // fill: '',
    height: 0,
    icon: '',
    // id: 0,
    label: '',
    lastPoint: 0,
    // multiEl: 0,
    section: '',
    viewBox: '',
    width: 0,
    x: 0,
    y: 0,
    dataDrag: {},
    clientLabel: '',
    key: 0,
    color: '',
    clientCase: false,
    curY: 0,
    value: 0,
    selectedIcon: () => {},
    near: false,
    edit: false,
    name: '',
    clientGender: null,
    partnerGender: null,
};

const Icon = clickDrag(IconCurrent, { touch: false });

const mapStateToProps = state => ({
    clientGender: get(state, 'webapp.slidePresentation.globalGenderClient', null),
    partnerGender: get(state, 'webapp.slidePresentation.globalGenderPartner', null),
});

export default withRouter(connect(mapStateToProps)(Icon));
