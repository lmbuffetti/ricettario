import React, { Component } from 'react';
import InputCustom from './InputCustom';
import { INPUT_TYPES, ERROR_MESSAGE } from '../helpers/constants';
import { ErrorMessage } from './ErrorMessage';

class DoublePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isShowError = this.isShowError.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    isShowError() {
        const { password, confirmPassword } = this.state;
        if (password.length === 0 || confirmPassword.length === 0) {
            return true;
        }

        return this.isValid();
    }

    isValid() {
        const { password, confirmPassword } = this.state;
        return password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;
    }

    handleSubmit(event) {
        if (!this.isValid()) {
            event.preventDefault();
        }
        // actual submit logic...
    }

    renderError() {
        if (!this.isShowError()) {
            return (
                <ErrorMessage
                    message={ERROR_MESSAGE.WRONG_CONFIRM_PASSWORD}
                />
            );
        }
        return null;
    }

    render() {
        const { password, confirmPassword } = this.state;
        return (
            <form
                onSubmit={this.handleSubmit}
                className="mt-5rem double-password"
            >
                <InputCustom
                    id="password"
                    label="Password"
                    fieldName="password"
                    value={password}
                    type={INPUT_TYPES.PASSWORD}
                    placeholder="Password"
                    required
                    onChange={this.handleChange}
                    onBlur={this.isShowError()}
                />
                <InputCustom
                    id="confirmPassword"
                    label="Confirm Password"
                    fieldName="confirmPassword"
                    value={confirmPassword}
                    type={INPUT_TYPES.PASSWORD}
                    placeholder="Confirm Password"
                    required
                    onChange={this.handleChange}
                    onBlur={this.isShowError()}
                />
                {this.renderError()}
                <button
                    type="button"
                    className="btn btn-primary btn-sml fw-n mt-1rem"
                    disabled={!this.isShowError()}
                >
                    Create
                </button>
            </form>
        );
    }
}

export default DoublePassword;
