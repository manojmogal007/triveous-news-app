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
    // axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=1e32b63bdfff45919a3887a33c221448')
    axios({
      method:'GET',
      url:'https://newsapp-33ccf-default-rtdb.firebaseio.com/news.json'
    })
    .then((res)=>{
      // console.log(res.data.articles)

      // setAllnews(res.data.articles)
      let data=res.data
      setAllnews(Object.values(data))
      localStorage.setItem('allnews',JSON.stringify(Object.values(data)))
    })
    .catch((err)=>{
      console.log(err)
      // alert("in catch block")
      let data=JSON.parse(localStorage.getItem('allnews'))
      setMode(true)
      setAllnews(data)
    })
    // fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=1e32b63bdfff45919a3887a33c221448')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     // Handle the JSON data here
    //     console.log(data.articles);
    //     setAllnews(data.articles)
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the fetch operation
    //     console.error('Fetch error:', error);
    //   });
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