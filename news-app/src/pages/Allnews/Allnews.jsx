import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Globalcontext } from '../../Context/Context'
import axios from 'axios'
import Newscard from '../../components/Newscard/Newscard'
import styles from './Allnews.module.css'
import Navbar from '../../components/Navbar/Navbar'

const Allnews = () => {
  const {allnews,loading,setAllnews,setLoading,setSinglenews}=useContext(Globalcontext)
  // console.log('Allnews :',allnews)
  const [isToggled, setIsToggled] = useState(false);
  const [mode,setMode]=useState(false)

  const toggleButton = () => {
    setIsToggled(!isToggled);
  };

  const fetchnews=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=1e32b63bdfff45919a3887a33c221448')
    .then((res)=>{
      // console.log(res.data.articles)
      setAllnews(res.data.articles)
      localStorage.setItem('allnews',JSON.stringify(res.data.articles))
    })
    .catch((err)=>{
      console.log(err)
      // alert("in catch block")
      let data=JSON.parse(localStorage.getItem('allnews'))
      setMode(true)
      setAllnews(data)
    })
  }

  useEffect(()=>{
    fetchnews()
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
          allnews!==''&&allnews.map((el)=>(
            <Newscard key={el.title} {...el} />
          ))
        }
      </div>
    </div>
  )
}

export default Allnews