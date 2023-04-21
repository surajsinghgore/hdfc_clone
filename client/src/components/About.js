import {useEffect, useState} from 'react'
import Sidenavbar from './Sidenavbar';
import Topheader from './Topheader';
import './css/about.css';

import {useHistory} from 'react-router-dom';


const About = () => {


    const [useData,setUserData]=useState({});

const history=useHistory();

    const callAboutPage= async()=>{
       
try {
    const res= await fetch('/aboutme',{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    });
   const data=await res.json();
   setUserData(data);


if(!res.status===200){
 const error= new Error(res.error);
 throw error;   
}
} catch (error) {
 
    console.log(error);
    history.push('/signin');
}

    }

useEffect(() => {
    callAboutPage();
    
},[1]);









    return (
        <div className="about">
            <Sidenavbar />
            <Topheader />

            <div className="aboutpage">
            <div className="div1"><img src="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png" alt="profile pic not load"/></div>
            <div className="div2">
   <div className="div3"></div>
   <h1>ABOUT ME</h1>
<span className="heading">Name:</span><span className="data">{useData.name}</span><br />
<span className="heading">GENDER:</span><span className="data">{useData.gender}</span><br />
<span className="heading">DATE OF BIRTH:</span><span className="data">{useData.dob}</span><br />
<span className="heading">EMAIL:</span><span className="data">{useData.email}</span><br />
<span className="heading">MOBILE:</span><span className="data">{useData.mobile}</span><br />
<span className="heading">ADDRESS:</span><span className="data">{useData.address}</span><br />
<span className="heading">COUNTRY:</span><span className="data">{useData.country}</span><br />

            </div>
                
            </div>
        </div>
    )
}

export default About;