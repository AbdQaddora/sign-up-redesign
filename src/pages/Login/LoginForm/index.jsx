import React, { Component } from 'react'
import MyInput from '../../../components/MyInput'
import { PasswordInput } from '../../../components/PasswordInput'
import SubmitButton from '../../../components/SubmitButton'
import { schema } from '../../../validation/loginValidation'
import Alerts from '../../../components/Alerts'
import { login } from '../../../services/auth.service'

export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        errors: [],
        success: false
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
        }, { abortEarly: false }).then(async () => {
            const res = await login(this.state.email, this.state.password);
            console.log(res);
            if (!res.error) {
                this.setState({ success: true });
                this.props.login();
                this.props.toHomePage();
            }

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
