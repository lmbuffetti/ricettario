import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';

class TableLegacyIHT extends Component {
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
            data, planCompare, width, height, edit, childName1, options, ihtAVal, ihtBVal,
        } = this.props;
        let arrayData;
        if (typeof data !== 'undefined') {
            arrayData = data[data.length - 1];
        }
        let legacy; let legacyCompare; let tax; let nonTax; let taxCompare; let
            nonTaxCompare;
        if (typeof arrayData !== 'undefined') {
            const bprNl = isNaN(parseFloat(arrayData.bprNl)) ? 0 : parseFloat(arrayData.bprNl);
            const bpr = isNaN(parseFloat(arrayData.bpr)) ? 0 : parseFloat(arrayData.bpr);
            const netProperty = isNaN(parseFloat(arrayData.netProperty)) ? 0 : parseFloat(arrayData.netProperty);
            const investments = isNaN(parseFloat(arrayData.investments)) ? 0 : parseFloat(arrayData.investments);
            const savings = isNaN(parseFloat(arrayData.savings)) ? 0 : parseFloat(arrayData.savings);
            const pensions = isNaN(parseFloat(arrayData.pensions_val)) ? 0 : parseFloat(arrayData.pensions_val);
            const shortfall = isNaN(parseFloat(arrayData.shortfall_debt)) ? 0 : parseFloat(arrayData.shortfall_debt) * -1;
            const bprNlCompare = isNaN(parseFloat(arrayData[`bprNlCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`bprNlCompare_${planCompare}`]);
            const bprCompare = isNaN(parseFloat(arrayData[`bprCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`bprCompare_${planCompare}`]);
            const netPropertyCompare = isNaN(parseFloat(arrayData[`netPropertyCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`netPropertyCompare_${planCompare}`]);
            const investmentsCompare = isNaN(parseFloat(arrayData[`investmentsCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`investmentsCompare_${planCompare}`]);
            const savingsCompare = isNaN(parseFloat(arrayData[`savingsCompare_${planCompare}`])) ? 0 : parseFloat(arrayData[`savingsCompare_${planCompare}`]);
            const pensionsCompare = isNaN(parseFloat(arrayData[`pensions_val_compare_${planCompare}`])) ? 0 : parseFloat(arrayData[`pensions_val_compare_${planCompare}`]);
            const shortfallCompare = isNaN(parseFloat(arrayData[`shortfall_debt_compare_${planCompare}`])) ? 0 : parseFloat(arrayData[`shortfall_debt_compare_${planCompare}`]) * -1;

            tax = netProperty + investments + savings - shortfall;
            nonTax = pensions + shortfall;

            taxCompare = netPropertyCompare + investmentsCompare + savingsCompare - shortfallCompare;
            nonTaxCompare = pensionsCompare + shortfallCompare;


            if (options.bprEnable) {
                nonTaxCompare += bprCompare;
                nonTax += bpr;
            }
            if (options.bprNlEnable) {
                nonTaxCompare += bprNlCompare;
                nonTax += bprNl;
            }

            tax = (tax < 0) ? 0 : Math.round(tax);
            nonTax = (nonTax < 0) ? 0 : Math.round(nonTax);
            taxCompare = (taxCompare < 0) ? 0 : Math.round(taxCompare);
            nonTaxCompare = (nonTaxCompare < 0) ? 0 : Math.round(nonTaxCompare);

            taxCompare = isNaN(taxCompare) ? 0 : taxCompare;
            nonTaxCompare = isNaN(nonTaxCompare) ? 0 : nonTaxCompare;

            legacy = tax ? (tax + nonTax - (isNaN(ihtAVal) ? 0 : ihtAVal)) : 0;
            legacyCompare = taxCompare ? (taxCompare + nonTaxCompare - (isNaN(ihtBVal) ? 0 : ihtBVal)) : 0;
        }
        let totalTitle;
        if (planCompare) {
            totalTitle = (legacyCompare - legacy) > 0 ? legacyCompare - legacy : 0;
        } else {
            totalTitle = (legacy) > 0 ? legacy : 0;
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
                            <tr>
                                <td>Taxable</td>
                                <td>
£
                                    {Math.round(tax).toLocaleString('en')}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(taxCompare).toLocaleString('en')}
                                </td>
                            )
                                }
                            </tr>
                            <tr>
                                <td>Non-Taxable</td>
                                <td>
£
                                    {Math.round(nonTax).toLocaleString('en')}
                                </td>
                                {planCompare
                            && (
                                <td>
£
                                    {Math.round(nonTaxCompare).toLocaleString('en')}
                                </td>
                            )
                                }
                            </tr>
                            <tr>
                                <td>IHT (guide only)</td>
                                {
                                    edit
                                        ? (
                                            <React.Fragment>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={isNaN(ihtAVal) ? '' : ihtAVal}
                                                        name="ihtAVal"
                                                        onChange={this.changeIHTA}
                                                    />
                                                </td>
                                                {planCompare
                                        && (
                                            <td>
                                                <input
                                                    type="text"
                                                    value={isNaN(ihtBVal) ? '' : ihtBVal}
                                                    name="ihtBVal"
                                                    onChange={this.changeIHTA}
                                                />
                                            </td>
                                        )}
                                            </React.Fragment>
                                        )
                                        : (
                                            <React.Fragment>
                                                <td>{isNaN(ihtAVal) ? '' : `£${Math.round(ihtAVal).toLocaleString('en')}`}</td>
                                                {planCompare
                                        && <td>{isNaN(ihtBVal) ? '' : `£${Math.round(ihtBVal).toLocaleString('en')}`}</td>}
                                            </React.Fragment>
                                        )
                                }
                            </tr>
                            <tr>
                                <td><b>Legacy</b></td>
                                <td>
                                    <b>
£
                                        {Math.round(legacy).toLocaleString('en')}
                                    </b>
                                </td>
                                {planCompare
                            && (
                                <td>
                                    <b>
£
                                        {Math.round(legacyCompare).toLocaleString('en')}
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

TableLegacyIHT.propTypes = {
    ihtA: PropTypes.func,
    options: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.any),
    childName1: PropTypes.string,
    edit: PropTypes.bool,
    ihtAVal: PropTypes.number,
    ihtBVal: PropTypes.number,
    planCompare: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
TableLegacyIHT.defaultProps = {
    ihtA: null,
    options: {},
    data: [],
    childName1: '',
    edit: false,
    ihtAVal: null,
    ihtBVal: null,
    planCompare: '',
    width: 0,
    height: 0,
};
export default TableLegacyIHT;
