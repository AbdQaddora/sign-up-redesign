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
import { schema } from './validate'
export default class SignupForm extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        selected: false,
        errors: [],
        success: false
    }

    componentDidUpdate() {
        if (this.state.errors !== []) {
            setTimeout(() => {
                this.setState({ errors: [] });
            }, 5000)
        }

        if (this.state.success) {
            setTimeout(() => {
                this.setState({ success: false });
            }, 5000)
        }
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

                {this.state.success && <MyAlert success> sign up done successfully</MyAlert>}
                {this.state.errors.map((error, index) => {
                    return <MyAlert key={index} index={index}>{error}</MyAlert>
                })}
            </form>)
    }
}
