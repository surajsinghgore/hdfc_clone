import React,{useContext} from 'react';

import {Link} from 'react-router-dom';
import './css/Sidenavbar.css';
import SearchIcon from '@material-ui/icons/Search';

import {userContext} from '../App';



const Sidenavbar = () => {
  
const {state}= useContext(userContext);


const RenderMenu=()=>{
  if(state){
return(
  <>
          <Link to="/"><li>HOME</li></Link>
               <Link to="/aboutme"><li>ABOUT</li></Link>
             <Link to="/contactus"><li>CONTACT</li></Link>
            <Link to="/logout"><li>LOGOUT</li></Link>    
 </>
)

  }
  else{
    return(
      <>
      <Link to="/"><li>HOME</li></Link>
              <Link to="/aboutme"><li>ABOUT</li></Link>
               <Link to="/contactus"><li>CONTACT</li></Link>
             <Link to="/register"><li>REGISTER</li></Link>
              <Link to="/signin"><li>LOGIN</li></Link>  
    </>
    )
     
    }
}

  return (
        <div className="header">
          <div className="links">
<RenderMenu />
 </div>
          <div className="searchbar">
            <SearchIcon className="icon"/>
          </div>
        </div>
    )
}

export default Sidenavbar;
