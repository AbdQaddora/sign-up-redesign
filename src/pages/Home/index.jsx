import React, { Component } from 'react'
import SideMenu from '../../components/SideMenu'
import WelcomeUser from '../../sections/WelcomeUser'
import NewGames from '../../sections/NewGames'
import LastPlayed from '../../sections/LastPlayed';
import MostRecent from '../../sections/MostRecent';
import Frinds from '../../sections/Frinds';

// style
import './style.css';

export default class Home extends Component {
    state = {
        theme: "light"
    }

    toggleTheme = () => {
        this.setState(prev => ({ theme: prev.theme === "light" ? "dark" : "light" }))
    }

    render() {
        return (
            <div className={`home ${this.state.theme}`}>
                <SideMenu
                    toggleTheme={this.toggleTheme}
                    theme={this.state.theme}
                />
                <WelcomeUser />
                <NewGames />
                <div className="bottom">
                    <LastPlayed />
                    <MostRecent />
                    <Frinds />
                </div>
            </div>
        )
    }
}
