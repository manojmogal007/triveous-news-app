import React from 'react'
import { Navigate } from 'react-router-dom'

const Privateroutes = ({children}) => {
    
    const token=localStorage.getItem('accesstoken')

    if(!token){
      return <Navigate to='/'/>
    }

  return children;
}

export default Privateroutes