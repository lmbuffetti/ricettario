import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';

class InputSearch extends Component {
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
            onClickSubmit,
            placeholder,
            isShowErrors,
            disabled,
            label,
            extraClasses,
            customErrors,
            isPostal,
            meta: {
                error,
                submitFailed,
            },
        } = this.props;

        const textError = error || customErrors;
        const isError = (textError && isShowErrors) || (submitFailed && textError);

        return (
            <div className={`input-search form-inline ${extraClasses}`}>
                <label className="input-label">
                    {label}
                </label>
                <div className="dis-f span-8">
                    <input
                        {...input}
                        id={`search${isPostal ? '-postal-' : '-'}address`}
                        className={isError ? 'invalid' : ''}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                    <button
                        id={`search${isPostal ? '-postal-' : '-'}address`}
                        className="btn search-btn"
                        type="button"
                        onClick={onClickSubmit}
                        disabled={isShowErrors && textError}
                    >
                        <img
                            className="search-position"
                            src="/static/img/search-icon.svg"
                            alt="Search icon"
                        />
                        Search
                    </button>
                </div>
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, textError)}
            </div>
        );
    }
}


InputSearch.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    hintMessage: PropTypes.string,
    extraClasses: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onClickSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    isShowErrors: PropTypes.bool,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    customErrors: PropTypes.string,
    isPostal: PropTypes.bool,
};

InputSearch.defaultProps = {
    label: '',
    hintMessage: '',
    extraClasses: '',
    type: 'string',
    onChange: null,
    onClickSubmit: null,
    isShowErrors: true,
    disabled: false,
    placeholder: '',
    errorMessage: '',
    customErrors: '',
    isPostal: false,
};

export default InputSearch;
