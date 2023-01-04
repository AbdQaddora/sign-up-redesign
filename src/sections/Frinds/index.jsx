import React from 'react'
// images
import frinds_img from '../../assets/images/frinds.png'
import { SectionTitle } from '../../components/Typography'
// style
import './style.css'
const Frinds = () => {
    return (
        <div className='frinds'>
            <SectionTitle>Friends</SectionTitle>
            <img src={frinds_img} alt="frinds img" />
        </div>
    )
}

export default Frinds