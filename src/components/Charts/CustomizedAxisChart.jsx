/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';
import get from 'lodash/get';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';

class CustomizedAxisTick extends Component {
    render() {
        const {
            x, y, payload, age, icon, chartsType, data, clientCase,
        } = this.props;
        let {
            clientGender, partnerGender,
        } = this.props;
        const differenceAge = age > 0 ? parseFloat(payload.value) - age : parseFloat(payload.value) + (age * -1);
        const fontSize = window.innerWidth < 1600 ? '14px' : '14px';
        const firstIconMoneyRunsOut = icon.indexOf(icon.find(item => item === 'money_runs'));
        clientGender = clientGender !== null ? clientGender.toLowerCase() : clientGender;
        partnerGender = partnerGender !== null ? partnerGender.toLowerCase() : partnerGender;
        return (
            <g>
                {(
                    (icon[payload.index] && icon[payload.index] !== 'money_runs' && icon[payload.index].indexOf('placeholder') === -1) ||
                    payload.index === 0 ||
                    payload.index === icon.length - 1 ||
                    payload.index === data.length - 1 ||
                    (firstIconMoneyRunsOut === payload.index && (chartsType === 'liquid_assets' || chartsType === 'all_assets'))
                )
                && (
                    <g>
                        {
                            (
                                (
                                    (clientGender === 'male' && payload.value < 96) ||
                                    (clientGender === 'female' && payload.value < 101) ||
                                    clientGender === null || clientCase
                                )
                            ) && (
                                <text
                                    x={x}
                                    y={y}
                                    dy={16}
                                    textAnchor="middle"
                                    fill="#000"
                                    style={{ fill: '#000' }}
                                    fontWeight={600}
                                    fontSize={fontSize}
                                    fontFamily="Montserrat,sans-serif"
                                >
                                    {payload.value}
                                </text>
                            )
                        }
                        {
                            (
                                !isNaN(differenceAge) &&
                                (
                                    (partnerGender === 'male' && differenceAge < 97) ||
                                    (partnerGender === 'female' && differenceAge < 101) ||
                                    partnerGender === null || clientCase
                                )
                            ) && (
                                <text
                                    x={x}
                                    y={y + 40}
                                    dy={16}
                                    textAnchor="middle"
                                    fill="#000"
                                    style={{ fill: '#000' }}
                                    fontWeight={600}
                                    fontSize={fontSize}
                                    fontFamily="Montserrat,sans-serif"
                                >
                                    {differenceAge}
                                </text>
                            )
                        }
                    </g>
                )
                }
            </g>
        );
    }
}

CustomizedAxisTick.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    age: PropTypes.number,
    // axis: PropTypes.arrayOf(PropTypes.array),
    payload: PropTypes.object,
    // stroke: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    icon: PropTypes.arrayOf(PropTypes.any),
    chartsType: PropTypes.string,
    clientGender: PropTypes.string,
    partnerGender: PropTypes.string,
    clientCase: PropTypes.bool,
};

CustomizedAxisTick.defaultProps = {
    data: [],
    age: 0,
    // axis: [],
    payload: {},
    // stroke: '',
    x: 0,
    y: 0,
    icon: [],
    chartsType: '',
    clientGender: null,
    partnerGender: null,
    clientCase: false,
};

const mapStateToProps = state => ({
    clientGender: get(state, 'webapp.slidePresentation.globalGenderClient', null),
    partnerGender: get(state, 'webapp.slidePresentation.globalGenderPartner', null),
});

export default withRouter(connect(mapStateToProps)(CustomizedAxisTick));
