import React, { Component } from 'react'
import MyCheckBox from '../../../components/MyCheckBox'
import MyInput from '../../../components/MyInput'
import { PasswordInput } from '../../../components/PasswordInput'
import SubmitButton from '../../../components/SubmitButton'
import { Body1 } from '../../../components/Typography'
import PasswordStrengthBar from '../../../components/PasswordStrengthBar'

import './style.css'
import { schema } from '../../../validation/signupValidation'
import Alerts from '../../../components/Alerts'
export default class SignupForm extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        selected: false,
        errors: [],
        success: false
    }

    validateData = () => {
        schema.validate({
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            selected: this.state.selected,
        }, { abortEarly: false }).then(() => {
            this.setState({ success: true })
        }).catch((err) => {
            this.setState({ errors: err.errors });
        });
    }


    emptyErrors = () => {
        this.setState({ errors: [] });
    }

    removeSuccessFlag = () => {
        this.setState({ success: false });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleCheckbox = () => {
        this.setState(prev => ({ selected: !prev.selected }))
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
                    label="Email address*"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="email"
                    placeholder="Enter email address"
                    required
                />

                <PasswordInput
                    value={this.state.password}
                    onChange={this.onChange}
                    name="password"
                    label="Create password*"
                    required
                    placeholder="Password"
                />
                <PasswordStrengthBar password={this.state.password} />

                <PasswordInput
                    value={this.state.password2}
                    onChange={this.onChange}
                    name="password2"
                    label="Repeat password*"
                    required
                    placeholder="Repeat password"
                />
                <div className='terms-conditions'>
                    <MyCheckBox
                        value={this.state.selected}
                        onChange={this.toggleCheckbox}
                        name="selected"
                    />
                    <Body1 className="text-gray-2">I agree to terms & conditions</Body1>
                </div>
                <SubmitButton>Register Account</SubmitButton>

                {
                    (this.state.success || this.state.errors.length > 0) &&
                    <Alerts
                        errors={this.state.errors}
                        emptyErrors={this.emptyErrors}
                        success={this.state.success}
                        removeSuccessFlag={this.removeSuccessFlag}
                        successMsg="sign up done successfully 👏"
                    />
                }
            </form>)
    }
}
