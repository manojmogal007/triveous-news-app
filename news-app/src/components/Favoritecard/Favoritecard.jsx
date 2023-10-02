import React, { useContext } from 'react'
import styles from '../Newscard/Newscard.module.css'
import { Globalcontext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

const Favoritecard = (props) => {
  
  const {setFavoritesinglenews}=useContext(Globalcontext)
  const navigate=useNavigate()


  const handleclick=()=>{
    setFavoritesinglenews(props)
    navigate('/favoritesinglenews')
  }

  return (
    <div onClick={handleclick} className={styles.card}>
        <div></div>
        <p>{props.title}</p>
    </div>
  )
}

export default Favoritecard