import React, { Component } from 'react';
// import { post } from 'axios';
import PropTypes from 'prop-types';
// import TextareaAutosize from 'react-autosize-textarea';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import { isJson } from '../../helpers/WebappFunctions';

class WhatWillCostBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxHeightText: 0,
            maxHeightSubText: 0,
        };
        this.calcElemHeight = this.calcElemHeight.bind(this);
        this.handleChangeArray = this.handleChangeArray.bind(this);
    }

    componentDidMount() {
        this.calcElemHeight();
    }

    componentDidUpdate() {
        this.calcElemHeight();
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

    calcElemHeight() {
        const {
            maxHeightText, maxHeightSubText,
        } = this.state;
        let text = document.getElementsByClassName('text_text_box');
        let subtext = document.getElementsByClassName('text_subtext_box');
        const self = this;
        let maxHeightTextLocal = -1;
        let maxHeightSubTextLocal = -1;
        text = [].slice.call(text);
        subtext = [].slice.call(subtext);

        text.map((item) => {
            maxHeightTextLocal = Math.max(maxHeightText, item.clientHeight);
            return null;
        });
        subtext.map((item) => {
            maxHeightSubTextLocal = Math.max(maxHeightSubText, item.clientHeight);
            return null;
        });
        if (maxHeightText !== maxHeightTextLocal || maxHeightSubText !== maxHeightSubTextLocal) {
            setTimeout(() => {
                self.setState({
                    maxHeightText: maxHeightTextLocal,
                    maxHeightSubText: maxHeightSubTextLocal,
                });
            }, 5000);
            self.setState({
                maxHeightText: maxHeightTextLocal,
                maxHeightSubText: maxHeightSubTextLocal,
            });
        }
    }

    render() {
        const {
            label1,
            label2,
            label3,
            label4,
            edit,
        } = this.props;
        const {
            maxHeightText,
            maxHeightSubText,
        } = this.state;
        const {
            handleChangeArray,
        } = this;
        const labelDone1 = isJson(label1) ? JSON.parse(label1) : label1;
        const labelDone2 = isJson(label2) ? JSON.parse(label2) : label2;
        const labelDone3 = isJson(label3) ? JSON.parse(label3) : label3;
        const labelDone4 = isJson(label4) ? JSON.parse(label4) : label4;
        return (
            <div>
                <div>
                    <div className="rowFlexTop">
                        <div className="col-md-8">
                            <div className="rowFlexTop">
                                {
                                    labelDone1.map((item, i) => (
                                        <div
                                            key={i.toString()}
                                            className={i < 3 ? 'col-md-4' : 'col-md-12'}
                                        >
                                            <div className="rowFlexTop">
                                                {
                                                    !edit
                                                        ? [
                                                            <div
                                                                key={0}
                                                                className={i < 3 ? 'col-md-12' : 'col-md-4'}
                                                            >
                                                                <h4 className="text_title_box">{item.title}</h4>
                                                                <h5 className="text_price_box">{item.price}</h5>
                                                                <h6
                                                                    style={{ textDecoration: i === 0 ? 'line-through' : '' }}
                                                                    className="text_subtitle_box"
                                                                >
                                                                    {item.subtitle}
                                                                </h6>
                                                            </div>,
                                                            <div
                                                                key={1}
                                                                className={i < 3 ? 'col-md-12' : 'col-md-8'}
                                                            >
                                                                <p
                                                                    style={{ minHeight: maxHeightText }}
                                                                    className="text_text_box"
                                                                >
                                                                    {item.text}
                                                                </p>
                                                                <p
                                                                    style={{ minHeight: maxHeightSubText }}
                                                                    className="text_subtext_box"
                                                                >
                                                                    <b>{item.subtext}</b>
                                                                </p>
                                                            </div>,
                                                        ]
                                                        : [
                                                            <div
                                                                key={0}
                                                                className={i < 3 ? 'col-md-12' : 'col-md-4'}
                                                            >
                                                                <input
                                                                    className="text_title_box"
                                                                    type="text"
                                                                    value={item.title}
                                                                    onChange={handleChangeArray.bind(this, 1, i, 'title')}
                                                                />
                                                                <input
                                                                    className="text_price_box"
                                                                    type="text"
                                                                    value={item.price}
                                                                    onChange={handleChangeArray.bind(this, 1, i, 'price')}
                                                                />
                                                                <input
                                                                    className="text_subtitle_box"
                                                                    type="text"
                                                                    value={item.subtitle}
                                                                    onChange={handleChangeArray.bind(this, 1, i, 'subtitle')}
                                                                />
                                                            </div>,
                                                            <div
                                                                key={1}
                                                                className={i < 3 ? 'col-md-12' : 'col-md-8'}
                                                            >
                                                                <textarea
                                                                    className="text_text_box"
                                                                    value={item.text}
                                                                    onChange={handleChangeArray.bind(this, 1, i, 'text')}
                                                                />
                                                                <p>
                                                                    {160 - item.text.length}
                                                                    {' '}
Characters
                                                                        left
                                                                </p>
                                                                <textarea
                                                                    className="text_subtext_box"
                                                                    value={item.subtext}
                                                                    onChange={handleChangeArray.bind(this, 1, i, 'subtext')}
                                                                />
                                                                <p>
                                                                    {100 - item.subtext.length}
                                                                    {' '}
Characters
                                                                        left
                                                                </p>
                                                            </div>,
                                                        ]
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-md-1">
                            <span>=</span>
                        </div>
                        <div className="col-md-3">
                            <div className="rowFlexTop" style={{ borderColor: '#21d7f5' }}>
                                {
                                    !edit
                                        ? [
                                            <div key={0} className="col-md-12">
                                                <h4 className="text_title_box">{labelDone2[0].title}</h4>
                                                <h5 className="text_price_box">{labelDone2[0].price}</h5>
                                                <h6 className="text_subtitle_box">{labelDone2[0].subtitle}</h6>
                                            </div>,
                                            <div key={1} className="col-md-12">
                                                <p
                                                    style={{ minHeight: maxHeightText }}
                                                    className="text_text_box"
                                                >
                                                    {labelDone2[0].text}
                                                </p>
                                                <p
                                                    style={{ minHeight: maxHeightSubText }}
                                                    className="text_subtext_box"
                                                >
                                                    {labelDone2[0].subtext}
                                                </p>
                                            </div>,
                                        ]
                                        : [
                                            <div key={0} className="col-md-12">
                                                <input
                                                    className="text_title_box"
                                                    type="text"
                                                    value={labelDone2[0].title}
                                                    onChange={handleChangeArray.bind(this, 2, 0, 'title')}
                                                />
                                                <input
                                                    className="text_price_box"
                                                    type="text"
                                                    value={labelDone2[0].price}
                                                    onChange={handleChangeArray.bind(this, 2, 0, 'price')}
                                                />
                                                <input
                                                    className="text_subtitle_box"
                                                    type="text"
                                                    value={labelDone2[0].subtitle}
                                                    onChange={handleChangeArray.bind(this, 2, 0, 'subtitle')}
                                                />
                                            </div>,
                                            <div key={1} className="col-md-12">
                                                <textarea
                                                    className="text_text_box"
                                                    value={labelDone2[0].text}
                                                    onChange={handleChangeArray.bind(this, 2, 0, 'text')}
                                                />
                                                <p>
                                                    {160 - labelDone2[0].text.length}
                                                    {' '}
Characters left
                                                </p>
                                                <textarea
                                                    className="text_subtext_box"
                                                    value={labelDone2[0].subtext}
                                                    onChange={handleChangeArray.bind(this, 2, 0, 'subtext')}
                                                />
                                                <p>
                                                    {100 - labelDone2[0].subtext.length}
                                                    {' '}
Characters left
                                                </p>
                                            </div>,
                                        ]
                                }
                            </div>
                        </div>
                    </div>
                    <div className="rowFlexTop">
                        <div className="col-md-8">
                            <div className="rowFlexTop">
                                <div className="col-md-12">
                                    <div className="rowFlexTop">
                                        {
                                            !edit
                                                ? [
                                                    <div key={0} className="col-md-4">
                                                        <h4 className="text_title_box">{labelDone3[0].title}</h4>
                                                        <h5 className="text_price_box">{labelDone3[0].price}</h5>
                                                        <h6 className="text_subtitle_box">{labelDone3[0].subtitle}</h6>
                                                    </div>,
                                                    <div key={1} className="col-md-8">
                                                        <p className="text_text_box">{labelDone3[0].text}</p>
                                                        <p className="text_subtext_box">
                                                            <b>{labelDone3[0].subtext}</b>
                                                        </p>
                                                    </div>,
                                                ]
                                                : [
                                                    <div key={0} className="col-md-4">
                                                        <input
                                                            className="text_title_box"
                                                            type="text"
                                                            value={labelDone3[0].title}
                                                            onChange={handleChangeArray.bind(this, 3, 0, 'title')}
                                                        />
                                                        <input
                                                            className="text_price_box"
                                                            type="text"
                                                            value={labelDone3[0].price}
                                                            onChange={handleChangeArray.bind(this, 3, 0, 'price')}
                                                        />
                                                        <input
                                                            className="text_subtitle_box"
                                                            type="text"
                                                            value={labelDone3[0].subtitle}
                                                            onChange={handleChangeArray.bind(this, 1, 0, 'subtitle')}
                                                        />
                                                    </div>,
                                                    <div key={1} className="col-md-8">
                                                        <textarea
                                                            className="text_text_box"
                                                            value={labelDone3[0].text}
                                                            onChange={handleChangeArray.bind(this, 3, 0, 'text')}
                                                        />
                                                        <p>
                                                            {160 - labelDone3[0].text.length}
                                                            {' '}
Characters left
                                                        </p>
                                                        <textarea
                                                            className="text_subtext_box"
                                                            value={labelDone3[0].subtext}
                                                            onChange={handleChangeArray.bind(this, 3, 0, 'subtext')}
                                                        />
                                                        <p>
                                                            {160 - labelDone3[0].subtext.length}
                                                            {' '}
Characters
                                                            left
                                                        </p>
                                                    </div>,
                                                ]
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rowFlexTop">
                        <div className="col-md-8">
                            {
                                !edit
                                    ? <p dangerouslySetInnerHTML={{ __html: labelDone4 }} />
                                    : (
                                        <textarea
                                            className="moreinfo_text_box"
                                            value={labelDone4.replace(/<br\s*[/]?>/gi, '\n')}
                                            onChange={handleChangeArray.bind(this, 4, -1, 'singletext')}
                                        />
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

WhatWillCostBox.propTypes = {
    edit: PropTypes.bool,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label4: PropTypes.string,
    handleChangeArray: PropTypes.func,
};

WhatWillCostBox.defaultProps = {
    handleChangeArray: null,
    label1: '',
    label2: '',
    label3: '',
    label4: '',
    edit: false,
};

export default withRouter(connect()(WhatWillCostBox));
