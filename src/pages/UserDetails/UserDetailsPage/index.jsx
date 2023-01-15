import React, { Component } from 'react'
import { deleteUser, getSingleUser } from '../../../services/admin.service';

import './style.css';
class UserDetailsPage extends Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        const user = await getSingleUser(this.props.id);
        this.setState({ user });
    }

    deleteThisUser = async () => {
        const res = await deleteUser(this.props.id);
        console.log(res);
    }

    render() {
        return (
            <div className='user_details'>
                <h2>name : {this.state.user.name}</h2>
                <h2>email : {this.state.user.email}</h2>
                <h2>id : {this.state.user._id}</h2>
                <button
                    className='delete_user'
                    onClick={this.deleteThisUser}
                >delete</button>
            </div>
        )
    }
}

export default UserDetailsPage;
