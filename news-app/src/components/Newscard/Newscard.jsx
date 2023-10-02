import React, { useContext } from 'react'
import styles from './Newscard.module.css'
import { Globalcontext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

const Newscard = (props) => {
  
  const {setSinglenews}=useContext(Globalcontext)
  const navigate=useNavigate()


  const handleclick=()=>{
    setSinglenews(props)
    navigate('/singlenews')
  }

  return (
    <div onClick={handleclick} className={styles.card}>
        <div></div>
        <p>{props.title}</p>
    </div>
  )
}

export default Newscard