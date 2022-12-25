import React, { Component } from 'react';

import Signup from '../pages/Signup';
import Login from '../pages/Login';

class Router extends Component {

    state = {
        currentPage: Login,
    }

    move = (name) => {
        switch (name) {
            case 'login':
                this.setState({
                    currentPage: Login,
                })
                break;
            case 'signup':
                this.setState({
                    currentPage: Signup,
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <this.state.currentPage move={this.move} />
        );
    }
}

export default Router;
