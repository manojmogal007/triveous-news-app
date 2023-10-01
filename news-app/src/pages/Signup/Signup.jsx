import React, { useState } from 'react';
// import firebase from '../components/firebase'; 
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../components/firebase'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [filldetails,setFilldetails]=useState(false)
    const [disablebtn,setDisablebtn]=useState(false)
  
    const handleRegister = async () => {
        if(!email || !password){
            setFilldetails(true)
            return;
        }
        setDisablebtn(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            // console.log(res)
            setDisablebtn(false)
        })
        .catch((err)=>{
            // console.log(err)
            setDisablebtn(false)
        })
    }
  
    return (
      <div className={styles.parent}>
        <div className={styles.signupcontainer}>
            <h2>Signup</h2>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            {filldetails&& <b>Fill all details</b>}<br/>
            <button disabled={disablebtn} onClick={handleRegister}>{disablebtn?'Wait':'Signup'}</button>
            <p>Already have account <Link to='/'>Login </Link></p>
        </div>
      </div>
    );
}

export default Signup