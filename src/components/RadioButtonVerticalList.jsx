import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';


class RadioButtonVerticalList extends Component {
    constructor(props) {
        super(props);
        this.renderValidationErrors = this.renderValidationErrors.bind(this);
        this.renderBlocks = this.renderBlocks.bind(this);
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

    renderBlocks() {
        const {
            blocks, extraClass, input, fieldsName, selectedValue, onNextStep,
        } = this.props;
        return blocks
            .map((key, i) => (
                <section key={i.toString()} className={extraClass}>
                    <input
                        {...input}
                        type="radio"
                        name={fieldsName}
                        value={key.code}
                        id={`${fieldsName}_${i}`}
                        checked={selectedValue === key.code}
                    />
                    <label
                        htmlFor={`${fieldsName}_${i}`}
                        className="checkbox-label cur-p"
                        onClick={onNextStep}
                    >
                        <h6>
                            {key.name}
                        </h6>
                    </label>
                </section>
            ));
    }

    render() {
        const {
            isShowErrors,
            customErrors,
            meta: {
                touched,
                error,
                submitFailed,
            },
            label,
        } = this.props;

        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);

        return (
            <div className="form-inline span-8 box_checkbox">
                {label && (
                    <label className="input-label">
                        {label}
                    </label>
                )}
                <div className="wrap_box_checkbox_list">
                    {this.renderBlocks()}
                </div>
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, textError)}
            </div>
        );
    }
}

RadioButtonVerticalList.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    isShowErrors: PropTypes.bool,
    label: PropTypes.string,
    blocks: PropTypes.object.isRequired,
    fieldsName: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,
    hintMessage: PropTypes.string,
    customErrors: PropTypes.string,
    extraClass: PropTypes.string,
    onNextStep: PropTypes.func,
};

RadioButtonVerticalList.defaultProps = {
    onNextStep: null,
    customErrors: '',
    hintMessage: '',
    isShowErrors: true,
    selectedValue: '',
    extraClass: '',
    label: '',
};

export default RadioButtonVerticalList;
