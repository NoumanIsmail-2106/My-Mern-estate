import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Profile from './Profile'
import About from './About'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/sign-in' element={<SignIn/>} ></Route>
        <Route path='/sign-up' element={<SignUp/>} ></Route>
        <Route path='/profile' element={<Profile/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
      </Routes>
    </BrowserRouter>

  )
}
