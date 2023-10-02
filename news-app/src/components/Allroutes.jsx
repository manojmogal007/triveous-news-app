import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Allnews from '../pages/Allnews/Allnews'
import Privateroutes from './Privateroutes'
import Singlenews from '../pages/Singlenews/Singlenews'
import Favorite from '../pages/Favorite/Favorite'
import Favoritesinglenews from '../pages/Favoritesinglenews/Favoritesinglenews'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/allnews' element={<Privateroutes><Allnews/></Privateroutes>} />
        <Route path='/singlenews' element={<Privateroutes><Singlenews/></Privateroutes>} />
        <Route path='/favoritesinglenews' element={<Privateroutes><Favoritesinglenews/></Privateroutes>} />
        <Route path='/favoritenews' element={<Privateroutes><Favorite/></Privateroutes>} />
    </Routes>
  )
}

export default Allroutes