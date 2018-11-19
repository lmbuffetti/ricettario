import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomizedLabel extends Component {
    render() {
        const {
            client, height, partner,
        } = this.props;
        const fontSize = window.innerWidth < 1600 ? '14px' : '14px';
        return (
            <g>
                <text
                    fontSize={fontSize}
                    fontWeight={600}
                    fontFamily="Montserrat,sans-serif"
                    x="10"
                    y={height - 7}
                    style={{ fill: '#000' }}
                    className="recharts-text recharts-label"
                    textAnchor="start"
                >
                    <tspan x="10" dy="0em">{client}</tspan>
                </text>
                <text
                    fontSize={fontSize}
                    fontFamily="Montserrat,sans-serif"
                    fontWeight={600}
                    x="10"
                    y={height + 33}
                    style={{ fill: '#000' }}
                    className="recharts-text recharts-label"
                    textAnchor="start"
                >
                    <tspan x="10" dy="0em">{partner}</tspan>
                </text>
            </g>
        );
    }
}

CustomizedLabel.propTypes = {
    client: PropTypes.string,
    height: PropTypes.number,
    partner: PropTypes.string,
    // width: PropTypes.number,
};

CustomizedLabel.defaultProps = {
    client: '',
    height: 0,
    partner: '',
    // width: 0,
};
export default CustomizedLabel;
