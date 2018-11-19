/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { InputPound } from './InputPound';
import Select from './Select';
import { PERIODS } from '../helpers/constants';

class MultipleMoneyBlock extends Component {
    static actionArray(fields, action, index) {
        const {
            typeFieldName,
        } = this.props;
        switch (action) {
            case 'add':
                fields.push({
                    frequency: 'per_month',
                    value_type: 'F',
                    amount: '',
                    regular_contribution_type: typeFieldName,
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

        this.renderMultipleContribution = this.renderMultipleContribution.bind(this);
    }

    renderMultipleContribution({ fields, meta: { error } }) {
        return (
            <div className="span-8">
                {fields.map((multiple_contribution, index) => (
                    <section className="dis-f col" key={index.toString()}>
                        <Field
                            name={`${multiple_contribution}.amount`}
                            type="text"
                            component={InputPound}
                            extraClasses="col span-4"
                            label="Contribution amount"
                        />
                        <Field
                            name={`${multiple_contribution}.frequency`}
                            type="text"
                            extraClasses="col span-2"
                            component={Select}
                            options={PERIODS}
                            label=""
                        />
                        <button
                            type="button"
                            className="btn_clear"
                            title="Remove Contribution"
                            onClick={MultipleMoneyBlock.actionArray.bind(this, fields, 'remove', index)}
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
                <div className="span-8 mb-2rem">
                    <button
                        className="link_purple btn_clear"
                        type="button"
                        onClick={MultipleMoneyBlock.actionArray.bind(this, fields, 'add', 0)}
                    >
                        + Add another contribution
                    </button>
                </div>
            </div>
        );
    }

    render() {
        const { name } = this.props;

        return (
            <FieldArray name={name} component={this.renderMultipleContribution} />
        );
    }
}

MultipleMoneyBlock.propTypes = {
    typeFieldName: PropTypes.string,
    name: PropTypes.string.isRequired,
};

MultipleMoneyBlock.defaultProps = {
    typeFieldName: 'personal_contribution',
};


export default MultipleMoneyBlock;
