/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { required } from '../utils/validation.helper';
import Select from './Select';
import { InputPound } from './InputPound';
import InputCustom from './InputCustom';

class MultipleGainsBlock extends Component {
    static actionArray(fields, action, index) {
        switch (action) {
            case 'add':
                fields.push();
                break;
            case 'remove':
                fields.remove(index);
                break;
            default:
                return null;
        }
        return null;
    }

    constructor(props) {
        super(props);

        this.renderMultipleSelect = this.renderMultipleSelect.bind(this);
    }

    renderMultipleSelect({
        fields, options,
    }) {
        const {
            label,
            placeholderInput,
            placeholderSelect,
            buttonLabel,
            blockLabel,
            isShowErrors,
            hintMessage,
            hintMessageExtraClasses,
            blockLabelExtraClasses,
        } = this.props;
        return (
            <div className="dis-f fd-c mb-large">
                {blockLabel && (
                    <label className={`input-label ${blockLabelExtraClasses}`}>
                        {blockLabel}
                    </label>
                )}
                {hintMessage && (
                    <div className={`hint ${hintMessageExtraClasses}`}>
                        {hintMessage}
                    </div>
                )}
                {fields.map((field, index) => (
                    <section className="dis-f col p-r" key={index.toString()}>
                        <Field
                            name={`${field}.amount`}
                            type="text"
                            extraClasses="col span-3 pb-xsmall"
                            component={InputPound}
                            isShowErrors={isShowErrors}
                            label="Amount"
                            hideLabel={index !== 0}
                            validate={[
                                required,
                            ]}
                        />
                        <Field
                            name={`${field}.year`}
                            type="text"
                            extraClasses="col span-3 pb-xsmall"
                            component={InputCustom}
                            label="Year of loss"
                            hideLabel={index !== 0}
                            placeholder={placeholderInput}
                            isShowErrors={isShowErrors}
                            validate={[
                                required,
                            ]}
                        />
                        <Field
                            name={`${field}.owner`}
                            type="text"
                            extraClasses="col span-4 pb-xsmall"
                            component={Select}
                            label="Who is the owner of this loss?"
                            hideLabel={index !== 0}
                            options={options}
                            isShowErrors={isShowErrors}
                            placeholder={placeholderSelect}
                            validate={[
                                required,
                            ]}
                        />
                        {index !== 0 ? (
                            <button
                                type="button"
                                className="btn_clear btn_gains_losses f-d p-a"
                                title={buttonLabel}
                                onClick={MultipleGainsBlock.actionArray.bind(this, fields, 'remove', index)}
                                tabIndex={0}
                            >
                                <img src="/static/img/close.svg" alt="Remove button icon" />
                            </button>
                        ) : null}
                    </section>
                ))}
                <div className="span-8 mb-2rem">
                    <button
                        className="link_purple btn_clear f-d"
                        type="button"
                        onClick={MultipleGainsBlock.actionArray.bind(this, fields, 'add', 0)}
                        tabIndex={0}
                    >
                        {label}
                    </button>
                </div>
            </div>
        );
    }

    render() {
        const { name, options } = this.props;
        return (
            <FieldArray
                name={name}
                options={options}
                component={this.renderMultipleSelect}
            />
        );
    }
}

MultipleGainsBlock.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string.isRequired,
    placeholderSelect: PropTypes.string.isRequired,
    placeholderInput: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    hintMessage: PropTypes.string,
    blockLabel: PropTypes.string,
    hintMessageExtraClasses: PropTypes.string,
    blockLabelExtraClasses: PropTypes.string,
    isShowErrors: PropTypes.bool,
};

MultipleGainsBlock.defaultProps = {
    options: [],
    blockLabel: null,
    isShowErrors: false,
    hintMessage: null,
    hintMessageExtraClasses: null,
    blockLabelExtraClasses: null,
};

export default MultipleGainsBlock;
