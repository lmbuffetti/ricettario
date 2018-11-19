import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.renderValidationErrors = this.renderValidationErrors.bind(this);
    }

    renderValidationErrors = (isError, textError, { value }) => {
        if (isError && !value) {
            return (<ErrorMessage message={textError} />);
        }

        return null;
    };

    render() {
        const {
            extraClasses,
            input,
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
        } = this.props;

        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);

        return (
            <Fragment>
                <section className={`dis-f ai-c ${extraClasses}`}>
                    <input
                        {...input}
                        id={input.name}
                        type="checkbox"
                        checked={checked}
                        name={name}
                        value={fieldValue}
                    />
                    <label
                        htmlFor={name}
                        className="cur-p"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: label }}
                    />
                </section>
                {this.renderValidationErrors(isError, textError, input)}
            </Fragment>
        );
    }
}

Checkbox.propTypes = {
    name: PropTypes.string,
    input: PropTypes.object.isRequired,
    fieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    extraClasses: PropTypes.string,
    meta: PropTypes.object.isRequired,
    customErrors: PropTypes.string,
    isShowErrors: PropTypes.bool.isRequired,
};
Checkbox.defaultProps = {
    name: null,
    checked: false,
    onChange: null,
    customErrors: null,
    extraClasses: null,
};

export default Checkbox;
