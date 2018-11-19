import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { ErrorMessage } from './ErrorMessage';

export class InputPound extends Component {
    constructor(props) {
        super(props);

        this.renderHint = this.renderHint.bind(this);
        this.renderValidationErrors = this.renderValidationErrors.bind(this);
    }

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
        if (isError) {
            return (<ErrorMessage message={textError} />);
        }

        return null;
    };

    render() {
        const {
            input,
            isShowErrors,
            customErrors,
            meta: {
                touched,
                error,
                submitFailed,
            },
            extraClasses,
            name,
            label,
            placeholder,
            disabled,
            required,
        } = this.props;
        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);
        return (
            <div className={`form-inline col ${extraClasses}`}>
                {!isEmpty(label)
                && (
                    <label className="input-label" htmlFor={name}>
                        {label}
                    </label>
                )
                }
                <div>
                    <img
                        className="pound-position"
                        src="/static/img/currency-pound.svg"
                        alt="Pound Stering"
                    />
                </div>
                <input
                    {...input}
                    id={input.name}
                    className={`${isError ? 'invalid pound-input' : 'pound-input'}`}
                    name={name}
                    type="number"
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                />
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, textError)}
            </div>
        );
    }
}


InputPound.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    hintMessage: PropTypes.string,
    extraClasses: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    isShowErrors: PropTypes.bool,
    customErrors: PropTypes.string,
};

InputPound.defaultProps = {
    name: '',
    label: '',
    hintMessage: '',
    extraClasses: '',
    disabled: false,
    required: false,
    placeholder: '',
    errorMessage: '',
    isShowErrors: true,
    customErrors: null,
};
