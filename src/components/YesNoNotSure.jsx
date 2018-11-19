import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';

class YesNoNotSure extends Component {
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
            isShowErrors,
            meta: {
                error,
                submitFailed,
            },
            label,
            extraClasses,
            containerClass,
            input,
            yesChecked,
            noChecked,
            notSureChecked,
        } = this.props;

        const textError = error || customErrors;
        const isError = (isShowErrors && textError) || (submitFailed && textError);

        return (
            <section className={`round-radio dis-f fd-c form-inline ${containerClass}`}>
                <div className="col-last">
                    <label className="input-label">
                        {label}
                    </label>
                    <div className="dis-f">
                        <div className={`wrap yes-wrap col ${extraClasses}`}>
                            <input
                                {...input}
                                id={input.name}
                                className={`col ${extraClasses}`}
                                type="radio"
                                value="1"
                                checked={yesChecked}
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
                        <div className={`wrap no-wrap col ${extraClasses}`}>
                            <input
                                id={input.name}
                                {...input}
                                className={`col-last ${extraClasses}`}
                                type="radio"
                                value="2"
                                checked={noChecked}
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
                        <div className={`wrap no-wrap col-last ${extraClasses}`}>
                            <input
                                {...input}
                                id={input.name}
                                className={`col-last ${extraClasses}`}
                                type="radio"
                                value="3"
                                checked={notSureChecked}
                            />
                            <button className={`col-last ${extraClasses}`} type="button">
                                Not Sure
                            </button>
                            <img
                                src="/static/img/tick-green.svg"
                                alt="checked-icon"
                                className={`checked-icon ${notSureChecked ? 'visible' : ''}`}
                            />
                        </div>
                    </div>
                </div>
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, textError)}
            </section>
        );
    }
}


YesNoNotSure.propTypes = {
    containerClass: PropTypes.string,
    input: PropTypes.object.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    hintMessage: PropTypes.string,
    yesChecked: PropTypes.bool,
    noChecked: PropTypes.bool,
    notSureChecked: PropTypes.bool,
    customErrors: PropTypes.string,
    extraClasses: PropTypes.string,
    meta: PropTypes.object,
    isShowErrors: PropTypes.bool,
};

YesNoNotSure.defaultProps = {
    containerClass: 'span-8',
    name: '',
    label: '',
    hintMessage: '',
    yesChecked: false,
    noChecked: false,
    notSureChecked: false,
    customErrors: '',
    extraClasses: '',
    meta: {},
    isShowErrors: false,
};

export default YesNoNotSure;
