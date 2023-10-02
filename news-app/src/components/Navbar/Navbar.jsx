import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar} >
        <Link to='/allnews'><b>All news</b></Link><br/>
        <Link to='/favoritenews'><b>Favorite news</b></Link><br/>
        <Link to='/'><b>Login</b></Link><br/>
    </div>
  )
}

export default Navbar