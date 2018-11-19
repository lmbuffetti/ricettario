import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisabledSelectedSelect extends Component {
    render() {
        const {
            extraClasses, label, selectedValue, placeholder, name,
        } = this.props;
        return (
            <section className={`form-inline col ${extraClasses}`}>
                <label className="input-label">
                    {label}
                </label>
                <select disabled className="select-comp" id={name}>
                    <option defaultValue value={selectedValue}>
                        {placeholder}
                    </option>
                </select>
            </section>
        );
    }
}

DisabledSelectedSelect.propTypes = {
    label: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    extraClasses: PropTypes.string,
};

DisabledSelectedSelect.defaultProps = {
    placeholder: '',
    selectedValue: '',
    extraClasses: '',
    name: '',
};

export default DisabledSelectedSelect;
