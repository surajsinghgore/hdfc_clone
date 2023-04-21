import {Link} from 'react-router-dom';
import errorp from '../images/404.gif';
import './css/error.css';
const error = () => {
    return (
        <div className="error">
        <div className="errorpage">
        <h1>404 PAGE NOT FOUND</h1>
        <img src={errorp} alt="logo not displayed"/>
        <Link to="/"> <button>Go Back</button></Link>
        </div>
         
        </div>
    )
}

export default error;
