/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import LetStarted from './LetStarted';
import WhatWillCost from './WhatWillCost';
import WhatWillCostBox from './WhatWillCostBox';


class Text extends Component {
    constructor(props) {
        super(props);

        this.handleChangeArray = this.handleChangeArray.bind(this);
        this.handleChageText = this.handleChageText.bind(this);
    }

    handleChangeArray(event) {
        const e = event.event;
        const labelId = event.id;
        const arrayId = event.i;
        const arrayName = event.type;
        const { editText, label1 } = this.props;
        let value = e.target.value.toString();
        let priceText;
        let labId = labelId;
        let item;
        let editData;
        if (arrayName === 'discount') {
            if (e.target.value === 'discount') {
                labId = 1;
                value = 'This covers the up-front work to set up your account with us, build your LifeLine, conduct a full analysis of your existing arrangements and make our initial recommendations.<br/><br/>As one of our early adopter clients, I have agreed that we will be waiving this fee to you.';
                priceText = '<span style="text-decoration: line-through;">£2,000</span> £0';
            } else {
                labId = 1;
                value = 'This covers the up-front work to set up your account with us, build your LifeLine, conduct a full analysis of your existing arrangements and make our initial recommendations.';
                priceText = '£2,000';
            }
            editData = {
                i: labId,
                f: arrayId,
                g: 'multi',
                val: `${priceText}//${value}`,
            };
        } else if (arrayName === 'price' && arrayId === 0) {
            item = JSON.parse(label1);
            let price = item[0].price.replace('<span style="text-decoration: line-through;">', '');
            price = price.replace('</span>', '');
            priceText = price.split(' ');
            priceText = `<span style="text-decoration: line-through;">${e.target.value}</span> ${priceText[1]}`;
            editData = {
                i: labId,
                f: arrayId,
                g: 'price',
                val: priceText,
            };
        } else if (arrayName === 'price_discount') {
            item = JSON.parse(label1);
            let price = item[0].price.replace('<span style="text-decoration: line-through;">', '');
            price = price.replace('</span>', '');
            priceText = price.split(' ');
            priceText = `<span style="text-decoration: line-through;">${priceText[0]}</span> ${e.target.value}`;
            editData = {
                i: labId,
                f: arrayId,
                g: 'price',
                val: priceText,
            };
        } else {
            value = value.replace(/\r?\n/g, '<br>');
            editData = {
                i: labId,
                f: arrayId,
                g: arrayName,
                val: value,
            };
        }
        editText(editData);
    }

    handleChageText(val) {
        const { label } = this.props;
        label(val);
    }

    render() {
        const {
            label1,
            label2,
            label3,
            label4,
            chartsType,
            width,
            height,
            edit,
            adviser,
        } = this.props;
        const {
            handleChangeArray,
            handleChageText,
        } = this;
        return (

            <div
                className={`textPresentation textSection text_version_${chartsType}`}
                style={{
                    width,
                    height,
                }}
            >
                {
                    chartsType === 'what_will_cost_box'
                    && (
                        <WhatWillCostBox
                            label1={label1}
                            label2={label2}
                            label3={label3}
                            label4={label4}
                            edit={edit}
                            handleChangeArray={handleChangeArray.bind(this)}
                        />
                    )
                }
                {
                    chartsType === 'what_will_cost'
                    && (
                        <WhatWillCost
                            label1={label1}
                            label2={label2}
                            label3={label3}
                            edit={edit}
                            handleChangeArray={handleChangeArray.bind(this)}
                        />
                    )
                }
                {
                    chartsType === 'let_started'
                        && (
                            <LetStarted
                                edit={edit}
                                handleChageText={handleChageText.bind(this)}
                                value={label1}
                                adviser={adviser}
                            />
                        )
                }
            </div>
        );
    }
}

Text.propTypes = {
    label: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    edit: PropTypes.bool,
    chartsType: PropTypes.string,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label4: PropTypes.string,
    editText: PropTypes.func,
    adviser: PropTypes.string,
};

Text.defaultProps = {
    label: () => {},
    editText: () => {},
    label1: '',
    label2: '',
    label3: '',
    label4: '',
    chartsType: '',
    width: 1440,
    height: 810,
    edit: false,
    adviser: '',
};

export default withRouter(connect()(Text));
