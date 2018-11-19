import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

import { change } from 'redux-form';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { ErrorMessage } from './ErrorMessage';

/**
 * Render the content for user idle. Dumb component
 *
 */
class DateYearPicker extends Component {
    constructor(props) {
        super(props);
        this.changeSelect = this.changeSelect.bind(this);
        moment.locale('en-gb');
    }

    changeSelect = (date) => {
        const { input, changeFieldValue, formName } = this.props;
        if (!isEmpty(input.value)) {
            changeFieldValue(formName, input.name, moment(date).format('LL'));
        }
    };

    render() {
        const {
            customErrors,
            isShowErrors,
            meta: {
                touched,
                error,
                submitFailed,
            },
            label,
            input,
            maxAge,
            minAge,
            extraClass,
        } = this.props;
        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);

        return (
            <div className={`date-year-picker form-inline ${extraClass} mb-1rem`}>
                <label className="input-label">
                    {label}
                </label>
                <DatePicker
                    {...input}
                    id={input.name}
                    className={`${isError ? 'invalid select-comp' : 'select-comp'}`}
                    selected={!isEmpty(input.value) ? moment(input.value) : null}
                    onYearChange={this.changeSelect.bind(this)}
                    onMonthChange={this.changeSelect.bind(this)}
                    placeholderText="Select date"
                    autoComplete="on"
                    dateFormatCalendar="MMM YYYY"
                    dateFormat="LL"
                    minDate={moment()
                        .subtract(maxAge, 'year')}
                    maxDate={moment()
                        .subtract(minAge, 'year')}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
                <img src="/static/img/calendar.svg" alt="calendar-icon" className="calendar-icon" />
                {isError
                    && <ErrorMessage message={textError} />
                }
            </div>
        );
    }
}

DateYearPicker.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    maxAge: PropTypes.number,
    minAge: PropTypes.number,
    customErrors: PropTypes.string,
    meta: PropTypes.object.isRequired,
    isShowErrors: PropTypes.bool,
    extraClass: PropTypes.string,
    formName: PropTypes.string,
    changeFieldValue: PropTypes.func.isRequired,
};

DateYearPicker.defaultProps = {
    label: '',
    maxAge: 100,
    minAge: 0,
    customErrors: '',
    isShowErrors: false,
    extraClass: 'span-4 mr-small',
    formName: '',
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    changeFieldValue: (formName, field, value) => {
        dispatch(change(formName, field, value));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DateYearPicker));
