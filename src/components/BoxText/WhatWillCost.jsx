import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import { averageCost, isJson } from '../../helpers/WebappFunctions';

class WhatWillCost extends Component {
    constructor(props) {
        super(props);
        this.handleChangeArray = this.handleChangeArray.bind(this);
    }

    handleChangeArray(id, i, type, e) {
        const { handleChangeArray } = this.props;
        const data = {
            id,
            i,
            type,
            event: e,
        };
        handleChangeArray(data);
    }

    render() {
        const {
            label1, label2, label3, edit,
        } = this.props;
        const { handleChangeArray } = this;
        const labelDone1 = isJson(label1) ? JSON.parse(label1) : label1;
        const labelDone2 = isJson(label2) ? JSON.parse(label2) : label2;
        const labelDone3 = isJson(label3) ? JSON.parse(label3) : label3;
        return (
            <div>
                <div className="rowFlexTop">
                    {
                        labelDone1.map((item, i) => {
                            let price = item.price.replace('<span style="text-decoration: line-through;">', '');
                            price = price.replace('</span>', '');
                            price = price.split(' ');
                            const discountSelect = price.length > 1 ? 'discount' : 'no discount';
                            return (
                                <div
                                    key={i.toString()}
                                    className="col-md-3"
                                >
                                    <div>
                                        {
                                            !edit
                                                ? [
                                                    <h4 key={0} className="text_title_box">{item.title}</h4>,
                                                    <h5
                                                        key={1}
                                                        className="text_price_box"
                                                        dangerouslySetInnerHTML={{ __html: item.price }}
                                                    />,
                                                    <p key={2} className="text_text_box" dangerouslySetInnerHTML={{ __html: item.text }} />,
                                                ]
                                                : (
                                                    <div style={{ boxShadow: 'none' }}>
                                                        {i === 0
                                                    && (
                                                        <select
                                                            name="discount"
                                                            value={discountSelect}
                                                            onChange={handleChangeArray.bind(this, 1, i, 'discount')}
                                                        >
                                                            <option value="discount">Discount</option>
                                                            <option value="no discount">No Discount</option>
                                                        </select>
                                                    )
                                                        }
                                                        <input
                                                            className="text_title_box"
                                                            type="text"
                                                            value={item.title}
                                                            onChange={handleChangeArray.bind(this, 1, i, 'title')}
                                                        />
                                                        <div className="inlineInput">
                                                            <input
                                                                className={price.length > 1 ? 'text_price_box col-md-6' : 'text_price_box'}
                                                                type="text"
                                                                value={price.length > 1 ? price[0] : price}
                                                                onChange={handleChangeArray.bind(this, 1, i, 'price')}
                                                            />
                                                            {
                                                                price.length > 1
                                                            && (
                                                                <input
                                                                    className="text_price_box col-md-6"
                                                                    type="text"
                                                                    value={price[1]}
                                                                    onChange={handleChangeArray.bind(this, 1, i, 'price_discount')}
                                                                />
                                                            )
                                                            }
                                                        </div>
                                                        <TextareaAutosize
                                                            className="text_text_box"
                                                            value={item.text.replace(/<br\s*[/]?>/gi, '\n')}
                                                            onChange={handleChangeArray.bind(this, 1, i, 'text')}
                                                        />
                                                    </div>
                                                )
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="title_middle">
                    {
                        !edit
                            ? [
                                <h3 key={0} className="text_title_middle">{labelDone2[0].title}</h3>,
                                <p key={1} className="text_text_middle">{labelDone2[0].text}</p>,
                            ]
                            : [
                                <input
                                    key={0}
                                    className="text_title_middle"
                                    type="text"
                                    value={labelDone2[0].title}
                                    onChange={handleChangeArray.bind(this, 2, 0, 'title')}
                                />,
                                <TextareaAutosize
                                    key={1}
                                    className="text_text_middle"
                                    value={labelDone2[0].text}
                                    onChange={handleChangeArray.bind(this, 2, 0, 'text')}
                                />,
                            ]
                    }
                </div>

                <table className="text_table" style={{ borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td style={{ borderRight: 'none', borderBottom: 'none' }}><b>Total sum invested</b></td>
                            <td style={{ borderRight: 'none', borderBottom: 'none' }}><b>Ongoing advice</b></td>
                            <td style={{ borderRight: 'none', borderBottom: 'none' }}><b>Total investment costs</b></td>
                            <td style={{ borderBottom: 'none' }}><b>Total cost of ownership p.a</b></td>
                        </tr>
                        {
                            labelDone3.map((item, i) => {
                                const val0 = parseFloat(item[0]);
                                const val2 = parseFloat(item[2]);
                                const totalAverage = averageCost(val0);
                                const val3 = totalAverage + val2;
                                const total = (val0 * (totalAverage + val2) / 100);
                                return (
                                    <tr key={i.toString()}>
                                        {
                                            !edit
                                                ? [
                                                    <td key={0} style={{ borderRight: 'none' }}>
                                                    £
                                                        {parseFloat(item[0]).toLocaleString('en')}
                                                    </td>,
                                                    <td key={1} style={{ borderRight: 'none' }}>
                                                        {parseFloat(totalAverage).toFixed(2)}
%
                                                    </td>,
                                                    <td key={2} style={{ borderRight: 'none' }}>
                                                        {parseFloat(item[2]).toFixed(2)}
%
                                                    </td>,
                                                    <td key={3}>
                                                        {val3.toFixed(2)}
%
                                                    (£
                                                        {total.toLocaleString('en', { minimumFractionDigits: 0 })}
)
                                                    </td>,
                                                ]
                                                : [
                                                    <td key={0}>
                                                        <input
                                                            type="text"
                                                            name={`label_3_1${i}`}
                                                            value={item[0]}
                                                            onChange={handleChangeArray.bind(this, 3, i, 0)}
                                                        />
                                                    </td>,
                                                    <td key={1}>
                                                        {parseFloat(totalAverage).toFixed(2)}
%
                                                    </td>,
                                                    <td key={2}>
                                                        <input
                                                            type="text"
                                                            name={`label_3_3${i}`}
                                                            value={parseFloat(item[2]).toFixed(2)}
                                                            onChange={handleChangeArray.bind(this, 3, i, 2)}
                                                        />
                                                    </td>,
                                                    <td key={3}>
                                                        {val3.toFixed(2)}
%
                                                    (£
                                                        {total.toLocaleString('en', { minimumFractionDigits: 0 })}
)
                                                    </td>,
                                                ]
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

WhatWillCost.propTypes = {
    edit: PropTypes.bool,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    handleChangeArray: PropTypes.func,
};

WhatWillCost.defaultProps = {
    handleChangeArray: null,
    label1: '',
    label2: '',
    label3: '',
    edit: false,
};

export default withRouter(connect()(WhatWillCost));
