import React from 'react'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Account from './pages/Account'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path = "/" element = {<Welcome/>}/>
       <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
         <Route path = "/account" element = {<Account/>}/>
    </Routes>
  )
}

export default App