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
    }

    emptyErrors = () => {
        this.setState({ errors: [] });
    }

    validateData = () => {
        const setErrors = (errors) => {
            this.setState({ errors });
        }

        schema.validate({
            email: this.state.email,
            password: this.state.password
        }, { abortEarly: false }).then(async () => {
            this.props.setLoading(true);
            const res = await login(this.state.email, this.state.password);
            if (!res.error) {
                this.props.navigate("/");
            } else {
                console.log(res.error)
                
                // !WHY THIS NOT WORK 🤦‍♂️
                setErrors([res.error])
            }
            this.props.setLoading(false);
        }).catch((err) => {
            setErrors(err.errors);
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

                <Alerts
                    errors={this.state.errors}
                    emptyErrors={this.emptyErrors}
                />

            </form>)
    }
}
