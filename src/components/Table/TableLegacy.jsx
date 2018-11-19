import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';

class TableLegacy extends Component {
    constructor(props) {
        super(props);
        this.changeIHTA = this.changeIHTA.bind(this);
    }

    changeIHTA(e) {
        const { ihtA } = this.props;
        ihtA(e);
    }

    render() {
        const {
            data, planCompare, width, height, edit, childName1, options, label1, label2,
        } = this.props;
        let arrayData;
        if (typeof data !== 'undefined') {
            arrayData = data[data.length - 1];
        }
        let totalLegacy;
        let totalLegacyCompare;
        let bprNl;
        let bpr;
        let pensions;
        let investments;
        let savings;
        let netProperty;
        let shortfall;
        let bprNlCompare;
        let bprCompare;
        let pensionsCompare;
        let investmentsCompare;
        let savingsCompare;
        let netPropertyCompare;
        let shortfallCompare;
        if (typeof arrayData !== 'undefined') {
            bprNl = isNaN(parseFloat(arrayData.bprNl)) ? 0 : parseFloat(arrayData.bprNl);
            bpr = isNaN(parseFloat(arrayData.bpr)) ? 0 : parseFloat(arrayData.bpr);
            pensions = isNaN(parseFloat(arrayData.pensions_val)) ? 0 : parseFloat(arrayData.pensions_val);
            investments = isNaN(parseFloat(arrayData.investments)) ? 0 : parseFloat(arrayData.investments);
            savings = isNaN(parseFloat(arrayData.savings)) ? 0 : parseFloat(arrayData.savings);
            netProperty = isNaN(parseFloat(arrayData.netProperty)) ? 0 : parseFloat(arrayData.netProperty);
            shortfall = isNaN(parseFloat(arrayData.shortfall_debt)) ? 0 : parseFloat(arrayData.shortfall_debt) * -1;

            bprNlCompare = isNaN(parseFloat(arrayData[`bprNlCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`bprNlCompare_${planCompare}`]);
            bprCompare = isNaN(parseFloat(arrayData[`bprCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`bprCompare_${planCompare}`]);
            pensionsCompare = isNaN(parseFloat(arrayData[`pensions_val_compare_${planCompare}`])) ? 0 : parseFloat(arrayData[`pensions_val_compare_${planCompare}`]);
            investmentsCompare = isNaN(parseFloat(arrayData[`investmentsCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`investmentsCompare_${planCompare}`]);
            savingsCompare = isNaN(parseFloat(arrayData[`savingsCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`savingsCompare_${planCompare}`]);
            netPropertyCompare = isNaN(parseFloat(arrayData[`netPropertyCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`netPropertyCompare_${planCompare}`]);
            shortfallCompare = isNaN(parseFloat(arrayData[`shortfall_debt_compare_${planCompare}`])) ? 0 : parseFloat(arrayData[`shortfall_debt_compare_${planCompare}`]) * -1;

            pensions += shortfall;
            netProperty -= shortfall;

            pensionsCompare += shortfallCompare;
            netPropertyCompare -= shortfallCompare;

            totalLegacy = bprNl + bpr + pensions + investments + savings + netProperty;

            totalLegacyCompare = bprNlCompare + bprCompare + pensionsCompare + investmentsCompare + savingsCompare + netPropertyCompare;
        }
        let totalTitle;
        if (planCompare) {
            totalTitle = (totalLegacyCompare - totalLegacy) > 0 ? totalLegacyCompare - totalLegacy : 0;
        } else {
            totalTitle = (totalLegacy) > 0 ? totalLegacy : 0;
        }
        return (
            <div className="table_data" style={{ width, height }}>
                <div>
                    {
                        planCompare
                        && (
                            <div className="boxShadow">
                                <h2>
                                    <span>+</span>
                                £
                                    {totalTitle > 0 ? Math.round(totalTitle).toLocaleString('en') : 0}
                                </h2>
                                <h5>
                                    {
                                        edit
                                            ? (
                                                <input
                                                    type="text"
                                                    name="childName1"
                                                    value={childName1}
                                                    onChange={this.changeIHTA}
                                                />
                                            )
                                            : <span>{childName1}</span>
                                    }
                                </h5>
                            </div>
                        )
                    }
                    <table className={planCompare ? 'table_layout medium_table' : 'table_layout small_table'}>
                        <tbody>
                            <tr>
                                <th />
                                <th className={planCompare ? 'bg_grey' : 'bg_violet'}>Where you are today</th>
                                {planCompare
                            && <th className="bg_violet">What advice could do</th>
                                }
                            </tr>
                            {options.bprNlEnable
                        && (
                            <tr>
                                {
                                    !edit
                                        ? <td>{label1}</td>
                                        : (
                                            <td>
                                                <input
                                                    type="text"
                                                    name="label1"
                                                    value={label1}
                                                    onChange={this.changeIHTA}
                                                />
                                            </td>
                                        )
                                }
                                <td>
£
                                    {Math.round(bprNl) < 0 ? 0 : Math.round(bprNl).toLocaleString('en')}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(bprNlCompare) < 0 ? 0 : Math.round(bprNlCompare).toLocaleString('en')}
                                </td>
                            )}
                            </tr>
                        )
                            }
                            {options.bprEnable
                        && (
                            <tr>
                                {
                                    !edit
                                        ? <td>{label2}</td>
                                        : (
                                            <td>
                                                <input
                                                    type="text"
                                                    name="label2"
                                                    value={label2}
                                                    onChange={this.changeIHTA}
                                                />
                                            </td>
                                        )
                                }
                                <td>
£
                                    {Math.round(bpr) < 0 ? 0 : Math.round(bpr).toLocaleString('en')}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(bprCompare) < 0 ? 0 : Math.round(bprCompare).toLocaleString('en')}
                                </td>
                            )}
                            </tr>
                        )
                            }
                            <tr>
                                <td>Pensions</td>
                                <td>
£
                                    {Math.round(pensions) < 0 ? 0 : Math.round(pensions).toLocaleString('en')}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(pensionsCompare) < 0 ? 0 : Math.round(pensionsCompare).toLocaleString('en')}
                                </td>
                            )}
                            </tr>
                            <tr>
                                <td>Investments</td>
                                <td>
£
                                    {Math.round(investments) < 0 ? 0 : Math.round(investments).toLocaleString('en', { minimumFractionDigits: 0 })}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(investmentsCompare) < 0 ? 0 : Math.round(investmentsCompare).toLocaleString('en', { minimumFractionDigits: 0 })}
                                </td>
                            )}
                            </tr>
                            <tr>
                                <td>Savings</td>
                                <td>
£
                                    {Math.round(savings) < 0 ? 0 : Math.round(savings).toLocaleString('en', { minimumFractionDigits: 0 })}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(savingsCompare) < 0 ? 0 : Math.round(savingsCompare).toLocaleString('en', { minimumFractionDigits: 0 })}
                                </td>
                            )}
                            </tr>
                            <tr>
                                <td>Net Property</td>
                                <td>
£
                                    {Math.round(netProperty).toLocaleString('en', { minimumFractionDigits: 0 })}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(netPropertyCompare).toLocaleString('en', { minimumFractionDigits: 0 })}
                                </td>
                            )}
                            </tr>
                            <tr>
                                <td><b>Total</b></td>
                                <td>
                                    <b>
£
                                        {totalLegacy ? Math.round(totalLegacy).toLocaleString('en') : 0}
                                    </b>
                                </td>
                                {planCompare
                            && (
                                <td>
                                    <b>
£
                                        {totalLegacyCompare ? Math.round(totalLegacyCompare).toLocaleString('en') : 0}
                                    </b>
                                </td>
                            )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TableLegacy.propTypes = {
    ihtA: PropTypes.func,
    options: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.any),
    childName1: PropTypes.string,
    edit: PropTypes.bool,
    label1: PropTypes.string,
    label2: PropTypes.string,
    planCompare: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
TableLegacy.defaultProps = {
    ihtA: null,
    options: {},
    data: [],
    childName1: '',
    edit: false,
    label1: '',
    label2: '',
    planCompare: '',
    width: 0,
    height: 0,
};
export default TableLegacy;
