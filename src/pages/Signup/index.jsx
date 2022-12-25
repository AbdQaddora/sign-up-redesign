import React, { Component } from 'react';
import GridColumn from '../../components/GridContainer/GridColumn';
import Quote from '../../components/Quote';
import { Body2, Body3, H3 } from '../../components/Typography';
import GridContainer from '../../components/GridContainer';

// images
import logo from '../../assets/images/logo-white.png';
import signupBg from '../../assets/images/signup-bg.png';
import corner from '../../assets/images/bottom-corner.png';
import arrow_back from '../../assets/images/arrow_back.png';

// style
import './style.css'
import SignupForm from './SignupForm';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import OrLine from '../../components/OrLine';
export default class Signup extends Component {
    render() {
        return (
            <GridContainer className='signup'>
                <GridColumn className='left' style={{
                    backgroundImage: `url(${signupBg})`
                }}>
                    <div className="overlay center">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <Body3 className='text-white'>Gamers</Body3>
                        </div>
                        <div>
                            <Quote />
                            <Body2 className='text-white italic content'>
                                I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                            </Body2>
                        </div>
                        <Body2 className='text-white'>
                            Hideo Kojima
                        </Body2>
                        <img className="corner" src={corner} alt="corner" />
                    </div>
                </GridColumn>
                <GridColumn>
                    <button className="btn back-btn text-gray-2" onClick={() => this.props.move('login')}>
                        <img src={arrow_back} alt="arrow back" />
                        back
                    </button>
                    <div>
                        <H3>Register Individual Account!</H3>
                        <Body3 className="text-gray-2">
                            For the purpose of gamers regulation, your details are required.
                        </Body3>
                    </div>
                    <SignupForm />
                    <OrLine />
                    <GoogleLoginButton />
                </GridColumn>
            </GridContainer>
        );
    }
}
