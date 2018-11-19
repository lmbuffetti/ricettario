import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import { normalizeInverse } from '../utils/helper';
import InputCustom from './InputCustom';
import Select from './Select';
import Checkbox from './Checkbox';
import { required } from '../utils/validation.helper';
import { getUserByRole } from '../actions/UserActions';

/**
 * Render the content for user idle. Dumb component
 *
 */
class AddUserModal extends Component {
    constructor(props) {
        super(props);

        this.renderPartnerBlock = this.renderPartnerBlock.bind(this);
        const { getAdviserList } = this.props;
        getAdviserList('adviser');
    }

    getAdviserList = () => {
        const { adviserList } = this.props;
        const listAdvisers = [];
        adviserList.map((item, i) => {
            listAdvisers.push({
                id: i,
                name: `${item.profile.display_name}`,
                code: item.profile_uuid,
            });

            return null;
        });

        return listAdvisers;
    };

    renderPartnerBlock = (hasPartner) => {
        const { isSubmitted } = this.props;

        if (hasPartner) {
            return (
                <div className="partner-block">
                    <div className="names">
                        <Field
                            component={InputCustom}
                            name="partner_first_name"
                            label="First name"
                            placeholder="First name"
                            extraClasses="pb-small pt-small"
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
                            extraClasses="pb-small"
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
            );
        }

        return null;
    };


    render() {
        const {
            visible,
            modalTitle,
            isSubmitted,
            handleSubmit,
            handleClose,
            formValue,
            currentUserType,
        } = this.props;

        const hasPartner = get(formValue, 'values.family_has_partner', null) === true;

        if (visible) {
            return (
                <div className="add-user-modal">
                    <div className="add-user-modal-body">
                        {modalTitle && (
                            <h5 className="mb-small ml-medium dis-f ai-c jc-sb">
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
                        <div className="hr mb-small ml-medium mr-medium" />
                        <div className="add-user-modal-inputs">
                            <div className="names">
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
                                extraClasses="pb-small"
                                isShowErrors={isSubmitted}
                                validate={[
                                    required,
                                ]}
                            />
                            <Field
                                component={InputCustom}
                                name="phone"
                                label="Mobile"
                                placeholder="Mobile number"
                                extraClasses="pb-small"
                                isShowErrors={isSubmitted}
                                validate={[
                                    required,
                                ]}
                            />
                            {currentUserType !== 'adviser'
                            && (
                                <Field
                                    component={Select}
                                    name="adviser"
                                    label="Assign to adviser"
                                    placeholder="Select adviser"
                                    extraClasses="pb-small span-6"
                                    options={this.getAdviserList()}
                                    isShowErrors={isSubmitted}
                                    validate={[
                                        required,
                                    ]}
                                />
                            )
                            }
                        </div>
                        <Field
                            component={Checkbox}
                            extraClasses="form-inline pb-small ml-medium"
                            name="family_has_partner"
                            fieldValue="family_has_partner"
                            label="Add Client 2"
                            normalize={normalizeInverse}
                            checked={hasPartner}
                            isShowErrors={isSubmitted}
                        />
                        {this.renderPartnerBlock(hasPartner)}
                        <div className="add-user-modal-action">
                            <button
                                type="button"
                                className="btn mt-1rem mr-medium"
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
    getAdviserList: PropTypes.func.isRequired,
    modalTitle: PropTypes.string,
    visible: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    isSubmitted: PropTypes.bool,
    formValue: PropTypes.object,
    currentUserType: PropTypes.string,
    adviserList: PropTypes.arrayOf(PropTypes.object),
};

AddUserModal.defaultProps = {
    modalTitle: '',
    visible: false,
    isSubmitted: false,
    currentUserType: '',
    adviserList: [],
    formValue: {},
};

const mapDispatchToProps = dispatch => ({
    getAdviserList: (role) => {
        dispatch(getUserByRole(role));
    },
});

const mapStateToProps = state => ({
    adviserList: get(state, 'users.filteredUser.items', []),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUserModal));
