import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import InputCustom from './InputCustom';
import SelectDescription from './SelectDescription';
import { required } from '../utils/validation.helper';
import { ROLE_OPTIONS } from '../helpers/constants';
/**
 * Render the content for user idle. Dumb component
 *
 */
class AddUserModal extends Component {
    render() {
        const {
            visible,
            modalTitle,
            isSubmitted,
            handleSubmit,
            handleClose,
            formValue,
        } = this.props;

        if (visible) {
            return (
                <div className="add-internal-user-modal">
                    <div className="add-internal-user-modal-body">
                        {modalTitle && (
                            <h5 className="mb-small dis-f ai-c jc-sb">
                                {modalTitle}
                                <img
                                    role="presentation"
                                    onClick={handleClose}
                                    src="/static/img/close.svg"
                                    alt="Close"
                                    title="Close"
                                />
                            </h5>
                        )}
                        <div className="hr mb-small" />
                        <div className="add-internal-user-modal-inputs">
                            <div className="names span-6">
                                <Field
                                    component={InputCustom}
                                    name="first_name"
                                    label="First name"
                                    placeholder="First name"
                                    extraClasses="col span-3 pb-small"
                                    isShowErrors={isSubmitted}
                                    validate={[
                                        required,
                                    ]}
                                />
                                <Field
                                    component={InputCustom}
                                    name="last_name"
                                    label="Last name"
                                    placeholder="Last name"
                                    extraClasses="col col-last span-3 pb-small"
                                    isShowErrors={isSubmitted}
                                    validate={[
                                        required,
                                    ]}
                                />
                            </div>
                            <Field
                                component={InputCustom}
                                name="email"
                                label="Email"
                                placeholder="Email"
                                extraClasses="col span-6 pb-small"
                                isShowErrors={isSubmitted}
                                validate={[
                                    required,
                                ]}
                            />
                            <Field
                                component={SelectDescription}
                                formValue={formValue}
                                selectedValue={get(formValue, 'values.role', '')}
                                options={ROLE_OPTIONS}
                                fieldName="role"
                                name="role"
                                label="User role"
                                extraClasses="col span-6 pb-small"
                                isShowErrors={isSubmitted}
                                validate={[
                                    required,
                                ]}
                            />
                        </div>
                        <div className="add-internal-user-modal-action">
                            <button
                                type="button"
                                className="btn mt-1rem"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    }
}

AddUserModal.propTypes = {
    modalTitle: PropTypes.string,
    visible: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    isSubmitted: PropTypes.bool,
    formValue: PropTypes.object.isRequired,
};

AddUserModal.defaultProps = {
    modalTitle: '',
    visible: false,
    isSubmitted: false,
};

export default AddUserModal;
