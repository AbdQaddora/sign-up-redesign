import React from 'react'
import SocialMediaButton from '../../../components/SocialMediaButton';

// images
import google from '../../../assets/images/google-icon.png';
import twitter from '../../../assets/images/twitter.png';
import linkedin from '../../../assets/images/linkedin.png';
import github from '../../../assets/images/github.png';

// style
import './style.css';

const SocialMediaButtons = () => {
    return (
        <div className='social-media-buttons'>
            <SocialMediaButton img={google} alt="google" />
            <SocialMediaButton img={twitter} alt="twitter" />
            <SocialMediaButton img={linkedin} alt="linkedin" />
            <SocialMediaButton img={github} alt="github" />
        </div>
    )
}

export default SocialMediaButtons