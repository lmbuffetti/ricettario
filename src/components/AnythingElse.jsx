import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import FreeAdditionalBox from './FreeAdditionalBox';


class AnythingElse extends Component {
    render() {
        const {
            openText,
            name,
            isShowErrors,
            placeholder,
        } = this.props;
        return (
            <section className="form-inline">
                <label
                    htmlFor={name}
                    className="input-label col fw-b color-brand-purple"
                >
                    {openText}
                </label>
                <Field
                    component={FreeAdditionalBox}
                    extraClasses="wealth-textarea"
                    name={name}
                    cols={30}
                    rows={10}
                    isShowErrors={isShowErrors}
                    placeholder={placeholder}
                    subExtraClass="no-padding"
                />
            </section>
        );
    }
}

AnythingElse.propTypes = {
    name: PropTypes.string.isRequired,
    openText: PropTypes.string,
    placeholder: PropTypes.string,
    isShowErrors: PropTypes.bool,
};

AnythingElse.defaultProps = {
    openText: 'Anything else to add?',
    placeholder: '',
    isShowErrors: false,
};

export default AnythingElse;
