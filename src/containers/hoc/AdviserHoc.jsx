import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { isBoolean } from '../../utils/helper';
// import { getMePlan } from '../../actions/UserActions';
import { requestsReset } from '../../actions/CommonActions';

export default (WrappedComponent, surveyData) => {
    class AdivserHoc extends Component {
        constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
                isSubmitted: false,
            };
        }

        componentDidUpdate() {
            const {
                isRequestsDone,
                handleRequestsReset,
                // history,
                // formValue,
            } = this.props;
            const self = this;
            if (isRequestsDone === surveyData.data.length) {
                handleRequestsReset();
                self.setState({ isSubmitted: false });
            }
        }

        handleSubmit = (event) => {
            // console.log(this.props);
            const {
                formValue,
                dispatch,
                // history,
            } = this.props;
            this.setState({ isSubmitted: true });
            if (!isEmpty(get(formValue, 'syncErrors', {}))) {
                event.preventDefault();
            } else {
                surveyData.data.forEach((data) => {
                    // console.log(data);
                    const body = {};
                    data.fields.forEach((field) => {
                        const valueByName = get(formValue, `values.${field}`, null);
                        // eslint-disable-next-line max-len
                        if (!isEmpty(valueByName) || isArray(valueByName) || isBoolean(valueByName) || isNumber(valueByName)) {
                            body[field] = valueByName;
                        }
                    });
                    const isUpdate = get(formValue, `values.${data.isUpdate}`, false);

                    if (isUpdate) {
                        const method = bindActionCreators(data.methodUpdate, dispatch);

                        if (!isEmpty(data.additionalUpdateFields)) {
                            data.additionalUpdateFields.forEach((field) => {
                                Object.assign(body, field);
                            });
                        }

                        body.selector = get(formValue, `values.${data.selector}`, null);
                        body.selectorPlus = get(formValue, `values.${data.selectorPlus}`, null);
                        method(body);
                    } else {
                        const method = bindActionCreators(data.methodCreate, dispatch);

                        if (!isEmpty(data.additionalCreateFields)) {
                            data.additionalCreateFields.forEach((field) => {
                                Object.assign(body, field);
                            });
                        }
                        if (typeof data.action !== 'undefined') {
                            body.action = data.action;
                        }
                        method(body);
                    }
                });
            }
        };

        render() {
            const {
                formValue,
                currentUserType,
                isRequestsDone,
            } = this.props;
            const { isSubmitted } = this.state;
            return (
                <WrappedComponent
                    {...this.props}
                    currentUserType={currentUserType}
                    handleSubmit={this.handleSubmit}
                    formValue={formValue}
                    isSubmitted={isSubmitted}
                    isRequestsDone={isRequestsDone}
                />
            );
        }
    }

    AdivserHoc.propTypes = {
        history: PropTypes.object.isRequired,
        formValue: PropTypes.object.isRequired,
        handleRequestsReset: PropTypes.func.isRequired,
        isRequestsDone: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired,
        currentUserType: PropTypes.string,
    };

    AdivserHoc.defaultProps = {
        currentUserType: null,
    };

    const mapStateToProps = state => ({
        formValue: get(state, `form.${surveyData.formName}`, {}),
        isRequestsDone: get(state, 'common.isRequestsDone', 0),
        currentUserType: get(state, 'users.me.user_type', null),
    });

    const mapDispatchToProps = dispatch => ({
        handleRequestsReset: bindActionCreators(requestsReset, dispatch),
    });

    const initializeForm = reduxForm({
        form: surveyData.formName,
        enableReinitialize: true,
    })(AdivserHoc);

    return connect(mapStateToProps, mapDispatchToProps)(initializeForm);
};
