import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
// pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
// style
import './App.css';
import NotFound from './pages/NotFound';
export default class App extends Component {
  state = {
    isAuth: false,
  }

  login = () => {
    this.setState({ isAuth: true })
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login login={this.login} isAuth={this.state.isAuth} />} />
          <Route path='/signup' element={<Signup login={this.login} isAuth={this.state.isAuth} />} />
          <Route path='/' element={<Home isAuth={this.state.isAuth} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>)
  }
}

