import React, { Component } from 'react'
import SideMenu from '../../components/SideMenu'
import WelcomeUser from '../../sections/WelcomeUser'
import NewGames from '../../sections/NewGames'

// style
import './style.css'
import LastPlayed from '../../sections/LastPlayed'
import MostRecent from '../../sections/MostRecent'
import Frinds from '../../sections/Frinds'
export default class Home extends Component {
    state = {
        theme: "dark"
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