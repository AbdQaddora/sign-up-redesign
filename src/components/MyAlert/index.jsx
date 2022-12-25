import React, { Component } from 'react';

import './style.css';

export default class MyAlert extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.close();
        }, this.props.time)
    }

    render() {
        return (
            <div className={`alert ${this.props.success ? "success" : ""}`}>
                {this.props.children}
            </div>
        );
    }
}
