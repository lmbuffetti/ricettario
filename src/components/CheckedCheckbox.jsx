import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckedCheckbox extends Component {
    render() {
        const {
            extraClasses,
            input,
            name,
            fieldValue,
            checked,
            label,
            onChangeValue,
        } = this.props;
        return (
            <section className={`dis-f ai-c ${extraClasses}`}>
                <input
                    {...input}
                    type="checkbox"
                    name={name}
                    id={name}
                    value={fieldValue}
                    checked={checked}
                    onChange={onChangeValue}
                />
                <label className="checkbox-label cur-p" htmlFor={name}>
                    {label}
                </label>
            </section>
        );
    }
}

CheckedCheckbox.propTypes = {
    name: PropTypes.string,
    input: PropTypes.object.isRequired,
    fieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChangeValue: PropTypes.func,
    extraClasses: PropTypes.string,
};
CheckedCheckbox.defaultProps = {
    name: '',
    checked: false,
    onChangeValue: null,
    extraClasses: '',
};

export default CheckedCheckbox;
