import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
// pages
import Login from './pages/Login';
import Signup from './pages/Signup';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import UsersList from './pages/UsersList';
import UserDetails from './pages/UserDetails';

import RequiredAuth from './components/RequiredAuth';
import AdminRoute from './components/AdminRoute';

// style
import './App.css';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        <Route path='/login' element={<Login navigate={navigate}/>}
        />
        <Route path='/signup' element={<Signup navigate={navigate}/>} />

        {/* private routes */}
        <Route path='/' element={
          <RequiredAuth>
            <Home navigate={navigate}/>
          </RequiredAuth>
        } />

        <Route path='/profile' element={
          <RequiredAuth>
            <Profile navigate={navigate}/>
          </RequiredAuth>
        } />

        {/* admin routes */}
        <Route path='/users-list' element={
          <RequiredAuth>
            <AdminRoute>
              <UsersList navigate={navigate}/>
            </AdminRoute>
          </RequiredAuth>
        } />
        <Route path='/user-details/:id' element={
          <RequiredAuth>
            <AdminRoute>
              <UserDetails navigate={navigate}/>
            </AdminRoute>
          </RequiredAuth>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>)
}

export default App

