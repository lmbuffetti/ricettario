import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isNull from 'lodash/isNull';
import { ErrorMessage } from './ErrorMessage';

class CheckedCheckboxesBlock extends Component {
    constructor(props) {
        super(props);

        this.renderValidationErrors = this.renderValidationErrors.bind(this);
        this.renderHint = this.renderHint.bind(this);
        this.changeBoolCheckBox = this.changeBoolCheckBox.bind(this);
    }

    changeBoolCheckBox = (event) => {
        const { changeFieldValue, fieldName, formValue } = this.props;
        const { value } = event.target;
        const currentValue = get(formValue, `values.${fieldName}`, null);

        const booleanValue = JSON.parse(value);

        if (booleanValue !== currentValue) {
            changeFieldValue(fieldName, booleanValue);
        }
    };

    renderHint = (isError) => {
        const { hintMessage } = this.props;
        if (hintMessage !== '' && !isError) {
            return (
                <div className="hint">
                    {hintMessage}
                </div>
            );
        }
        return null;
    };

    renderValidationErrors = (isError, textError) => {
        const { formValue, fieldName } = this.props;

        if (isError && isNull(get(formValue, `values.${fieldName}`, null))) {
            return (<ErrorMessage message={textError} />);
        }

        return null;
    };

    render() {
        const {
            input,
            label,
            isShowErrors,
            yesChecked,
            noChecked,
            customErrors,
            meta: {
                error,
                submitFailed,
            },
        } = this.props;

        const textError = error || customErrors;
        const isError = (isShowErrors && textError) || (submitFailed && textError);
        return (
            <div className="form-inline">
                <label className="input-label">
                    {label}
                </label>
                <section className="dis-f ai-c mt-1rem">
                    <input
                        type="checkbox"
                        value
                        onChange={this.changeBoolCheckBox}
                        checked={yesChecked}
                        id="checkedBlockYes"
                    />
                    <label className="checkbox-label cur-p" htmlFor="checkedBlockYes">
                        Yes
                    </label>
                </section>
                <section className="dis-f ai-c mt-1rem">
                    <input
                        type="checkbox"
                        value={false}
                        onChange={this.changeBoolCheckBox}
                        checked={noChecked}
                        id="checkedBlockNo"
                    />
                    <label className="checkbox-label cur-p" htmlFor="checkedBlockNo">
                        No
                    </label>
                </section>
                {this.renderValidationErrors(isError, textError)}
                {this.renderHint(isError)}
            </div>
        );
    }
}

CheckedCheckboxesBlock.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    isShowErrors: PropTypes.bool,
    yesChecked: PropTypes.bool,
    noChecked: PropTypes.bool,
    customErrors: PropTypes.string,
    meta: PropTypes.object,
    changeFieldValue: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    formValue: PropTypes.object.isRequired,
    hintMessage: PropTypes.string,
};

CheckedCheckboxesBlock.defaultProps = {
    isShowErrors: true,
    yesChecked: null,
    noChecked: null,
    customErrors: null,
    meta: {},
    hintMessage: null,
};

export default CheckedCheckboxesBlock;
