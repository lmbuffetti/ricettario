import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { ErrorMessage } from './ErrorMessage';


class CheckboxButtonVerticalList extends Component {
    constructor(props) {
        super(props);
        this.renderMultipleCheckbox = this.renderMultipleCheckbox.bind(this);
        this.renderValidationErrors = this.renderValidationErrors.bind(this);
    }

    renderValidationErrors({ error, touched, submitFailed }) {
        const {
            formValue,
            isSubmitted,
            customErrors,
            fieldName,
        } = this.props;

        const connections = get(formValue, `values.${fieldName}`, []);

        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isSubmitted) || (submitFailed && textError);

        if (!connections.length && isError) {
            return <ErrorMessage message={textError} />;
        }

        return null;
    }

    renderMultipleCheckbox = ({
        input, checkboxes, label, blockLabel, meta, extraClasses, extraClass,
    }) => {
        const {
            onChange, onBlur,
        } = input;
        const inputValue = input.value;

        return (
            <div className={`form-inline ${extraClasses}`}>
                {blockLabel && (
                    <label className="input-label cur-p">
                        {blockLabel}
                    </label>
                )}
                {checkboxes.map((checkbox, i) => {
                    const handleChange = (event) => {
                        const arr = [...inputValue];
                        if (event.target.checked) {
                            arr.push(checkbox.code);
                        } else {
                            arr.splice(arr.indexOf(checkbox.code), 1);
                        }
                        onBlur(arr);
                        return onChange(arr);
                    };
                    const checked = isEmpty(inputValue) ? false : inputValue.includes(checkbox.code);
                    return (
                        <section key={i.toString()} className={extraClass}>
                            <input
                                type="checkbox"
                                name={checkbox.code}
                                id={checkbox.code}
                                value={checkbox.code}
                                onChange={handleChange.bind(this)}
                                checked={checked}
                            />
                            <label className="checkbox-label cur-p" htmlFor={checkbox.code}>
                                {checkbox.name}
                            </label>
                        </section>
                    );
                })}
                {this.renderValidationErrors(meta)}
            </div>
        );
    };

    render() {
        const {
            name,
            label,
            blockLabel,
            checkboxes,
            isSubmitted,
            formValue,
            extraClasses,
        } = this.props;
        return (
            <div className="wrap_box_checkbox_list">
                <Field
                    {...this.props}
                    name={name}
                    label={label}
                    blockLabel={blockLabel}
                    checkboxes={checkboxes}
                    type="checkbox"
                    component={this.renderMultipleCheckbox}
                    isSubmitted={isSubmitted}
                    formValue={formValue}
                    extraClasses={extraClasses}
                />
            </div>
        );
    }
}

CheckboxButtonVerticalList.propTypes = {
    name: PropTypes.string.isRequired,
    blockLabel: PropTypes.string,
    hintMessage: PropTypes.string,
    checkboxes: PropTypes.arrayOf(PropTypes.object),
    border: PropTypes.bool,
    formValue: PropTypes.object,
    isSubmitted: PropTypes.bool.isRequired,
    customErrors: PropTypes.string,
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string,
    extraClass: PropTypes.string,
};

CheckboxButtonVerticalList.defaultProps = {
    customErrors: '',
    blockLabel: '',
    hintMessage: '',
    checkboxes: [],
    border: false,
    formValue: {},
    label: null,
    extraClass: '',
};

export default CheckboxButtonVerticalList;
