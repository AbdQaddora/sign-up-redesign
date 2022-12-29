import React, { Component } from 'react'
import MyInput from '../../../components/MyInput'
import MyAlert from '../../../components/MyAlert'
import { PasswordInput } from '../../../components/PasswordInput'
import SubmitButton from '../../../components/SubmitButton'
import { schema } from './validate'

export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
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
                {this.state.success && <MyAlert success>success log in 👏</MyAlert>}
                {this.state.errors.map((error, index) => {
                    return <MyAlert key={index} index={index}>{error}</MyAlert>
                })}
            </form>)
    }
}
