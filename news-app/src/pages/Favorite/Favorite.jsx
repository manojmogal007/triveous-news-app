import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Favoritecard from '../../components/Favoritecard/Favoritecard'
import styles from '../Allnews/Allnews.module.css'

const Favorite = () => {

    const [favorite,setFavorite]=useState([])
    const [isToggled, setIsToggled] = useState(false);
    const [mode,setMode]=useState(false)

    const toggleButton = () => {
      setIsToggled(!isToggled);
    };
    console.log(favorite)
    const fetchfavorites=()=>{
        axios({
          method:"GET",
          url:'https://newsapp-33ccf-default-rtdb.firebaseio.com/favorites.json'
        })
        .then((res)=>{
          let data=res.data
          setFavorite(Object.values(data))
          localStorage.setItem('favoritenews',JSON.stringify(Object.values(data)))
        })
        .catch((err)=>{
          console.log(err)
          let favoritenews=JSON.parse(localStorage.getItem('favoritenews'))
          setFavorite(favoritenews)
          setMode(true)
        })
      }
        useEffect(()=>{
          fetchfavorites()
        },[])
  return (
    <div>
        <Navbar/>
        <div className={styles.togglebtn}>
          {mode&&<b>You are in offline mode</b>}
            <div className={`${styles.slidertoggle} ${isToggled ? styles.toggled : ''}`} onClick={toggleButton}>
              <span>List view</span>
              <span>Grid view</span>
            <div className={`${styles.slider} ${isToggled ? styles.right : styles.left}`} >
          </div>
          </div>
        </div>
        <div className={!isToggled?styles.listview:styles.gridview}>
            {
            favorite.length!==0&&  favorite.map((el)=>(
                <Favoritecard key={el.title} {...el} mode={mode}  />
            ))
            }
        </div>
    </div>
  )
}

export default Favorite