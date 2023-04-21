import {useState, useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Sidenavbar from './Sidenavbar';
import Topheader from './Topheader';
import img3 from '../images/img3.png';
import {userContext} from '../App';

import './css/login.css';

const Login = () => {

    const {dispatch}= useContext(userContext);

    const history=useHistory();

const[email,setEmail]=useState('');
const[password,setPassword]=useState('');


const Access=async (e)=>{
e.preventDefault(); 



const res=await fetch('/signin',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
       
    },
    body: JSON.stringify({
        email,
        password
    })
});
const data=await res.json();
 if(res.status===400 || !data){
     window.alert('Invalid account')
     console.log('Invalid account');
 }
 else{
    dispatch({type: "USER", payload:true});
  window.alert('Login successfully');
// console.log('Login successfully');
history.push("/"); 
}
}

 return (
 <>
        <div className="login">
             <Sidenavbar/>
            <Topheader />

            <div className="loginpage">

   <img src={img3} alt="img3 not displayed"/>            
                <form method="POST">

                  <input type="email" name="email" placeholder="ENTER YOUR EMAIL ID" value={email} onChange={(e)=> setEmail(e.target.value)} required/><br />


                  <input type="text" name="password" placeholder="ENTER YOUR PASSWORD" value={password} onChange={(e)=> setPassword(e.target.value)} required /><br/>

                  <button style={{marginTop: "3%"}} onClick={Access}>LOGIN</button>
                  <Link to="/register"><p>Click Here for Register</p> </Link>
                </form>
            
            </div>
        </div>
        </>
    )
}

export default Login;
