import React, { useContext, useEffect, useState } from 'react'
import { Globalcontext } from '../../Context/Context'
import styles from '../Singlenews/Singlenews.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Favoritesinglenews = () => {

  const {favoritesinglenews}=useContext(Globalcontext)
  // console.log(singlenews)

  
  return (
    <div className={styles.singlenewscontainer}>
        <div className={styles.titleandimage}>
          <b>{favoritesinglenews.title}</b>
          <div className={styles.data}>
            {favoritesinglenews.mode?<b className={styles.offline}>Offline mode no image available</b>:<div className={styles.picture}><img src={favoritesinglenews.urlToImage} alt='picture'></img></div>}
            <div><p>{favoritesinglenews.description}</p></div>
          </div>
          <div className={styles.links}>
              {!favoritesinglenews.mode&&<a target='blank' href={favoritesinglenews.url}> <button>Click here for full article</button></a>}
              <Link to='/favoritenews'><button>Back</button></Link>
          </div>
        </div>
        
       

    </div>
  )
}

export default Favoritesinglenews