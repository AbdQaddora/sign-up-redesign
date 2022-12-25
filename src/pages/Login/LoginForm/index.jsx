import React, { Component } from 'react'
import MyInput from '../../../components/MyInput'
import { PasswordInput } from '../../../components/PasswordInput'
import SubmitButton from '../../../components/SubmitButton'

export default class LoginForm extends Component {
    state = {
        email: "",
        password: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
            </form>)
    }
}
