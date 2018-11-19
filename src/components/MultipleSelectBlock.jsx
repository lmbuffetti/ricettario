/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { required } from '../utils/validation.helper';
import MultipleSelect from './MultipleSelect';

class MultipleSelectBlock extends Component {
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
            label, placeholder, buttonLabel, blockLabel,
        } = this.props;
        return (
            <div className="span-8 dis-f fd-c mb-large">
                {blockLabel && (
                    <label className="input-label">
                        {blockLabel}
                    </label>
                )}
                {fields.map((field, index) => (
                    <section className="dis-f col" key={index.toString()}>
                        <Field
                            name={field}
                            type="text"
                            extraClasses="span-4 mb-1rem"
                            component={MultipleSelect}
                            hideLabel
                            options={options}
                            placeholder={placeholder}
                            validate={[
                                required,
                            ]}
                        />
                        {index !== 0 ? (
                            <button
                                type="button"
                                className="btn_clear btn_clear_c mt-small f-d"
                                title={buttonLabel}
                                onClick={MultipleSelectBlock.actionArray.bind(this, fields, 'remove', index)}
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
                        onClick={MultipleSelectBlock.actionArray.bind(this, fields, 'add', 0)}
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

MultipleSelectBlock.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    blockLabel: PropTypes.string,
};

MultipleSelectBlock.defaultProps = {
    options: [],
    blockLabel: null,
};

export default MultipleSelectBlock;
