import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Radio extends Component {
    render() {
        const {
            extraClasses, input, name, fieldValue, checked, label,
        } = this.props;
        return (
            <section className={`dis-f ai-c ${extraClasses}`}>
                <input
                    {...input}
                    id={input.name}
                    type="radio"
                    name={name}
                    value={fieldValue}
                    checked={checked}
                />
                <label className="checkbox-label cur-p">
                    {label}
                </label>
            </section>
        );
    }
}

Radio.propTypes = {
    name: PropTypes.string,
    input: PropTypes.object.isRequired,
    fieldValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    extraClasses: PropTypes.string,
    checked: PropTypes.bool,
};
Radio.defaultProps = {
    name: '',
    onChange: null,
    extraClasses: '',
    checked: false,
};

export default Radio;
