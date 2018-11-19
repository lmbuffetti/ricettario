import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { ErrorMessage } from './ErrorMessage';

class SelectAddress extends Component {
    constructor(props) {
        super(props);

        this.renderHint = this.renderHint.bind(this);
        this.renderPlaceholder = this.renderPlaceholder.bind(this);
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

    renderPlaceholder() {
        const { placeholder } = this.props;

        if (!isEmpty(placeholder)) {
            return (
                <option hidden value="">
                    {placeholder}
                </option>
            );
        }

        return null;
    }

    renderValidationErrors = (isError, textError) => {
        if (isError) {
            return (<ErrorMessage message={textError} />);
        }

        return null;
    };

    render() {
        const {
            customErrors,
            isShowErrors,
            meta: {
                touched,
                error,
                submitFailed,
            },
            extraClasses,
            label,
            input,
            options,
        } = this.props;
        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);
        return (
            <section className={`form-inline col ${extraClasses}`}>
                <label className="input-label">
                    {label}
                </label>
                <select
                    {...input}
                    id={input.name}
                    className={`${isError ? 'invalid select-comp' : 'select-comp'}`}
                >
                    {this.renderPlaceholder()}
                    {Object.keys(options).map(key => (
                        <option key={key} value={options[key]}>
                            {options[key]}
                        </option>))}
                </select>
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, textError)}
            </section>
        );
    }
}

SelectAddress.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    hintMessage: PropTypes.string,
    options: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    extraClasses: PropTypes.string,
    customErrors: PropTypes.string,
    meta: PropTypes.object,
    isShowErrors: PropTypes.bool,
    removeMargin: PropTypes.bool,
};

SelectAddress.defaultProps = {
    placeholder: '',
    extraClasses: '',
    hintMessage: '',
    customErrors: '',
    meta: null,
    isShowErrors: false,
    removeMargin: false,
    label: null,
};

export default SelectAddress;
