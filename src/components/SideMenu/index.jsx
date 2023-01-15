import React from 'react'
import { NavLink } from 'react-router-dom'
import ToggleTheme from './ToggleTheme';

// images
import joystickArrow from '../../assets/images/joystickArrow.png';
import heart from '../../assets/images/heart.png';
import setting from '../../assets/images/setting.png';
import puzzle from '../../assets/images/puzzle.png';

// style
import './style.css';

const SideMenu = ({ toggleTheme, theme }) => {
  return (
    <nav className='side-menu'>
      <div>
        <NavLink to="/">
          <img src={joystickArrow} alt="joystick arrow" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/liked">
          <img src={heart} alt="heart" />
        </NavLink>
        <NavLink to="/users-list">
          <img src={setting} alt="setting" />
        </NavLink>
        <NavLink to="/puzzle">
          <img src={puzzle} alt="puzzle" />
        </NavLink>
      </div>
      <div>
        <ToggleTheme
          toggleTheme={toggleTheme}
          theme={theme} />
      </div>
    </nav>
  )
}

export default SideMenu