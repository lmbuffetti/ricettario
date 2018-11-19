import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

class FreeAdditionalBox extends Component {
    render() {
        const {
            subExtraClass, label, extraClasses, placeholder, fieldName, cols, rows, input,
        } = this.props;
        return (
            <section className={`span-8 ${subExtraClass}`}>
                { !isEmpty(label)
                && (
                    <label className="input-label">
                        {label}
                    </label>
                )}
                <textarea
                    {...input}
                    id={input.name}
                    className={`span-8 ${extraClasses}`}
                    placeholder={placeholder}
                    name={fieldName}
                    cols={cols}
                    rows={rows}
                />
            </section>
        );
    }
}

FreeAdditionalBox.propTypes = {
    input: PropTypes.object.isRequired,
    extraClasses: PropTypes.string,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number,
    subExtraClass: PropTypes.string,
};

FreeAdditionalBox.defaultProps = {
    extraClasses: 'col-last',
    label: '',
    fieldName: '',
    placeholder: '',
    cols: 10,
    rows: 10,
    subExtraClass: '',
};


export default FreeAdditionalBox;
