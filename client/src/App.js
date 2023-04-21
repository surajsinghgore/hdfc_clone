
import './App.css';

import {Route,Switch } from 'react-router-dom';

//all files link here
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import ContactUs from './components/contactus';
import Registers from './components/Registers';
import Logout from './components/Logout';

import error from './components/error';
import { createContext, useReducer } from 'react';
import {initialState, reducer} from '../src/reducer/useRedure';


export const userContext=createContext();

const App=() =>{


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   
    <>
<userContext.Provider value={{ state , dispatch}}>


  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/hdfcbankclone" component={Home}></Route>
    <Route exact path="/signin" component={Login}></Route>
    <Route exact path="/contactus" component={ContactUs}></Route>
   
    <Route exact path="/aboutme" component={About}></Route>
    <Route exact path="/logout"><Logout /></Route>
    <Route exact path="/register" component={Registers}></Route>
    <Route component={error}></Route>
  </Switch>
  </userContext.Provider>
   </>
  );
}

export default App;
