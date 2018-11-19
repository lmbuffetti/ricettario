/* eslint react/no-find-dom-node: 0 */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/get';
import { change } from 'redux-form';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { ErrorMessage } from './ErrorMessage';

class SelectDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDropdown: false,
        };
        this.renderHint = this.renderHint.bind(this);
        this.renderValidationErrors = this.renderValidationErrors.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = (event) => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                openDropdown: false,
            });
        }
    };

    renderHint = (isError) => {
        const { hintMessage } = this.props;

        if (hintMessage !== '' && !isError) {
            return (
                <div className="hint">
                    {hintMessage}
                </div>
            );
        }

        return null;
    };

    renderValidationErrors = (isError, textError) => {
        if (isError) {
            return (<ErrorMessage message={textError} />);
        }

        return null;
    };

    handleChangeValue(val) {
        const {
            changeFieldValue,
            fieldName,
            formName,
        } = this.props;

        this.setState({
            openDropdown: false,
        });

        changeFieldValue(formName, fieldName, val);
    }

    changeState(name, value) {
        this.setState({
            [name]: value,
        });
    }

    render() {
        const {
            customErrors,
            isShowErrors,
            extraClasses,
            selectedValue,
            options,
            label,
            meta: {
                touched,
                error,
                submitFailed,
            },
        } = this.props;
        const {
            handleChangeValue,
        } = this;
        const { openDropdown } = this.state;
        const selectedValueName = typeof options.find(opt => opt.code === selectedValue) !== 'undefined' ? options.find(opt => opt.code === selectedValue).title : 'Select user role';
        const classSelect = typeof options.find(opt => opt.code === selectedValue) !== 'undefined' ? 'selectedValue' : 'placeholder';
        const textError = error || customErrors;
        const isError = (touched && textError) || (textError && isShowErrors) || (submitFailed && textError);
        return (
            <section className={`${extraClasses}`}>
                {
                    label
                    && (
                        <label className="input-label">
                            {label}
                        </label>
                    )
                }
                <div
                    className={`custom_select ${isError && 'invalid'} ${openDropdown && 'selectOpen'} ${classSelect}`}

                >
                    <span
                        role="presentation"
                        onClick={this.changeState.bind('openDropdown', !openDropdown)}
                        className="selectedValue"
                    >
                        {selectedValueName}
                    </span>
                    <ul className="select2-results__options" style={{ display: openDropdown ? 'block' : 'none' }}>
                        {
                            options.map((item, i) => (
                                <li
                                    role="presentation"
                                    key={i.toString()}
                                    onClick={handleChangeValue.bind(this, item.code)}
                                >
                                    <span className="title_select">
                                        {item.title}
                                    </span>
                                    <span className="subtitle_select">
                                        {item.subtitle}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {this.renderHint(isError)}
                {this.renderValidationErrors(isError, 'Required')}
            </section>
        );
    }
}

SelectDescription.propTypes = {
    isShowErrors: PropTypes.bool,
    customErrors: PropTypes.string,
    extraClasses: PropTypes.string,
    selectedValue: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string,
    formName: PropTypes.string,
    meta: PropTypes.object.isRequired,
    changeFieldValue: PropTypes.func.isRequired,
    hintMessage: PropTypes.string,
};

SelectDescription.defaultProps = {
    customErrors: '',
    isShowErrors: false,
    extraClasses: '',
    selectedValue: '',
    options: [],
    label: '',
    formName: 'adviserDashboard',
    hintMessage: '',
};

const mapStateToProps = state => ({
    users: get(state, 'users.items', []),
});

const mapDispatchToProps = dispatch => ({
    changeFieldValue: (formName, field, value) => {
        dispatch(change(formName, field, value));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectDescription));
