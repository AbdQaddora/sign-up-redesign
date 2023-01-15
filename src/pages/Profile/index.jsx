import React, { Component } from 'react';
import { logout } from '../../services/auth.service';
import { getUserProfile } from '../../services/user.service';

import './style.css'
class Profile extends Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        const user = await getUserProfile()
        this.setState({ user })
    }

    render() {
        return (
            <div className='profile'>
                <h2>name : {this.state.user.name}</h2>
                <h2>email : {this.state.user.email}</h2>
                <h2>id : {this.state.user._id}</h2>
                <button
                    className='logout'
                    onClick={logout}
                >logout</button>
            </div>
        );
    }
}

export default Profile