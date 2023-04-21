import {useEffect, useState} from 'react'
import Sidenavbar from './Sidenavbar';
import Topheader from './Topheader';
import './css/contact.css';



const ContactUs = () => {



    const [useData,setUserData]=useState({name:"",email:"",mobile:"",message:""});



    const calContactPage= async()=>{
       
try {
    const res= await fetch('/getData',{
        method:"GET",
        headers:{
           
            "Content-Type":"application/json"
        },
       
    });
   const data=await res.json();
   setUserData({...setUserData, name:data.name, email:data.email, mobile:data.mobile});
console.log(data);

if(!res.status===200){
 const error= new Error(res.error);
 throw error;   
}
} catch (error) {
 
    console.log(error);
   
}

    }

useEffect(() => {
   calContactPage();
    
},[]);



const userInput =(e)=>{
const name=e.target.name;
const value=e.target.value;


setUserData({...useData, [name]:value})

}

//submiting data to database
const submit= async(e)=>{
e.preventDefault();

const {name , email, mobile, message}=useData;

const res= await fetch('/contact',{
method: "POST",
headers:{
"Content-Type":"application/json"

},
body: JSON.stringify({
    name , email, mobile, message
})

});

const data=await res.json();
if(!data){

    console.log('message not send');
}
else{
    alert('message send')
setUserData({...useData, message:""});
}
}


    return (
        <div className="contact">
            <Sidenavbar />
            <Topheader />


            <div className="form">
            <h1>Get In Touch</h1>
                <form method="POST">

                    <input type="text" name="name" id="name" placeholder="ENTER YOUR NAME" value={useData.name}  />
                    <input type="email" name="email" id="email" placeholder="ENTER YOUR EMAIL" value={useData.email}  />
                    <input type="text" name="mobile" id="mobile" placeholder="ENTER YOUR MOBILE NUMBER" value={useData.mobile}  />
                    <textarea name="message" id="message" placeholder="ENTER YOUR MESSAGE" value={useData.message} onChange={userInput}></textarea><br></br>
<input type="submit" className="submit" value="submit" onClick={submit}/>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;
