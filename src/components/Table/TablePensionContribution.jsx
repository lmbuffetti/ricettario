import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';

class TablePensionContribution extends Component {
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
            edit, year, childName1, childName2, width, height,
        } = this.props;
        const pensionCalc = isNaN(Math.round(parseFloat(year) * parseFloat(childName2))) ? 0 : Math.round(parseFloat(year) * parseFloat(childName2));
        return (
            <div className="table_data" style={{ width, height }}>
                <div>
                    <div className="boxShadow">
                        <h2>
                            <span>+</span>
                            £
                            {Math.round((pensionCalc + (pensionCalc * 0.2)) - (pensionCalc - (pensionCalc * 0.4))).toLocaleString('en')}
                        </h2>
                        <h5>
                            In additional to legacy to
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

                    <table className="table_layout medium_table">
                        <tbody>
                            <tr>
                                <th />
                                <th className="bg_grey">As a normal investment</th>
                                <th className="bg_violet">Inside a pension</th>
                            </tr>
                            <tr>
                                <td style={{ width: '30%' }}>
                                Pension Contributions
                                    {
                                        edit
                                            ? (
                                                <div>
(
                                                    <input
                                                        type="text"
                                                        name="year"
                                                        value={year}
                                                        onChange={this.changeIHTA}
                                                    />
                                                    {' '}
years x £
                                                    <input
                                                        type="text"
                                                        name="childName2"
                                                        value={childName2}
                                                        onChange={this.changeIHTA}
                                                    />
)
                                                </div>
                                            )
                                            : (
                                                <div>
                                                    (
                                                    {`${year} years x`}
                                                    £
                                                    {parseFloat(childName2).toLocaleString('en')}
                                                    )
                                                </div>
                                            )
                                    }
                                </td>
                                <td>
£
                                    {pensionCalc.toLocaleString('en')}
                                </td>
                                <td>
£
                                    {pensionCalc.toLocaleString('en')}
                                </td>
                            </tr>
                            <tr>
                                <td>Income Tax Relief</td>
                                <td>
£
                                    {Math.round(0).toLocaleString('en')}
                                </td>
                                <td>
£
                                    {Math.round(pensionCalc * 0.2).toLocaleString('en')}
                                </td>
                            </tr>
                            <tr>
                                <td>Inheritance Tax</td>
                                <td>
£
                                    {Math.round(pensionCalc * 0.4).toLocaleString('en')}
                                </td>
                                <td>
£
                                    {Math.round(0).toLocaleString('en')}
                                </td>
                            </tr>
                            <tr>
                                <td>Net amount to beneficiaries</td>
                                <td>
£
                                    {Math.round(pensionCalc - (pensionCalc * 0.4)).toLocaleString('en')}
                                </td>
                                <td>
£
                                    {Math.round(pensionCalc + (pensionCalc * 0.2)).toLocaleString('en')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TablePensionContribution.propTypes = {
    ihtA: PropTypes.func,
    childName1: PropTypes.string,
    childName2: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    year: PropTypes.number,
    edit: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
};
TablePensionContribution.defaultProps = {
    ihtA: null,
    childName1: '',
    childName2: 0,
    year: 0,
    edit: false,
    height: 0,
    width: 0,
};

export default TablePensionContribution;
