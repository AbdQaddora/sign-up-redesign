import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../services/admin.service'

import './style.css'
class UsersList extends Component {
    state = {
        users: []
    }
    async componentDidMount() {
        const users = await getAllUsers();
        this.setState({ users });
    }

    render() {
        return (
            <div className='users'>
                <button className='back_home'>back to home</button>
                {this.state.users.map(user => {
                    return (
                        <Link to={`/user-details/${user._id}`} key={user._id}>
                            <div className='user__card'>
                                <p>name : {user.name}</p>
                                <p>email : {user.email}</p>
                            </div>
                        </Link>
                    )
                })
                }
            </div >
        )
    }
}

export default UsersList