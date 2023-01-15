import React, { Component } from 'react'
import Loading from '../../../components/Loading';
import { deleteUser, getSingleUser } from '../../../services/admin.service';

import './style.css';
class UserDetailsPage extends Component {
    state = {
        user: {},
        isLoading: false
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const user = await getSingleUser(this.props.id);
        this.setState({ user });
        this.setState({ isLoading: false });
    }

    deleteThisUser = async () => {
        this.setState({ isLoading: true });
        const res = await deleteUser(this.props.id);
        this.setState({ isLoading: false, user: null });
        console.log(res);
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }

        if (!this.state.user) {
            return <div className='user_details'>
                <h1>USER HAS BEEN DELETED</h1>
                <button
                    className='delete_user'
                    onClick={() => this.props.navigate("/users-list")}
                >BACK TO USER LIST</button>
            </div>
        }
        return (
            <div className='user_details'>
                <h2>name : {this.state.user.name}</h2>
                <h2>email : {this.state.user.email}</h2>
                <h2>id : {this.state.user._id}</h2>
                <div>
                    <button
                        className='delete_user back'
                        onClick={() => this.props.navigate("/users-list")}
                    >BACK TO USER LIST</button>

                    <button
                        className='delete_user'
                        onClick={this.deleteThisUser}
                    >DELETE</button>

                </div>
            </div>
        )
    }
}

export default UserDetailsPage;
