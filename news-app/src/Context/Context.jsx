import React, { createContext, useState } from 'react'

export const Globalcontext=createContext()

const Globalcontextprovider = ({children}) => {
    const [allnews,setAllnews]=useState('')
    const [singlenews,setSinglenews]=useState('')
    const [loading,setLoading]=useState(false)
    const [favoritesinglenews,setFavoritesinglenews]=useState('')

    const value={favoritesinglenews,setFavoritesinglenews,allnews,singlenews,loading,setAllnews,setLoading,setSinglenews}
  return (
    <Globalcontext.Provider value={value}>
        {children}
    </Globalcontext.Provider>
  )
}

export default Globalcontextprovider