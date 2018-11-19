import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';

class CheckboxManual extends Component {
    constructor(props) {
        super(props);

        this.renderValidationErrors = this.renderValidationErrors.bind(this);
    }

    renderValidationErrors = (isError, textError) => {
        if (isError) {
            return (<ErrorMessage message={textError} />);
        }

        return null;
    };

    render() {
        const {
            extraClasses,
            name,
            fieldValue,
            label,
            checked,
            meta: {
                error,
                submitFailed,
                touched,
            },
            isShowErrors,
            customErrors,
            onClick,
        } = this.props;

        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);

        return (
            <Fragment>
                <section className={`dis-f ai-c ${extraClasses}`}>
                    <input
                        type="checkbox"
                        checked={checked}
                        onClick={onClick}
                        name={name}
                        id={name}
                        value={fieldValue}
                        readOnly
                    />
                    <label
                        htmlFor={name}
                        className="cur-p"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: label }}
                    />
                </section>
                {this.renderValidationErrors(isError, textError)}
            </Fragment>
        );
    }
}

CheckboxManual.propTypes = {
    name: PropTypes.string,
    fieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    extraClasses: PropTypes.string,
    meta: PropTypes.object.isRequired,
    customErrors: PropTypes.string,
    isShowErrors: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
CheckboxManual.defaultProps = {
    name: null,
    checked: false,
    customErrors: null,
    extraClasses: null,
};

export default CheckboxManual;
