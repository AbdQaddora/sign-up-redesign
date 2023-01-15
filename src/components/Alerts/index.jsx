import React, { Component } from 'react';
import MyAlert from '../MyAlert';

class Alerts extends Component {
    state = {
        timeoutId: null
    }

    componentDidMount() {
        const timeoutId = setTimeout(() => {
            if (this.props.errors.length > 0) {
                this.props.emptyErrors();
            }
        }, 5000);

        this.setState({ timeoutId })
    }

    componentWillUnmount() {
        clearTimeout(this.state.timeoutId);
    }

    render() {
        return (
            <div>
                {this.props.errors && this.props.errors.map((error, index) => {
                    return <MyAlert key={index} index={index}>{error}</MyAlert>
                })}
            </div>
        );
    }
}

export default Alerts;
