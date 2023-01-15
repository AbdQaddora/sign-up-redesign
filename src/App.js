import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
// pages
import Login from './pages/Login';
import Signup from './pages/Signup';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RequiredAuth from './components/RequiredAuth';
import Profile from './pages/Profile';
// style
import './App.css';
import UsersList from './pages/UsersList';
import UserDetails from './pages/UserDetails';
import AdminRoute from './components/AdminRoute';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          {/* public routes */}
          <Route path='/login' element={<Login />}
          />
          <Route path='/signup' element={<Signup />} />

          {/* private routes */}
          <Route path='/' element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          } />

          <Route path='/profile' element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          } />

          {/* admin routes */}
          <Route path='/users-list' element={
            <RequiredAuth>
              <AdminRoute>
                <UsersList />
              </AdminRoute>
            </RequiredAuth>
          } />
          <Route path='/user-details/:id' element={
            <RequiredAuth>
              <AdminRoute>
                <UserDetails />
              </AdminRoute>
            </RequiredAuth>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>)
  }
}

