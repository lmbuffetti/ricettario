import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import InputCustom from './InputCustom';
import { required } from '../utils/validation.helper';

/**
 * Render the content for user idle. Dumb component
 *
 */
class AdviserPartnerModal extends Component {
    render() {
        const {
            visible,
            modalTitle,
            isSubmitted,
            handleSubmit,
            handleClose,
        } = this.props;

        if (visible) {
            return (
                <div className="adviser-partner-modal">
                    <div className="adviser-partner-modal-body">
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
                        <div className="adviser-partner-modal-inputs">
                            <div className="names">
                                <Field
                                    component={InputCustom}
                                    name="partner_first_name"
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
                                    name="partner_last_name"
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
                                name="partner_email"
                                label="Email"
                                placeholder="Email"
                                extraClasses="pb-small"
                                isShowErrors={isSubmitted}
                                validate={[
                                    required,
                                ]}
                            />
                            <Field
                                component={InputCustom}
                                name="partner_mobile"
                                label="Mobile"
                                placeholder="Mobile number"
                                extraClasses="pb-small"
                                isShowErrors={isSubmitted}
                                validate={[
                                    required,
                                ]}
                            />
                        </div>
                        <div className="adviser-partner-modal-action">
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

AdviserPartnerModal.propTypes = {
    modalTitle: PropTypes.string,
    visible: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    isSubmitted: PropTypes.bool,
};

AdviserPartnerModal.defaultProps = {
    modalTitle: '',
    visible: false,
    isSubmitted: false,
};

export default AdviserPartnerModal;
