/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { InputPound } from './InputPound';
import InputCustom from './InputCustom';

class MultipleItemsBlock extends Component {
    static actionArray(fields, action, index) {
        const {
            typeFieldName,
        } = this.props;
        switch (action) {
            case 'add':
                fields.push({
                    frequency: 'per_month', value_type: 'F', amount: '', regular_contribution_type: typeFieldName,
                });
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

        this.renderMultipleItems = this.renderMultipleItems.bind(this);
    }

    renderMultipleItems({ fields, meta: { error } }) {
        return (
            <div className="span-6">
                {fields.map((multiple_contribution, index) => (
                    <section className="dis-f col" key={index.toString()}>
                        <Field
                            name={`${multiple_contribution}.amount`}
                            type="text"
                            component={InputCustom}
                            placeholder="Item name"
                            extraClasses="col span-4 mb-1rem pb-0"
                            label="Item"
                            hideLabel={index !== 0}
                        />
                        <Field
                            name={`${multiple_contribution}.frequency`}
                            // type="text"
                            extraClasses="span-2 mb-1rem pb-0"
                            component={InputPound}
                            label="Value"
                            hideLabel={index !== 0}
                        />
                        <button
                            type="button"
                            className="btn_clear"
                            title="Remove condition"
                            onClick={MultipleItemsBlock.actionArray.bind(this, fields, 'remove', index)}
                            style={{ visibility: index === 0 ? 'hidden' : 'visible' }}
                        >
                            <img src="/static/img/close.svg" alt="Close" />
                        </button>
                    </section>
                ))}
                {error && (
                    <li className="error">
                        {error}
                    </li>
                )}
                <div className="span-6 mb-2rem">
                    <button
                        className="link_purple btn_clear"
                        type="button"
                        onClick={MultipleItemsBlock.actionArray.bind(this, fields, 'add', 0)}
                    >
                        + Add another
                    </button>
                </div>
            </div>
        );
    }

    render() {
        const { name } = this.props;
        return (
            <FieldArray name={name} component={this.renderMultipleItems} />
        );
    }
}

MultipleItemsBlock.propTypes = {
    typeFieldName: PropTypes.string,
    name: PropTypes.string,
};

MultipleItemsBlock.defaultProps = {
    name: 'multiple_contribution',
    typeFieldName: 'personal_contribution',
};


export default MultipleItemsBlock;
