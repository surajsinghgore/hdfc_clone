import {useEffect, useState} from 'react'
import Sidenavbar from './Sidenavbar';
import {Link} from 'react-router-dom';
import Topheader from './Topheader';
import './css/Home.css';
import Button from '@material-ui/core/Button';
import img5 from '../images/img5.png';

export const Home = () => {


    const [userName,setUserName]=useState('');
    const [show,setShow]=useState(false);


    const userHomePage= async()=>{
       
try {
    const res= await fetch('/getData',{
        method:"GET",
        headers:{
     
            "Content-Type":"application/json"
        },
      
    });
   const data=await res.json();
   setUserName(data.name);
   setShow(true);

} catch (error) {
 
    console.log(error);
  
}

    }

useEffect(() => {
    userHomePage();
    
},[]);






    return (









        <div className="home">
        
            <Sidenavbar />
            <Topheader />

            <div className="div1">
            <h1>WELCOME {show?userName:'USER'}, 
            
            
            {show?'Enjoy Are all facilities':'PLEASE LOGIN TO ENJOY OUR FACILITIES ONLINE'}</h1>

 
            <Link to="/signin"> 
          <Button variant="outlined" color="primary" className="buttons">
        LOGIN
      </Button></Link>
            <img src={img5} alt="img1 not displayed" className="homeimg"/>
            </div>
            
        </div>
    )
}

export default Home;