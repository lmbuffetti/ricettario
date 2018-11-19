import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomizedAxisTick extends Component {
    render() {
        const {
            x, y, payload, maxScale,
        } = this.props;
        // const differenceAge = age > 0 ? parseFloat(payload.value) - age : parseFloat(payload.value) + (age * -1);
        const fontSize = window.innerWidth < 1600 ? '14px' : '14px';
        let value;
        switch (true) {
            case maxScale >= 5000000 && payload.value > 0:
                value = `£ ${Math.round(payload.value / 1000000)}M`;
                break;
            case maxScale >= 1000000 && payload.value > 0:
                value = `£ ${(payload.value / 1000000).toFixed(2)}M`;
                break;
            case payload.value > 0:
                value = `£ ${Math.round(payload.value / 1000)}K`;
                break;
            default:
                return null;
        }
        return (
            <g>
                <g>
                    <text
                        x={x + 40}
                        y={y - 10}
                        dy={16}
                        textAnchor="middle"
                        fill="#000"
                        style={{ fill: '#000', width: '80px' }}
                        fontWeight={600}
                        fontSize={fontSize}
                        fontFamily="Montserrat,sans-serif"
                    >
                        {value}
                    </text>
                </g>
            </g>
        );
    }
}
CustomizedAxisTick.propTypes = {
    // age: PropTypes.number,
    // axis: PropTypes.arrayOf(PropTypes.array),
    payload: PropTypes.object,
    // stroke: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    maxScale: PropTypes.number,
};

CustomizedAxisTick.defaultProps = {
    // age: 0,
    // axis: [],
    payload: {},
    // stroke: '',
    x: 0,
    y: 0,
    maxScale: 0,
};

export default CustomizedAxisTick;
