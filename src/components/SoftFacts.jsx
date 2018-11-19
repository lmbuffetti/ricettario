import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { change, Field } from 'redux-form';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import TextareaSoftFacts from './TextareaSoftFacts';
import { createSoftFacts, deleteSoftFacts, getSoftFacts } from '../actions/PlanActions';
import { requestsReset } from '../actions/CommonActions';

class SoftFacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
        };

        this.renderTextarea = this.renderTextarea.bind(this);
        this.renderSoftFacts = this.renderSoftFacts.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeSoftFacts = this.removeSoftFacts.bind(this);
    }

    componentDidUpdate() {
        const {
            // eslint-disable-next-line max-len
            handleGetSoftFact, planUUID, isRequestsDone, closeSoftFact, handleRequestsReset, changeFieldValue, softFactsTags,
        } = this.props;
        const { loaded } = this.state;
        const self = this;
        if (planUUID !== null && !loaded) {
            handleGetSoftFact(planUUID);
            self.setState({ loaded: true });
        }
        if (isRequestsDone !== 0) {
            closeSoftFact(false);

            changeFieldValue('softFactComment', '');

            softFactsTags.map((item) => {
                changeFieldValue(item.code, '');

                return null;
            });

            handleRequestsReset();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const {
            formValue,
            handleCreateSoftFacts,
            planUUID,
            softFactsTags,
        } = this.props;

        const body = {};

        body.selector = planUUID;
        body.comment = get(formValue, 'values.softFactComment', null);
        body.tags = [];

        softFactsTags.map((item) => {
            if (get(formValue, `values.${item.code}`, null) === true) {
                body.tags.push(item.code);
            }

            return null;
        });

        handleCreateSoftFacts(body);
    }

    removeSoftFacts($factsUUID) {
        const { handleRemoveSoftFact, planUUID } = this.props;

        const body = {};
        body.softFactsUUID = $factsUUID;
        body.selector = planUUID;
        handleRemoveSoftFact(body);
    }

    renderTextarea() {
        const { openTextArea, softFactsTags, extraClasses } = this.props;

        if (openTextArea) {
            return (
                <section className="box_soft_facts">
                    <div className="textarea_radio_button">
                        <Field
                            name="softFactComment"
                            component={TextareaSoftFacts}
                            className={extraClasses}
                            label="Phone"
                            type="number"
                            placeholder="Placeholder"
                        />
                        <div className="radiobtn_textarea">
                            {
                                softFactsTags.map((item, i) => (
                                    <Fragment key={i.toString()}>
                                        <Field
                                            component="input"
                                            type="checkbox"
                                            name={item.code}
                                            id={item.code}
                                        />
                                        <label htmlFor={item.code}>
                                            {item.name}
                                        </label>

                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                    <div className="dis-f ai-c jc-fe mt-small">
                        <button type="button" className="btn btn-border-purple small mr-small">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-purple small" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </section>
            );
        }

        return null;
    }

    renderSoftFacts() {
        const {
            softFactsComment,
        } = this.props;
        const softFactsComments = softFactsComment !== null ? softFactsComment : [];
        if (softFactsComments.length !== 0) {
            return softFactsComments.map((item, i) => {
                const date = moment(item.create_dttm).format('MMMM Do YYYY, h:mm:ss a');
                return (
                    <div className="soft_facts_list" key={i.toString()}>
                        <p>
                            {item.comment}
                            {
                                item.tags.map((subtag, f) => (
                                    <span className="tag" key={f.toString()}>
#
                                        {subtag}
                                    </span>
                                ))
                            }
                        </p>
                        <p className="author">
                            {date}
                            {' '}
                            {item.profile.first_name}
                            {' '}
                            {item.profile.last_name}
                        </p>
                        <button
                            type="button"
                            className="delete_facts"
                            onClick={this.removeSoftFacts.bind(this, item.plan_soft_fact_uuid)}
                        >
                            <img src="/static/img/icons/trash.svg" alt="Trash Icon" />
                        </button>
                    </div>
                );
            });
        }
        return (
            <div className="no_soft_facts_list">
                <p>No soft facts added</p>
            </div>
        );
    }

    render() {
        return (
            <Fragment>
                {this.renderTextarea()}
                {this.renderSoftFacts()}
            </Fragment>
        );
    }
}

SoftFacts.propTypes = {
    openTextArea: PropTypes.bool,
    softFactsComment: PropTypes.arrayOf(PropTypes.object),
    handleCreateSoftFacts: PropTypes.func,
    handleGetSoftFact: PropTypes.func,
    planUUID: PropTypes.string,
    formValue: PropTypes.object,
    handleRemoveSoftFact: PropTypes.func,
    isRequestsDone: PropTypes.number.isRequired,
    closeSoftFact: PropTypes.func,
    handleRequestsReset: PropTypes.func.isRequired,
    changeFieldValue: PropTypes.func.isRequired,
    softFactsTags: PropTypes.arrayOf(PropTypes.object),
    extraClasses: PropTypes.string,
};

SoftFacts.defaultProps = {
    openTextArea: false,
    softFactsComment: [],
    softFactsTags: [],
    handleCreateSoftFacts: null,
    handleGetSoftFact: null,
    handleRemoveSoftFact: null,
    closeSoftFact: null,
    planUUID: null,
    formValue: {},
    extraClasses: null,
};

const mapStateToProps = state => ({
    planUUID: get(state, 'users.selectedUser.active_plan', null),
    softFactsComment: get(state, 'plan.softFacts', []),
    softFactsTags: get(state, 'options.soft_fact_tags', []),
    formValue: get(state, 'form.userPlan', {}),
    isRequestsDone: get(state, 'common.isRequestsDone', 0),
});

const mapDispatchToProps = dispatch => ({
    changeFieldValue: (field, value) => {
        dispatch(change('userPlan', field, value));
    },
    handleCreateSoftFacts: bindActionCreators(createSoftFacts, dispatch),
    handleGetSoftFact: bindActionCreators(getSoftFacts, dispatch),
    handleRemoveSoftFact: bindActionCreators(deleteSoftFacts, dispatch),
    handleRequestsReset: bindActionCreators(requestsReset, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SoftFacts));
