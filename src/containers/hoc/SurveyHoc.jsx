import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { sendRequests } from '../../utils/helper';
import { getMePlan } from '../../actions/UserActions';
import { requestsReset } from '../../actions/CommonActions';

export default (WrappedComponent, surveyData) => {
    class SurveyHoc extends Component {
        constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleBack = this.handleBack.bind(this);
            this.handleCancel = this.handleCancel.bind(this);
            this.state = {
                isSubmitted: false,
            };

            const {
                handleRequestsReset,
            } = this.props;

            handleRequestsReset();
        }

        componentDidUpdate() {
            const {
                isRequestsDone,
                handleRequestsReset,
                history,
                formValue,
            } = this.props;
            if (isRequestsDone === surveyData.data.length) {
                handleRequestsReset();
                history.push(get(formValue, 'values.nextStage', null));
            }
        }

        componentWillUnmount() {
            const {
                handleRequestsReset,
            } = this.props;

            handleRequestsReset();
        }

        handleSubmit = (event) => {
            const {
                formValue,
            } = this.props;
            this.setState({ isSubmitted: true });
            if (!isEmpty(get(formValue, 'syncErrors', {})) && !isEmpty(event)) {
                event.preventDefault();
            } else {
                sendRequests(surveyData.data, this.props);
            }
        };

        handleBack() {
            const { history, formValue } = this.props;
            history.push(get(formValue, 'values.prevStage', null));
        }

        handleCancel() {
            const { history, formValue } = this.props;
            history.push(get(formValue, 'values.prevStage', null));
        }

        render() {
            const {
                formValue,
                handleGetMePlan,
            } = this.props;
            const { isSubmitted } = this.state;
            return (
                <WrappedComponent
                    {...this.props}
                    handleGetMePlan={handleGetMePlan}
                    handleSubmit={this.handleSubmit}
                    handleBack={this.handleBack}
                    handleCancel={this.handleCancel}
                    formValue={formValue}
                    isSubmitted={isSubmitted}
                />
            );
        }
    }

    SurveyHoc.propTypes = {
        history: PropTypes.object.isRequired,
        formValue: PropTypes.object.isRequired,
        handleGetMePlan: PropTypes.func.isRequired,
        handleRequestsReset: PropTypes.func.isRequired,
        isRequestsDone: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    const mapStateToProps = state => ({
        formValue: get(state, `form.${surveyData.formName}`, {}),
        isRequestsDone: get(state, 'common.isRequestsDone', 0),
    });

    const mapDispatchToProps = dispatch => ({
        handleGetMePlan: bindActionCreators(getMePlan, dispatch),
        handleRequestsReset: bindActionCreators(requestsReset, dispatch),
    });

    const initializeForm = reduxForm({
        form: surveyData.formName,
        enableReinitialize: true,
    })(SurveyHoc);

    return connect(mapStateToProps, mapDispatchToProps)(initializeForm);
};
