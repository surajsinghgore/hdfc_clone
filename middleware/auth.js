const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
require("../database/connection");
const users = require("../database/dbSchema");
const middleware=require('./middleware');
const cookies=require('cookie-parser');

var multer  = require('multer')
var upload = multer({ dest: './images'});



router.use(cookies());







//todo:   registeration post request here
router.post("/register", async (req, res) => {
  const {
    name,
    gender,
    email,
    fname,
    mobile,
    dob,
    password,
    cpassword,
    address,
    country,

  } = req.body;

  if (
    !name ||
    !gender ||
    !email ||
    !email ||
    !mobile ||
    !dob ||
    !password ||
    !cpassword ||
    !address ||
    !country 
  ) {
    return res.status(422).json({
      error: "plz fill all fields properly",
    });
  }

  //  storing data with checking wheater data is already present or not with async await
  try {
    const checking = await users.findOne({
      email: email,
    });

    if (checking) {
      return res.status(422).json({
        error: "user already Exists",
      });
    } else if (password != cpassword) {
      return res.status(422).json({
        error: "password not match",
      });
    } else {
      const user = new users({
        name,
        gender,
        email,
        fname,
        mobile,
        dob,
        password,
        cpassword,
        address,
        country,
     
      });
      await user.save();
    }
  } catch (err) {
    console.log(err);
  }
});





//todo: about  us page
router.get('/aboutme', middleware ,(req,res) =>{
  res.send(req.rootUser);
  
});




//todo: contactUs  us page

router.get('/getData', middleware ,(req,res) => {
  res.send(req.rootUser);
  
});



//todo: contactUs  us page message post

router.post('/contact', middleware , async (req,res) => {
  try {
    const {name,email,mobile,message}=req.body;


if(!name||!email||!mobile||!message){
  console.log("error in contact form");
 return res.json({error:"please filled the contact form"});
}
const userContact=await users.findOne({_id:req.userId});

if(userContact){

  const userMessage=await userContact.addMessage(name,email,mobile,message);
  await  userContact.save();

  res.status(201).json({message:"user contact sucessfully "});
}





  } catch (error) {
    console.log(error);
  }
  
});

//todo:   login post request here

router.post("/signin", async (req, res) => {
  try {
    let {email,password}= req.body;

    //user not leave empty form of login
    if (!email || !password) {
      return res.status(400).json({
       
        message: "please fill emails and passwords field",
      });
    }

    //to read email data from database
    const emailPresent = await users.findOne({
      email: email,
    });

    if (emailPresent) {
      //!  hashing password of bcryptjs
      const isMatch = await bcrypt.compare(password, emailPresent.password);

       //* generating jwt token  see in file/../database/dbSchema
       const token=await emailPresent.generateAuthToken();
     console.log(token);

     //!storing cookies
     res.cookie("jwtoken",token,{
         expires: new Date(Date.now()+600000),
         httpOnly:true
     });

     
      //email match or not
      if (!isMatch) {
        res.status(400).json({
          err: "email/password id not present",
        });
      } else {
        res.json({
          msg: "user successfully login",
        });
      }
    } else {
      res.status(400).json({
        err: "email id not present",
      });
    }
  } catch (err) {
    console.log(err);
  }
});






//todo: logout  us page

router.get('/logout',(req,res) => {
  console.log('logout successfully');
res.clearCookie('jwtoken',{path: '/' }); 
  res.status(200).send('user logout');
});


module.exports = router;
