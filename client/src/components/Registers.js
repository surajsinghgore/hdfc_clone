import React from 'react'
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Sidenavbar from './Sidenavbar';
import Topheader from './Topheader';
import img2 from '../images/img6.png';

import './css/register.css';
const Registers = () => {

const history=useHistory();

    
      const[data, setData] = useState({
        name: "", 
        gender: "",
        email: "",
        fname: "",
        mobile: "",
        dob: "",
        password: "",
        cpassword:"",
         address: "",
        country: "",
       
    });
 

let name, value;
const Inputs=(e)=>{
// console.log(e);
name=e.target.name;
value=e.target.value;

setData({...data,[name]:value})
}



const postData=async (e) =>{
    e.preventDefault();

 const {name,gender,email,fname,mobile,dob,password,cpassword,address,country}=data;


 const res=await fetch("/register",{
     method:"POST",
     headers:{
         "Content-Type":"application/json"
     },
     body: JSON.stringify({
        name,gender,email,fname,mobile,dob,password,cpassword,address,country
     })
 });

 const datas=await res.json();
 if(datas.status===422 || !datas){
     window.alert('Invalid entery')
     console.log('Invalid entery');
 }
 else{
  
    window.alert('registration successfully');
console.log('registration successfully');
history.push("/signin"); 
}

}
 return (
        <div className="register">
             <Sidenavbar />
            <Topheader />

            <div className="registerpage">

   <div className="div1"><img src={img2} alt="img2 not displayed"/></div>

             <div className="div2">
             <h1>WELCOME TO REGISTRATION</h1>
<form  method="POST" enctype="multipart/form-data">

<input type="text" name="name" id="name" placeholder="ENTER YOUR FULL NAME" value={data.name} onChange={Inputs} required /><br />

<input type="text" name="gender" id="gender" placeholder="GENDER" value={data.gender} onChange={Inputs} required/><br />

<input type="email" name="email" id="email" placeholder="EMAIL" value={data.email} onChange={Inputs} required/><br />

<input type="text" name="fname" id="fname" placeholder="ENTER FATHER'S NAME" value={data.fname} onChange={Inputs} required/><br />

<input type="text" name="mobile" id="mobile" placeholder="ENTER MOBILE NUMBER" value={data.mobile} onChange={Inputs} required/><br />

<input type="text" name="dob" id="dob" placeholder="ENTER DOB" value={data.dob} onChange={Inputs} required/><br />

<input type="text" name="password" id="password" placeholder="ENTER PASSWORD" value={data.password} onChange={Inputs} required/><br />

<input type="text" name="cpassword" id="cpassword" placeholder="ENTER CONFIRM PASSWORD" value={data.cpassword} onChange={Inputs} required/><br />

<input type="text" name="address" id="address" placeholder="ENTER ADDRESS" value={data.address} onChange={Inputs} required/><br />

<input type="text" name="country" id="country" placeholder="ENTER COUNTRY" value={data.country} onChange={Inputs} required/><br />

<button onClick={postData}>REGISTER</button>
<Link to="/signin"><h2>Already Have Account</h2></Link>
</form>

             </div>
            </div>
        </div>
        
    )
}

export default Registers;
