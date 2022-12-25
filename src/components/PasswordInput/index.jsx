import React, { Component } from 'react'
// images
import showPasswordImage from '../../assets/images/show-password.png';
import { Body3 } from '../Typography';

// style
import './style.css';
export class PasswordInput extends Component {
    state = {
        show: false,
        localValue: ""
    }

    toggleShow = () => {
        this.setState(prev => ({
            show: !prev.show,
        }))
    }

    render() {
        return (
            <div className={`my-input ${this.props.className ? this.props.className : ""}`}>
                <label className='my-input-label' htmlFor={this.props.name}>
                    <Body3 className='text-gray-1'>
                        {this.props.label}
                    </Body3>
                </label>
                <div className="password-input">
                    <input
                        type={this.state.show ? "text" : 'password'}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        name={this.props.name}
                        id={this.props.name}
                        required={this.props.required}
                        placeholder={this.props.placeholder || this.props.label.toLowerCase()}
                    />
                    <div className={`show-password ${this.state.show ? "active" : ""}`}>
                        <img
                            src={showPasswordImage}
                            alt="show Password"
                            onClick={this.toggleShow}
                        />
                    </div>
                </div>
            </div>
        )
    }
}