import React, { Component } from 'react'
import MyCheckBox from '../../../components/MyCheckBox'
import MyInput from '../../../components/MyInput'
import { PasswordInput } from '../../../components/PasswordInput'
import SubmitButton from '../../../components/SubmitButton'
import { Body1 } from '../../../components/Typography'
import PasswordStrengthBar from '../../../components/PasswordStrengthBar'

import { checkPasswordStrength } from '../../../utils';

import './style.css'
import MyAlert from '../../../components/MyAlert'
export default class SignupForm extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        selected: false,
        error: null
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleCheckbox = () => {
        this.setState(prev => ({ selected: !prev.selected }))
    }

    validateData = () => {
        const strongness = checkPasswordStrength(this.state.password);
        if (strongness === 'weak' || strongness === 'medium') {
            this.setState({ error: "weak password make it stronger" })
        } else if (this.state.password !== this.state.password2) {
            this.setState({ error: "unidentical passwords" })
        }
    }

    success = () => {
        console.log(this.state);
        this.setState({ error: "SUCCESS" })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.validateData();

        if (this.state.error) {
            console.log("SUCCESS");
            this.success();
        }
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error &&
                    <MyAlert
                        close={() => { this.setState({ error: null }) }}
                        time={3000}
                    >
                        {this.state.error}
                    </MyAlert>
                }

                {this.state.error === "SUCCESS" &&
                    <MyAlert
                        close={() => { this.setState({ error: null }) }}
                        time={3000}
                        success
                    >
                        sign up done successfully
                    </MyAlert>
                }
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
            </form>)
    }
}
