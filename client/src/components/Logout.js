import React,{useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {userContext} from '../App';


const Logout = () => {
    const {dispatch} = useContext(userContext);
const history= useHistory();
useEffect(()=>{
fetch('/logout',{
        method:'GET',
        headers:{
            Accept: "application/json",
            "Content-type": "application/json"
        },
        credentials: "include"
    }).then((res)=>{

        dispatch({type: "USER" ,payload:false});
history.push('/signin',{replace: true});
if(!res.status===200){
    const error=new Error(res.error);
throw error;
}
    }).catch((err)=>{ console.log(err)});
});

    return (
        <div>
            <h1>Logout successsfully </h1>
        </div>
    )
}

export default Logout;
