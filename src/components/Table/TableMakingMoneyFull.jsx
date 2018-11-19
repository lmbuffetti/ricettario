import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { textJsonLabel } from '../../helpers/WebappFunctions';

class TableMakingMoneyFull extends Component {
    render() {
        const {
            titleCompare, label1, edit, width, height, step,
        } = this.props;
        const label1New = textJsonLabel(label1, edit);
        const clientName = titleCompare.split(',')[0].split('&');
        return (
            <div className="table_data" style={{ width, height }}>
                <div>
                    <table className="making_money_full">
                        <tbody>
                            <tr>
                                <th />
                                <th colSpan={4} className="bg_grey">Where they started out</th>
                                <th colSpan={2} className="bg_violet">How we helped them</th>
                            </tr>
                            <tr>
                                <th />
                                <th colSpan={2}>{clientName[0]}</th>
                                <th colSpan={2}>{clientName[1]}</th>
                                <th className={step < 4 ? 'opacity_col' : ''}>{clientName[0]}</th>
                                <th className={step < 4 ? 'opacity_col' : ''}>{clientName[1]}</th>
                            </tr>
                            <tr>
                                <th />
                                <th className={step < 1 ? 'opacity_col' : ''}>Accumulated</th>
                                <th className={step < 2 ? 'opacity_col' : ''}><b>Per year</b></th>
                                <th className={step < 1 ? 'opacity_col' : ''}>Accumulated</th>
                                <th className={step < 3 ? 'opacity_col' : ''}><b>Per year</b></th>
                                <th className={step < 4 ? 'opacity_col' : ''}><b>Per year</b></th>
                                <th className={step < 4 ? 'opacity_col' : ''}><b>Per year</b></th>
                            </tr>
                            <tr>
                                <td>Pensions</td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
£
                                    {label1New.pension[0].toLocaleString('en')}
                                </td>
                                <td className={step < 2 ? 'opacity_col' : ''}>
£
                                    {label1New.pension[1].toLocaleString('en')}
                                </td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
£
                                    {label1New.pension[2].toLocaleString('en')}
                                </td>
                                <td className={step < 3 ? 'opacity_col' : ''}>
£
                                    {label1New.pension[3].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.pension[4].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.pension[5].toLocaleString('en')}
                                </td>
                            </tr>
                            <tr>
                                <td>State pension</td>
                                <td className={step < 1 ? 'opacity_col' : ''}>{label1New.state_pension[0]}</td>
                                <td className={step < 2 ? 'opacity_col' : ''}>
£
                                    {label1New.state_pension[1].toLocaleString('en')}
                                </td>
                                <td className={step < 1 ? 'opacity_col' : ''}>{label1New.state_pension[2]}</td>
                                <td className={step < 3 ? 'opacity_col' : ''}>
£
                                    {label1New.state_pension[3].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.state_pension[4].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.state_pension[5].toLocaleString('en')}
                                </td>
                            </tr>
                            <tr>
                                <td>ISA</td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
£
                                    {label1New.isa[0].toLocaleString('en')}
                                </td>
                                <td className={step < 2 ? 'opacity_col' : ''}>
£
                                    {label1New.isa[1].toLocaleString('en')}
                                </td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
£
                                    {label1New.isa[2].toLocaleString('en')}
                                </td>
                                <td className={step < 3 ? 'opacity_col' : ''}>
£
                                    {label1New.isa[3].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.isa[4].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.isa[5].toLocaleString('en')}
                                </td>
                            </tr>
                            {
                                typeof label1New.gia !== 'undefined'
                            && (
                                <tr>
                                    <td>GIA</td>
                                    <td className={step < 1 ? 'opacity_col' : ''}>
£
                                        {label1New.gia[0].toLocaleString('en')}
                                    </td>
                                    <td className={step < 2 ? 'opacity_col' : ''}>
£
                                        {label1New.gia[1].toLocaleString('en')}
                                    </td>
                                    <td className={step < 1 ? 'opacity_col' : ''}>
£
                                        {label1New.gia[2].toLocaleString('en')}
                                    </td>
                                    <td className={step < 3 ? 'opacity_col' : ''}>
£
                                        {label1New.gia[3].toLocaleString('en')}
                                    </td>
                                    <td className={step < 4 ? 'opacity_col' : ''}>
£
                                        {label1New.gia[4].toLocaleString('en')}
                                    </td>
                                    <td className={step < 4 ? 'opacity_col' : ''}>
£
                                        {label1New.gia[5].toLocaleString('en')}
                                    </td>
                                </tr>
                            )
                            }
                            {
                                typeof label1New.onshore_bond !== 'undefined'
                            && (
                                <tr>
                                    <td>Onshore bond</td>
                                    <td className={step < 1 ? 'opacity_col' : ''}>
£
                                        {label1New.onshore_bond[0].toLocaleString('en')}
                                    </td>
                                    <td className={step < 2 ? 'opacity_col' : ''}>
£
                                        {label1New.onshore_bond[1].toLocaleString('en')}
                                    </td>
                                    <td className={step < 1 ? 'opacity_col' : ''}>
£
                                        {label1New.onshore_bond[2].toLocaleString('en')}
                                    </td>
                                    <td className={step < 3 ? 'opacity_col' : ''}>
£
                                        {label1New.onshore_bond[3].toLocaleString('en')}
                                    </td>
                                    <td className={step < 4 ? 'opacity_col' : ''}>
£
                                        {label1New.onshore_bond[4].toLocaleString('en')}
                                    </td>
                                    <td className={step < 4 ? 'opacity_col' : ''}>
£
                                        {label1New.onshore_bond[5].toLocaleString('en')}
                                    </td>
                                </tr>
                            )
                            }
                            {
                                typeof label1New.property !== 'undefined'
                            && (
                                <tr>
                                    <td>Property</td>
                                    <td className={step < 1 ? 'opacity_col' : ''}>
£
                                        {label1New.property[0].toLocaleString('en')}
                                    </td>
                                    <td className={step < 2 ? 'opacity_col' : ''}>{label1New.property[1].toLocaleString('en')}</td>
                                    <td className={step < 1 ? 'opacity_col' : ''}>
£
                                        {label1New.property[2].toLocaleString('en')}
                                    </td>
                                    <td className={step < 3 ? 'opacity_col' : ''}>{label1New.property[3].toLocaleString('en')}</td>
                                    <td className={step < 4 ? 'opacity_col' : ''}>{label1New.property[4].toLocaleString('en')}</td>
                                    <td className={step < 4 ? 'opacity_col' : ''}>{label1New.property[5].toLocaleString('en')}</td>
                                </tr>
                            )
                            }
                            <tr>
                                <td>Cash</td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
£
                                    {label1New.cash[0].toLocaleString('en')}
                                </td>
                                <td className={step < 2 ? 'opacity_col' : ''}>
£
                                    {label1New.cash[1].toLocaleString('en')}
                                </td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
£
                                    {label1New.cash[2].toLocaleString('en')}
                                </td>
                                <td className={step < 3 ? 'opacity_col' : ''}>
£
                                    {label1New.cash[3].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.cash[4].toLocaleString('en')}
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
£
                                    {label1New.cash[5].toLocaleString('en')}
                                </td>
                            </tr>
                            <tr>
                                <td><b>Total</b></td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
                                    <b>{label1New.total[0] && `£${label1New.total[0].toLocaleString('en')}`}</b>
                                </td>
                                <td className={step < 2 ? 'opacity_col' : ''}>
                                    <b>{label1New.total[1] && `£${label1New.total[1].toLocaleString('en')}`}</b>
                                </td>
                                <td className={step < 1 ? 'opacity_col' : ''}>
                                    <b>{label1New.total[2] && `£${label1New.total[2].toLocaleString('en')}`}</b>
                                </td>
                                <td className={step < 3 ? 'opacity_col' : ''}>
                                    <b>{label1New.total[3] && `£${label1New.total[3].toLocaleString('en')}`}</b>
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
                                    <b>{label1New.total[4] && `£${label1New.total[4].toLocaleString('en')}`}</b>
                                </td>
                                <td className={step < 4 ? 'opacity_col' : ''}>
                                    <b>{label1New.total[5] && `£${label1New.total[5].toLocaleString('en')}`}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TableMakingMoneyFull.propTypes = {
    step: PropTypes.number,
    edit: PropTypes.bool,
    label1: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    titleCompare: PropTypes.string,
};
TableMakingMoneyFull.defaultProps = {
    step: 0,
    edit: false,
    label1: '',
    width: 0,
    height: 0,
    titleCompare: '',
};
export default TableMakingMoneyFull;
