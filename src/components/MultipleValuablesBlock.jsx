/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { required } from '../utils/validation.helper';
import { InputPound } from './InputPound';
import InputCustom from './InputCustom';

class MultipleValuablesBlock extends Component {
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
            label, placeholder, buttonLabel, blockLabel, isShowErrors, blockLabelExtraClasses,
        } = this.props;
        return (
            <div className="span-8 dis-f fd-c mb-large">
                {blockLabel && (
                    <label className={`input-label ${blockLabelExtraClasses}`}>
                        {blockLabel}
                    </label>
                )}
                {fields.map((field, index) => (
                    <section className="dis-f col p-r" key={index.toString()}>
                        <Field
                            name={`${field}.item`}
                            type="text"
                            extraClasses="col span-3 pb-xsmall"
                            component={InputCustom}
                            isShowErrors={isShowErrors}
                            label="Item"
                            placeholder={placeholder}
                            hideLabel={index !== 0}
                            validate={[
                                required,
                            ]}
                        />
                        <Field
                            name={`${field}.value`}
                            type="text"
                            extraClasses="col span-4 pb-xsmall"
                            component={InputPound}
                            label="Value"
                            hideLabel={index !== 0}
                            options={options}
                            isShowErrors={isShowErrors}
                            validate={[
                                required,
                            ]}
                        />
                        {index !== 0 ? (
                            <button
                                type="button"
                                className="btn_clear btn_gains_losses f-d p-a"
                                title={buttonLabel}
                                onClick={MultipleValuablesBlock.actionArray.bind(this, fields, 'remove', index)}
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
                        onClick={MultipleValuablesBlock.actionArray.bind(this, fields, 'add', 0)}
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

MultipleValuablesBlock.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    blockLabel: PropTypes.string,
    isShowErrors: PropTypes.bool,
    blockLabelExtraClasses: PropTypes.string,
};

MultipleValuablesBlock.defaultProps = {
    options: [],
    blockLabel: null,
    isShowErrors: false,
    blockLabelExtraClasses: null,
};

export default MultipleValuablesBlock;
