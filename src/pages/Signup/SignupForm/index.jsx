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
import { signup } from '../../../services/auth.service'
export default class SignupForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        selected: false,
        errors: [],
    }

    validateData = () => {
        schema.validate({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            selected: this.state.selected,
        }, { abortEarly: false }).then(async () => {
            this.props.setLoading(true);
            const res = await signup(this.state.name, this.state.email, this.state.password);
            this.props.setLoading(false);

            if (!res.error) {
                this.props.navigate("/");
            } else {
                console.log(res.error)
                // !WHY?? 😭
                this.setState({ errors: [res.error] });
            }

        }).catch((err) => {
            this.setState({ errors: err.errors });
        });
    }

    emptyErrors = () => {
        this.setState({ errors: [] });
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
                    name="name"
                    label="User Name*"
                    value={this.state.name}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Enter User Name"
                    required
                />

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

                <Alerts
                    errors={this.state.errors}
                    emptyErrors={this.emptyErrors}
                />

            </form>)
    }
}
