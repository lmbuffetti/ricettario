/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { InputPound } from './InputPound';
import InputCustom from './InputCustom';
import Select from './Select';
import { PERIODS } from '../helpers/constants';

class MultipleMoneyWhomBlock extends Component {
    static actionArray(fields, action, index) {
        switch (action) {
            case 'add':
                fields.push({
                    frequency: 'per_month', value_type: 'F', amount: '', whom: '',
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
        const { hideLabel, labelPound, labelWhom } = this.props;

        return (
            <div className="span-8">
                {fields.map((multiple_contribution, index) => (
                    <section className="dis-f" key={index.toString()}>
                        <Field
                            name={`${multiple_contribution}.amount`}
                            type="text"
                            component={InputPound}
                            extraClasses={`col span-4 mb-0 pb-0 ${(!hideLabel || index < 1) ? '' : 'pt-medium'}`}
                            label={(!hideLabel || index < 1) ? labelPound : ''}
                        />
                        <Field
                            name={`${multiple_contribution}.frequency`}
                            type="text"
                            extraClasses="col span-2 mb-0 pb-0"
                            component={Select}
                            options={PERIODS}
                            removeMargin={!((!hideLabel || index < 1))}
                            label=""
                        />
                        <Field
                            name={`${multiple_contribution}.whom`}
                            type="text"
                            extraClasses={`col span-2 mb-0 pb-0 ${(!hideLabel || index < 1) ? '' : 'pt-medium'}`}
                            component={InputCustom}
                            label={(!hideLabel || index < 1) ? labelWhom : ''}
                        />
                        <button
                            type="button"
                            className="btn_clear pt-small"
                            title="Remove Contribution"
                            onClick={MultipleMoneyWhomBlock.actionArray.bind(this, fields, 'remove', index)}
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
                <div className="span-8 mt-medium mb-medium">
                    <button
                        className="link_purple btn_clear"
                        type="button"
                        onClick={MultipleMoneyWhomBlock.actionArray.bind(this, fields, 'add', 0)}
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

MultipleMoneyWhomBlock.propTypes = {
    hideLabel: PropTypes.bool,
    name: PropTypes.string,
    labelPound: PropTypes.string,
    labelWhom: PropTypes.string,
};

MultipleMoneyWhomBlock.defaultProps = {
    name: 'multiple_contribution',
    hideLabel: false,
    labelPound: null,
    labelWhom: null,
};


export default MultipleMoneyWhomBlock;
