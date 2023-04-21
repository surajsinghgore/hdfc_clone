import {Link} from 'react-router-dom';
import './css/Topheader.css';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import logo from '../images/logo.png';


//icons 
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function dropdownon(){
 document.getElementById('dropdown').style.display="block";
}
function dropdownoff(){
    document.getElementById('dropdown').style.display="none";
}
const Topheader = () => {




 return (
     <>
        <div className="topheader">
          <img src={logo} alt="logo not displayed" className="logo" />
<div className="menu">
              <MenuIcon className="iconmenu" title="menu" onClick={dropdownon}/>


          </div>
  </div>

  <div className="dropdown" id="dropdown">
  <MenuOpenIcon className="iconmenu" onClick={dropdownoff}/>
  <div className="menu">
  <Link to="/"> <li><AppsIcon className="icons"/> <span className="data">Home</span></li></Link>
  <Link to="/"> <li><SearchIcon className="icons"/> <span className="data">Search</span></li></Link>
  <Link to="/aboutme"> <li><InfoIcon className="icons"/>  <span className="data">ABOUTME</span></li></Link>
  <Link to="/register"><li><AccountBoxIcon className="icons"/><span className="data">Register</span></li></Link>
  <Link to="/signin"><li><PersonIcon className="icons"/><span className="data">Login</span></li></Link>


  <Link to="/contactUs"><li><AmpStoriesIcon className="icons"/><span className="data">Contact</span></li></Link>
  

  
  <Link to="/logout"><li><ExitToAppIcon className="icons"/><span className="data">LOGOUT</span></li></Link>


  <hr />
  <Link to="/"><li><MailIcon className="icons"/> <span className="data">Mail</span></li></Link>
  <Link to="/"><li><InboxIcon className="icons"/><span className="data">Inbox</span></li></Link>


   </div>
</div>
       </> 
    )
}

export default Topheader;
