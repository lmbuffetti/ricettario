import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import get from 'lodash/get';
import { change } from 'redux-form';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { getMePlan } from '../actions/UserActions';
import ModalInputSave from './ModalInputSave';

class TableExtraInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            titleModal: '',
            form: '',
            label: '',
            assetType: '',
        };
        this.renderTableRow = this.renderTableRow.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    actionButton = (i, action, planAssetUUID, assetType, e) => {
        e.preventDefault();
        let titleModal; let form; let label;
        switch (action) {
            case 'add_policy_numner':
                titleModal = 'Add policy number';
                form = 'addPolicyNumber';
                label = 'Policy number';
                break;
            case 'add_nin':
                titleModal = 'Add NIN';
                form = 'addNin';
                label = 'NIN number';
                break;
            default:
                break;
        }

        this.setState({
            show: true,
            titleModal,
            form,
            label,
            planAssetUUID,
            assetType,
        });
    };

    hideModal() {
        this.setState({
            show: false,
        });
    }

    renderTableRow() {
        const { data } = this.props;
        return data.map((item, i) => (
            <tr key={i.toString()}>
                <td className={`button_img_text_extra ${item.assetType}`}>
                    <div className="icon_btn">
                        <img src={`/static/img/icons/${item.icon}`} alt={`Icons ${item.title}`} />
                    </div>
                    <div className="title_box">
                        <h5>
                            {item.title}
                        </h5>
                        <p>
                            {item.subtitle}
                        </p>
                    </div>
                </td>
                <td>
                    {item.balance}
                </td>
                <td>
                    {
                        item.policy_number
                            ? (
                                <span>
                                    {item.policy_number}
                                </span>
                            )
                            : (
                                <button
                                    type="button"
                                    // eslint-disable-next-line max-len
                                    onClick={this.actionButton.bind(this, i, 'add_policy_numner', item.plan_asset_uuid, item.assetType)}
                                    className="btn small btn-border-purple"
                                >
                                    + Add policy number
                                </button>
                            )
                    }
                </td>
            </tr>
        ));
    }

    render() {
        const { profileUUID, nin, formName } = this.props;
        const {
            form, label, titleModal, show, planAssetUUID, assetType,
        } = this.state;
        return (
            <React.Fragment>
                <table className="table_information_extra">
                    <thead>
                        <tr>
                            <th>
                                ASSET
                            </th>
                            <th>
                                BALANCE
                            </th>
                            <th>
                                POLICY NUMBER
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRow()}
                        <tr className="bg_grey">
                            <td colSpan="2">
                                National Insurance number
                            </td>
                            <td>
                                {
                                    nin !== null
                                        ? (
                                            <span>
                                                {nin}
                                            </span>
                                        )
                                        : (
                                            <button
                                                type="button"
                                                onClick={this.actionButton.bind(this, 0, 'add_nin', 0, 0)}
                                                className="btn small btn-border-purple"
                                            >
                                        + Add NI number
                                            </button>
                                        )
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ModalInputSave
                    name={form}
                    placeholder={label}
                    label={label}
                    modalTitle={titleModal}
                    visible={show}
                    id={planAssetUUID}
                    handleClose={this.hideModal}
                    formName={formName}
                    profileUUID={profileUUID}
                    assetType={assetType}
                />
            </React.Fragment>
        );
    }
}


TableExtraInformation.propTypes = {
    nin: PropTypes.string,
    profileUUID: PropTypes.string,
    formName: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
};

TableExtraInformation.defaultProps = {
    nin: null,
    profileUUID: '',
    formName: '',
    data: [],
};

const mapStateToProps = (state, { formName }) => ({
    formValue: get(state, `form.${formName}`, {}),
    assets: get(state, 'plan.assets', []),
    clientID: get(state, 'plan.users.main.profile_uuid', ''),
    clientFirstName: get(state, 'plan.users.main.profile.first_name', ''),
    partnerID: get(state, 'plan.users.partner.profile_uuid', ''),
    partnerFirstName: get(state, 'plan.users.partner.profile.first_name', ''),

});

const mapDispatchToProps = dispatch => ({
    changeFieldValue: (formName, field, value) => {
        dispatch(change(formName, field, value));
    },
    handleGetMePlan: bindActionCreators(getMePlan, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableExtraInformation));
