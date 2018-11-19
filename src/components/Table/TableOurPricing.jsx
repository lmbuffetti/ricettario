import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { textJsonLabel } from '../../helpers/WebappFunctions';

class TableOurPricing extends Component {
    constructor(props) {
        super(props);
        this.handleEditText = this.handleEditText.bind(this);
        this.changeValueTable = this.changeValueTable.bind(this);
    }

    handleEditText(i, f, g, e) {
        const { editText } = this.props;
        const val = e.target.value;
        const data = {
            i, f, g, val,
        };
        editText(data);
    }

    changeValueTable(e) {
        const { ihtA } = this.props;
        ihtA(e);
    }

    render() {
        const {
            edit, width, height, label1, label2, label3,
        } = this.props;
        const { handleEditText } = this;
        const self = this;
        const label1New = textJsonLabel(label1, edit);
        const label2New = textJsonLabel(label2, edit);
        const label3New = textJsonLabel(label3, edit);
        return (
            <div className="table_data" style={{ width, height }}>
                <div>
                    <div>
                        <table className="table_layout medium_table">
                            <tbody>
                                {
                                    label1New.map((item, i) => (
                                        <tr key={i.toString()}>
                                            {
                                                i === 0
                                                && [
                                                    <th key={0} style={{ width: '20%' }} />,
                                                    <th key={1} style={{ width: '20%' }} className="bg_violet">
                                                        {
                                                            self.props.edit
                                                                ? (
                                                                    <input
                                                                        value={item[0]}
                                                                        onChange={handleEditText.bind(this, 1, 0, 0)}
                                                                    />
                                                                )
                                                                : <span>{item[0]}</span>
                                                        }
                                                    </th>,
                                                    <th key={2} style={{ width: '20%' }}>
                                                        {
                                                            self.props.edit
                                                                ? (
                                                                    <input
                                                                        value={item[1]}
                                                                        onChange={handleEditText.bind(this, 1, 0, 1)}
                                                                    />
                                                                )
                                                                : <span>{item[1]}</span>
                                                        }
                                                    </th>,
                                                    <th key={3} style={{ width: '20%' }}>
                                                        {
                                                            self.props.edit
                                                                ? (
                                                                    <input
                                                                        value={item[2]}
                                                                        onChange={handleEditText.bind(this, 1, 0, 2)}
                                                                    />
                                                                )
                                                                : <span>{item[2]}</span>
                                                        }
                                                    </th>,
                                                    <th key={4} style={{ width: '20%' }}>
                                                        {
                                                            self.props.edit
                                                                ? (
                                                                    <input
                                                                        value={item[3]}
                                                                        onChange={handleEditText.bind(this, 1, 0, 3)}
                                                                    />
                                                                )
                                                                : <span>{item[3]}</span>
                                                        }
                                                    </th>,
                                                ]
                                            }
                                            {
                                                i === 1
                                                && <td>Upfront fees</td>
                                            }
                                            {
                                                i === 2
                                                && (
                                                    <td rowSpan={label1.length}>
Ongoing annual fees for core investment
                                                    proposition
                                                    </td>
                                                )
                                            }
                                            {
                                                i !== 0
                                                && <td className="align_left">{item[0]}</td>
                                            }
                                            {
                                                i === 1
                                                && (
                                                    <td>
                                                        {item[1]
                                                    && (
                                                        <React.Fragment>
£
                                                            {item[1].toLocaleString('en')}
                                                        </React.Fragment>
                                                    )
                                                        }
                                                    </td>
                                                )
                                            }
                                            {
                                                (i !== 0 && i !== 1)
                                                && (
                                                    <td>
                                                        {item[1].toFixed(2)}
%
                                                    </td>
                                                )
                                            }
                                            {
                                                i === 1
                                                && (
                                                    <td>
                                                        {item[2]
                                                    && (
                                                        <React.Fragment>
£
                                                            {item[2].toLocaleString('en')}
                                                        </React.Fragment>
                                                    )
                                                        }
                                                    </td>
                                                )
                                            }
                                            {
                                                i === 2
                                                && (
                                                    <td rowSpan={label1.length}>
                                                        {item[2].toFixed(2)}
%
                                                    </td>
                                                )
                                            }
                                            {
                                                i === 1
                                                && (
                                                    <td>
                                                        {item[3]
                                                    && (
                                                        <React.Fragment>
£
                                                            {item[3].toLocaleString('en')}
                                                        </React.Fragment>
                                                    )
                                                        }
                                                    </td>
                                                )
                                            }
                                            {
                                                (i !== 0 && i !== 1)
                                                && (
                                                    <td>
                                                        {item[3].toFixed(2)}
%
                                                    </td>
                                                )
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        {
                            edit
                                ? [
                                    <textarea
                                        key={0}
                                        name="label2"
                                        onChange={this.changeValueTable}
                                        className="more_info_table"
                                        value={label2New}
                                    />,
                                    <textarea
                                        key={1}
                                        name="label3"
                                        onChange={this.changeValueTable}
                                        className="more_info_small"
                                        value={label3New}
                                    />,
                                ]
                                : [
                                    <p
                                        key={0}
                                        className="more_info_table"
                                        dangerouslySetInnerHTML={{ __html: label2New }}
                                    />,
                                    <p
                                        key={1}
                                        className="more_info_small"
                                        dangerouslySetInnerHTML={{ __html: label3New }}
                                    />,
                                ]
                        }
                    </div>
                </div>
            </div>
        );
    }
}

TableOurPricing.propTypes = {
    editText: PropTypes.func,
    ihtA: PropTypes.func,
    edit: PropTypes.bool,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
TableOurPricing.defaultProps = {
    editText: null,
    ihtA: null,
    edit: false,
    label1: '',
    label2: '',
    label3: '',
    width: 0,
    height: 0,
};
export default TableOurPricing;
