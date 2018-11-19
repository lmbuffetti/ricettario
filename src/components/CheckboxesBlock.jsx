import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';


class CheckboxesBlock extends Component {
    constructor(props) {
        super(props);
        this.renderMultipleCheckbox = this.renderMultipleCheckbox.bind(this);
    }

    renderMultipleCheckbox = ({
        input, checkboxes, label,
    }) => {
        const {
            onChange, onBlur,
        } = input;

        const inputValue = input.value;


        return (
            <div className="form-inline">
                <label className="input-label">
                    {label}
                </label>
                {checkboxes
                    .map((checkbox) => {
                        const handleChange = (event) => {
                            const arr = [...inputValue];
                            if (event.target.checked) {
                                arr.push(checkbox.code);
                            } else {
                                arr.splice(arr.indexOf(checkbox.code), 1);
                            }
                            onBlur(arr);
                            return onChange(arr);
                        };
                        const checked = isEmpty(inputValue) ? false : inputValue.includes(checkbox.code);
                        return (
                            <section className="dis-f ai-c mt-1rem">
                                <input
                                    type="checkbox"
                                    name={checkbox.code}
                                    id={checkbox.code}
                                    value={checkbox.code}
                                    onChange={handleChange.bind(this)}
                                    checked={checked}
                                />
                                <label className="checkbox-label cur-p" htmlFor={checkbox.code}>
                                    {checkbox.name}
                                </label>
                            </section>
                        );
                    })}
            </div>
        );
    };

    render() {
        const {
            name,
            checkboxes,
        } = this.props;
        return (
            <Field
                {...this.props}
                name={name}
                checkboxes={checkboxes}
                type="checkbox"
                component={this.renderMultipleCheckbox}
            />
        );
    }
}

CheckboxesBlock.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checkboxes: PropTypes.arrayOf(PropTypes.object),
    border: PropTypes.bool,
    formValue: PropTypes.object,
    isShowErrors: PropTypes.bool,
    customErrors: PropTypes.string,
};

CheckboxesBlock.defaultProps = {
    customErrors: '',
    checkboxes: [],
    isShowErrors: true,
    border: false,
    formValue: {},
};

export default CheckboxesBlock;
