import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';


class RadioBlocks extends Component {
    constructor(props) {
        super(props);
        this.renderValidationErrors = this.renderValidationErrors.bind(this);
        this.renderBlocks = this.renderBlocks.bind(this);
    }

    renderHint = (isError) => {
        const {
            hintMessage,
        } = this.props;

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

    renderBlocks() {
        const {
            input,
            fieldsName,
            selectedValue,
            blocks,
        } = this.props;
        return blocks
            .map((checkbox, i) => {
                if (checkbox.code !== 'unknown' && checkbox.name !== 'Not Sure') {
                    return (
                        <section key={checkbox.id} className="mb-2rem">
                            <input
                                {...input}
                                type="radio"
                                name={fieldsName}
                                value={checkbox.code}
                                id={`${fieldsName}_${i}`}
                                checked={selectedValue === checkbox.code}
                            />
                            <label
                                htmlFor={`${fieldsName}_${i}`}
                                className="checkbox-label cur-p"
                            >
                                <h6>
                                    {checkbox.name}
                                </h6>
                                <p>
                                    {checkbox.description}
                                </p>
                            </label>
                        </section>
                    );
                }

                return null;
            });
    }

    render() {
        const {
            isShowErrors,
            customErrors,
            extraClasses,
            label,
            blocks,
            meta: {
                touched,
                error,

                submitFailed,
            },
        } = this.props;
        const realEl = blocks.filter(item => item.code !== 'unknown' && item.name !== 'Not Sure');
        const numEl = realEl.length;
        const colEl = numEl > 2 ? 3 : numEl;
        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);
        return (
            <div className={`form-inline span-8 box_checkbox  ${extraClasses}`}>
                <label className="input-label">
                    {label}
                </label>
                <div className={`wrap_box_checkbox column-${colEl}`}>
                    {this.renderBlocks()}
                </div>
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, textError)}
            </div>
        );
    }
}

RadioBlocks.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    isShowErrors: PropTypes.bool,
    label: PropTypes.string.isRequired,
    blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
    fieldsName: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,
    hintMessage: PropTypes.string,
    customErrors: PropTypes.string,
    extraClasses: PropTypes.string,
};

RadioBlocks.defaultProps = {
    customErrors: '',
    hintMessage: '',
    isShowErrors: true,
    selectedValue: '',
    extraClasses: '',
};

export default RadioBlocks;
