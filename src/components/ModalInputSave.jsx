import React, { Component } from 'react';
import { change, Field } from 'redux-form';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import InputCustom from './InputCustom';
import { required, checkNin } from '../utils/validation.helper';
import { getMePlan, updateUserInPlan } from '../actions/UserActions';
import { updatePlanAsset } from '../actions/PlanActions';

/**
 * Render the content for user idle. Dumb component
 *
 */
class ModalInputSave extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitted: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderModal = this.renderModal.bind(this);
    }

    handleSubmit = (event) => {
        const {
            id,
            handleUpdatePolicy,
            name,
            formValue,
            formName,
            changeFieldValue,
            profileUUID,
            handleUpdateNin,
            planUUID,
            assetType,
            handleClose,
        } = this.props;
        this.setState({ isSubmitted: true });
        if (!isEmpty(get(formValue, 'syncErrors', {}))) {
            event.preventDefault();
        } else {
            if (name === 'addPolicyNumber') {
                const body = {};
                body.selector = id;
                body.policy_number = get(formValue, `values.${name}`, null);
                body.asset_type = assetType;
                handleUpdatePolicy(body);
            }
            if (name === 'addNin') {
                const body = {};
                body.selector = profileUUID;
                body.selectorPlus = planUUID;
                body.isNiN = true;
                body.national_insurance_nbr = get(formValue, `values.${name}`, null);
                handleUpdateNin(body);
            }
            changeFieldValue(formName, name, '');
            handleClose();
        }
    };

    renderModal() {
        const {
            name, label, placeholder, modalTitle, handleClose, visible,
        } = this.props;
        const { isSubmitted } = this.state;
        if (visible) {
            return (
                <div className="modal_form">
                    <div className="modal_form_body">
                        {modalTitle && (
                            <h5 className="mb-2rem">
                                {modalTitle}
                            </h5>
                        )}
                        <Field
                            component={InputCustom}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            extraClasses="span-5"
                            isShowErrors={isSubmitted}
                            validate={name === 'addNin' ? [
                                required,
                                checkNin,
                            ] : [required]}
                        />
                        <div className="modal_form_action">
                            <button type="button" className="btn small btn-border-purple" onClick={handleClose}>
                                CANCEL
                            </button>
                            <button type="button" className="btn small purple_button" onClick={this.handleSubmit}>
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            this.renderModal()
        );
    }
}

ModalInputSave.propTypes = {
    formValue: PropTypes.object,
    modalTitle: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    visible: PropTypes.bool,
    handleClose: PropTypes.func,
    handleUpdatePolicy: PropTypes.func,
    changeFieldValue: PropTypes.func,
    formName: PropTypes.string,
    profileUUID: PropTypes.string,
    handleUpdateNin: PropTypes.func,
    planUUID: PropTypes.string,
    assetType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    id: PropTypes.number,
};

ModalInputSave.defaultProps = {
    formValue: {},
    modalTitle: '',
    label: '',
    placeholder: '',
    visible: false,
    formName: '',
    profileUUID: '',
    planUUID: '',
    assetType: '',
    handleClose: () => {},
    handleUpdatePolicy: null,
    changeFieldValue: null,
    handleUpdateNin: null,
    id: null,
};

const mapStateToProps = (state, { formName }) => ({
    formValue: get(state, `form.${formName}`, {}),
    assets: get(state, 'plan.assets', []),
    clientID: get(state, 'plan.users.main.profile_uuid', ''),
    clientFirstName: get(state, 'plan.users.main.profile.first_name', ''),
    partnerID: get(state, 'plan.users.partner.profile_uuid', ''),
    partnerFirstName: get(state, 'plan.users.partner.profile.first_name', ''),
    planUUID: get(state, 'plan.plan_uuid', ''),
});

const mapDispatchToProps = dispatch => ({
    changeFieldValue: (formName, field, value) => {
        dispatch(change(formName, field, value));
    },
    handleGetMePlan: bindActionCreators(getMePlan, dispatch),
    handleUpdatePolicy: bindActionCreators(updatePlanAsset, dispatch),
    handleUpdateNin: bindActionCreators(updateUserInPlan, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalInputSave));
