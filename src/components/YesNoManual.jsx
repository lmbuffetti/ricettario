import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';

class YesNoManual extends Component {
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
            customErrors,
            extraClasses,
            containerClass,
            componentClass,
            yesChecked,
            noChecked,
            handleClick,
            label,
            isShowErrors,
            meta: {
                error,
                submitFailed,
            },
            input,
        } = this.props;

        const textError = error || customErrors;
        const isError = (isShowErrors && textError) || (submitFailed && textError);

        return (
            <section className={`round-radio dis-f fd-c form-inline ${componentClass}`}>
                <label className="input-label">
                    {label}
                </label>
                <div className={`col-last ${containerClass}`}>
                    <div className={`wrap yes-wrap col ${extraClasses}`}>
                        <input
                            id={input.name}
                            className={`col ${extraClasses}`}
                            type="radio"
                            value
                            checked={yesChecked}
                            onClick={handleClick}
                            readOnly
                        />
                        <button className={`col ${extraClasses}`} type="button">
                            Yes
                        </button>
                        <img
                            src="/static/img/tick-green.svg"
                            alt="checked-icon"
                            className={`checked-icon ${yesChecked ? 'visible' : ''}`}
                        />
                    </div>
                    <div className={`wrap no-wrap col-last ${extraClasses}`}>
                        <input
                            id={input.name}
                            className={`col-last ${extraClasses}`}
                            type="radio"
                            value={false}
                            checked={noChecked}
                            onClick={handleClick}
                            readOnly
                        />
                        <button className={`col-last ${extraClasses}`} type="button">
                            No
                        </button>
                        <img
                            src="/static/img/tick-green.svg"
                            alt="checked-icon"
                            className={`checked-icon ${noChecked ? 'visible' : ''}`}
                        />
                    </div>
                </div>
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, textError)}
            </section>
        );
    }
}


YesNoManual.propTypes = {
    containerClass: PropTypes.string,
    componentClass: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    hintMessage: PropTypes.string,
    yesChecked: PropTypes.bool,
    noChecked: PropTypes.bool,
    customErrors: PropTypes.string,
    extraClasses: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object,
    isShowErrors: PropTypes.bool,
};

YesNoManual.defaultProps = {
    containerClass: 'span-4',
    componentClass: 'span-4',
    label: '',
    hintMessage: '',
    yesChecked: false,
    noChecked: false,
    customErrors: '',
    extraClasses: 'span-2',
    meta: {},
    isShowErrors: false,
};

export default YesNoManual;
