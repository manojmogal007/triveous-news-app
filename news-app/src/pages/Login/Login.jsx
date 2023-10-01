import React, { useState } from 'react';
// import firebase from '../components/firebase';
import {auth} from '../../components/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import styles from '../Signup/Signup.module.css'
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filldetails,setFilldetails]=useState(false)
  const [disablebtn,setDisablebtn]=useState(false)

  const handleLogin = async () => {
    if(!email || !password){
        setFilldetails(true)
        return;
    }
    setDisablebtn(true)
    signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
        // console.log(res)
        setDisablebtn(false)
    })
    .catch((err)=>{
        // console.log(err,'login failed')
        setDisablebtn(false)
    })
  }

  return (
    <div className={styles.parent}>
      <div className={styles.signupcontainer}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      {filldetails&& <b>Fill all details</b>}<br/>
      <button disabled={disablebtn} onClick={handleLogin}>{disablebtn?'Wait':'Login'}</button>
      <p>Already have account <Link to='/signup'>Signup </Link></p>
    </div>
   </div>
  );
}

export default Login;
