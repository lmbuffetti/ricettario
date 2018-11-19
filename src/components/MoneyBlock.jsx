import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { InputPound } from './InputPound';
import Select from './Select';
import { PERIODS } from '../helpers/constants';
import {
    isNumber,
    positiveNumber,
    required,
    requiredMoney,
} from '../utils/validation.helper';


class MoneyBlock extends Component {
    render() {
        const {
            extraClasses,
            label,
            poundFieldName,
            hintMessage,
            isShowErrors,
            moneyPlaceholder,
            selectFieldName,
            periodPlaceholder,
            optionsPeriod,
        } = this.props;

        return (
            <section className={`dis-f col ${extraClasses}`}>
                <Field
                    label={label}
                    component={InputPound}
                    name={poundFieldName}
                    hintMessage={hintMessage}
                    isShowErrors={isShowErrors}
                    placeholder={moneyPlaceholder}
                    extraClasses="col span-4"
                    validate={[
                        requiredMoney,
                        isNumber,
                        positiveNumber,
                    ]}
                />
                <Field
                    component={Select}
                    name={selectFieldName}
                    fieldName={selectFieldName}
                    isShowErrors={isShowErrors}
                    placeholder={periodPlaceholder}
                    options={optionsPeriod}
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

MoneyBlock.propTypes = {
    poundFieldName: PropTypes.string.isRequired,
    selectFieldName: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    label: PropTypes.string,
    moneyPlaceholder: PropTypes.string,
    periodPlaceholder: PropTypes.string,
    optionsPeriod: PropTypes.arrayOf(PropTypes.object),
    hintMessage: PropTypes.string,
    isShowErrors: PropTypes.bool,
};

MoneyBlock.defaultProps = {
    extraClasses: '',
    label: '',
    hintMessage: '',
    moneyPlaceholder: '',
    periodPlaceholder: '',
    optionsPeriod: PERIODS,
    isShowErrors: false,
};


export default MoneyBlock;
