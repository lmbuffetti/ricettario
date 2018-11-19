import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { sendNewRequests, getAmountOfRequests } from '../../utils/helper';
import { getMePlan } from '../../actions/UserActions';
import { requestsReset } from '../../actions/CommonActions';

export default (WrappedComponent, surveyData) => {
    class ComplexSurveyHoc extends Component {
        constructor(props) {
            super(props);

            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleBack = this.handleBack.bind(this);
            this.handleCancel = this.handleCancel.bind(this);
            this.callRedirect = this.callRedirect.bind(this);
            this.changeActivePart = this.changeActivePart.bind(this);

            this.state = {
                isSubmitted: false,
                activePart: null,
            };
        }

        componentDidUpdate() {
            const {
                isRequestsDone,
                handleRequestsReset,
            } = this.props;

            const {
                activePart,
            } = this.state;

            if (!isEmpty(surveyData.prevData) && activePart === 'prevData') {
                if (isRequestsDone === getAmountOfRequests(surveyData.prevData, this.props)) {
                    handleRequestsReset();
                    this.changeActivePart('data');
                    sendNewRequests(surveyData.data, this.props);
                }
            }

            if (activePart === 'data') {
                if (!isEmpty(surveyData.nextData)) {
                    if (isRequestsDone === getAmountOfRequests(surveyData.data, this.props)) {
                        handleRequestsReset();
                        this.changeActivePart('nextData');
                        sendNewRequests(surveyData.nextData, this.props);
                    }
                } else {
                    handleRequestsReset();
                    this.changeActivePart('done');
                    this.callRedirect();
                }
            }

            if (activePart === 'nextData') {
                if (isRequestsDone === getAmountOfRequests(surveyData.nextData, this.props)) {
                    handleRequestsReset();
                    this.changeActivePart('done');
                    this.callRedirect();
                }
            }
        }

        componentWillUnmount() {
            const {
                handleRequestsReset,
            } = this.props;

            handleRequestsReset();
        }

        changeActivePart = (string) => {
            this.setState({ activePart: string });
        };

        handleSubmit = (event) => {
            const {
                formValue,
            } = this.props;

            this.setState({ isSubmitted: true });

            if (!isEmpty(get(formValue, 'syncErrors', {})) && !isEmpty(event)) {
                event.preventDefault();
            } else if (!isEmpty(surveyData.prevData)) {
                this.setState({ activePart: 'prevData' });
                sendNewRequests(surveyData.prevData, this.props);
            } else {
                this.setState({ activePart: 'data' });
                sendNewRequests(surveyData.data, this.props);
            }
        };

        callRedirect() {
            const {
                nextStage,
                history,
            } = this.props;

            this.setState(() => ({ isSubmitted: false }));

            history.push(nextStage);
        }

        handleBack() {
            const { history, prevStage } = this.props;

            history.push(prevStage);
        }

        handleCancel() {
            const { history, prevStage } = this.props;

            history.push(prevStage);
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

    ComplexSurveyHoc.propTypes = {
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
    })(ComplexSurveyHoc);

    return connect(mapStateToProps, mapDispatchToProps)(initializeForm);
};
