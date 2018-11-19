import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { textJsonLabel } from '../../helpers/WebappFunctions';

class TableMakingMoney extends Component {
    render() {
        const {
            width, height, label1, label2, label3, label4, edit,
        } = this.props;
        const label1New = textJsonLabel(label1, edit);
        const label2New = textJsonLabel(label2, edit);
        const label3New = textJsonLabel(label3, edit);
        const label4New = textJsonLabel(label4, edit);
        return (
            <div className="table_data" style={{ width, height }}>
                <div>
                    <div className="medium_table">
                        <div className="rowFlexTop">
                            <div className="colored_box green">
                                <span className="icon_table" />
                                <span>
£
                                    {label2New.toLocaleString('en')}
                                </span>
                                <br />
                                More income each year
                            </div>
                            <div className="colored_box blue">
                                <span className="icon_table" />
                                <span>
£
                                    {label3New.toLocaleString('en')}
                                </span>
                                <br />
                                Less tax each year
                            </div>
                            <div className="colored_box green">
                                <span className="icon_table" />
                                <span>
£
                                    {label4New.toLocaleString('en')}
                                </span>
                                <br />
                                More inheritance to their children
                            </div>
                        </div>
                        <table className="making_money medium_table">
                            <tbody>
                                <tr>
                                    <th style={{ width: '25%' }} />
                                    <th style={{ width: '25%' }} className="bg_grey">Where they started out</th>
                                    <th style={{ width: '25%' }} className="bg_violet">How we helped them</th>
                                </tr>
                                <tr>
                                    <td>Retirement income p.a.</td>
                                    <td>
£
                                        {label1New.retirement[0].toLocaleString('en')}
                                    </td>
                                    <td>
£
                                        {label1New.retirement[1].toLocaleString('en')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Income tax p.a.</td>
                                    <td>
£
                                        {label1New.income_tax[0].toLocaleString('en')}
                                    </td>
                                    <td>
£
                                        {label1New.income_tax[1].toLocaleString('en')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Children inheritance</td>
                                    <td>
£
                                        {label1New.children[0].toLocaleString('en')}
                                    </td>
                                    <td>
£
                                        {label1New.children[1].toLocaleString('en')}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

TableMakingMoney.propTypes = {
    edit: PropTypes.bool,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label4: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
TableMakingMoney.defaultProps = {
    edit: false,
    label1: '',
    label2: '',
    label3: '',
    label4: '',
    width: 0,
    height: 0,
};
export default TableMakingMoney;
