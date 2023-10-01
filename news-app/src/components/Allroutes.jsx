import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Allnews from '../pages/Allnews/Allnews'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/allnews' element={<Allnews/>} />
    </Routes>
  )
}

export default Allroutes