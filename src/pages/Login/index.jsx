import React, { Component } from 'react';
import GridContainer from '../../components/GridContainer';
import GridColumn from '../../components/GridContainer/GridColumn';
import Quote from '../../components/Quote';
import { Body2, Body3, H2 } from '../../components/Typography';
// images
import logo from '../../assets/images/logo-blue.png'
import joystick from '../../assets/images/joystick.png'

// style
import './style.css';
import SocialMediaButtons from './SocialMediaButtons';
import OrLine from '../../components/OrLine';
import LoginForm from './LoginForm';

class Login extends Component {


    render() {
        return (
            <GridContainer className='login'>

                <GridColumn className='left center'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h1 className='title-text'>Gamers</h1>
                    </div>
                    <div>
                        <Quote secondary />
                        <Body2 className='text-gray-1 italic content'>
                            I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                        </Body2>
                    </div>
                    <Body2 className='text-gray-1'>
                        Hideo Kojima
                    </Body2>
                    <img className="joystick" src={joystick} alt="joystick" />
                </GridColumn>

                <GridColumn className='right'>
                    <div>
                        <H2 className="text-center">Join the game!</H2>
                        <Body3 className="text-center text-gray-2">Go inside the best gamers social network!</Body3>
                    </div>
                    <SocialMediaButtons />
                    <OrLine />
                    <LoginForm />
                    <Body2 className='text-center text-gray-1'>
                        Don’t have an account?
                        <span className="link" onClick={() => this.props.move('signup')}> Register</span>
                    </Body2>
                </GridColumn>
            </GridContainer>
        );
    }
}
{/* <button onClick={() => this.props.move('signup')}>to Signup</button> */ }

export default Login;
