import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { getAllUsers } from '../../services/admin.service'

import './style.css'
class UsersList extends Component {
    state = {
        users: [],
        isLoading: false
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const users = await getAllUsers();
        this.setState({ users });
        this.setState({ isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }

        return (
            <div className='users'>
                <button
                    className='back_home'
                    onClick={() => { this.props.navigate("/") }}
                >BACK TO HOME</button>
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