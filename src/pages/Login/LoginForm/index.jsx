import React, { Component } from 'react'
import MyInput from '../../../components/MyInput'
import MyAlert from '../../../components/MyAlert'
import { PasswordInput } from '../../../components/PasswordInput'
import SubmitButton from '../../../components/SubmitButton'
import { schema } from '../../../validation/loginValidation'
import Alerts from '../../../components/Alerts'
import { boolean } from 'yup'

export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        errors: [],
        success: false
    }

    componentDidUpdate() {
        this.timeoutId = setTimeout(() => {
            if (this.state.errors !== []) {
                this.setState({ errors: [] });
            }

            if (this.state.success) {
                this.setState({ success: false });
            }
        }, 5000);
    }

    componentWillUnmount() {
        console.log(this.timeoutId);
        clearTimeout(this.timeoutId);
    }

    emptyErrors = () => {
        this.setState({ errors: [] });
    }

    removeSuccessFlag = () => {
        this.setState({ success: false });
    }

    validateData = () => {
        schema.validate({
            email: this.state.email,
            password: this.state.password
        }, { abortEarly: false }).then(() => {
            this.setState({ success: true })
        }).catch((err) => {
            this.setState({ errors: err.errors });
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.validateData();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <MyInput
                    name="email"
                    label="Your email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="email"
                    placeholder="Write your email"
                    required
                />
                <PasswordInput
                    value={this.state.password}
                    onChange={this.onChange}
                    name="password"
                    label="Enter your password"
                    required
                />
                <SubmitButton>login</SubmitButton>
                {
                    (this.state.success || this.state.errors.length > 0) &&
                    <Alerts
                        errors={this.state.errors}
                        emptyErrors={this.emptyErrors}
                        success={this.state.success}
                        removeSuccessFlag={this.removeSuccessFlag}
                        successMsg="success log in 👏"
                    />
                }

            </form>)
    }
}
