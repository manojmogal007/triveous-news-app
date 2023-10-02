import React, { useContext, useEffect, useState } from 'react'
import { Globalcontext } from '../../Context/Context'
import styles from './Singlenews.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineHeart,AiTwotoneHeart } from "react-icons/ai";
import axios from 'axios'

const Singlenews = () => {

  const {singlenews}=useContext(Globalcontext)
  const [favorite,setFavorite]=useState(false)
  const [mode,setMode]=useState(false)
  // console.log(singlenews)

  const handlefavorite=()=>{
    if(singlenews===''){
      return;
    }
    axios({
      method:'POST',
      url:`https://newsapp-33ccf-default-rtdb.firebaseio.com/favorites.json`,
      data:singlenews
    })
    .then((res)=>{
      console.log(res)
    setFavorite(true)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const fetchfavorites=()=>{
    axios({
      method:"GET",
      url:'https://newsapp-33ccf-default-rtdb.firebaseio.com/favorites.json'
    })
    .then((res)=>{
      // console.log(res.data)
      let data=res.data
      for(let key in data){
        if(singlenews.title===data[key].title){
          // console.log(key)
          setFavorite(true)
        }
        // console.log(data[key])
        
      }
    })
    .catch((err)=>{
      console.log(err)
      // alert('offline')
      setMode(true)
    })
  }
    useEffect(()=>{
      fetchfavorites()
    },[])
  
  return (
    <div className={styles.singlenewscontainer}>
        <div className={styles.titleandimage}>
          {!mode&&<div className={styles.hearticon}>{favorite?<AiTwotoneHeart className={styles.redheart}/> :<AiOutlineHeart onClick={handlefavorite} className={styles.borderedheart}/>}</div>}
          <b>{singlenews.title}</b>
          <div className={styles.data}>
            {
              mode?<b className={styles.offline}>Offline mode no image available</b>:<div className={styles.picture}><img src={singlenews.urlToImage===null?'https://tse1.mm.bing.net/th?id=OIP.EboNfMk08KrJ4sNIAELmcAHaHa&pid=Api&P=0&h=180':singlenews.urlToImage} alt='picture'></img></div>
            }
            <div><p>{singlenews.description===null?'No description available':singlenews.description}</p></div>
          </div>
          <div className={styles.links}>
              {!mode&&<a target='blank' href={singlenews.url}> <button>Click here for full article</button></a>}
              <Link to='/allnews'><button>Back</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Singlenews