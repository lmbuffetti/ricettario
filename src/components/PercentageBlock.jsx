/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { InputPercentage } from './InputPercentage';
import Select from './Select';
import { PERCENTAGE } from '../helpers/constants';
import {
    isNumber, positiveNumber, required, requiredMoney, maxValue100,
} from '../utils/validation.helper';


class PercentageBlock extends Component {
    render() {
        const {
            extraClasses,
            label,
            poundFieldName,
            hintMessage,
            isShowErrors,
            optionVal,
            selectFieldName,
        } = this.props;
        return (
            <section className={`dis-f col ${extraClasses}`}>
                <Field
                    label={label}
                    component={InputPercentage}
                    name={poundFieldName}
                    hintMessage={hintMessage}
                    isShowErrors={isShowErrors}
                    extraClasses="col span-4"
                    validate={[
                        requiredMoney,
                        isNumber,
                        positiveNumber,
                        maxValue100,
                    ]}
                />
                <Field
                    component={Select}
                    name={selectFieldName}
                    fieldName={selectFieldName}
                    isShowErrors={isShowErrors}
                    options={optionVal}
                    label=""
                    extraClasses="col span-2"
                    validate={[
                        required,
                    ]}
                />
            </section>
        );
    }
}

PercentageBlock.propTypes = {
    poundFieldName: PropTypes.string.isRequired,
    selectFieldName: PropTypes.string.isRequired,
    optionVal: PropTypes.arrayOf(PropTypes.object),
    extraClasses: PropTypes.string,
    label: PropTypes.string,
    hintMessage: PropTypes.string,
    isShowErrors: PropTypes.bool,
};

PercentageBlock.defaultProps = {
    optionVal: PERCENTAGE,
    extraClasses: '',
    label: '',
    hintMessage: '',
    isShowErrors: false,
};


export default PercentageBlock;
