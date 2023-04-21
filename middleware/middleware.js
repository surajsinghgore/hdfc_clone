const jwt=require("jsonwebtoken");
const User=require("../database/dbSchema");




const middleware= async(req,res,next)=>{
try {
    
const token=req.cookies.jwtoken;
const verfiyToken=jwt.verify(token,process.env.SCRETKEY);
const rootUser= await User.findOne({_id: verfiyToken._id,"tokens.token":token}); 


if(!rootUser){throw new Error('user not found')}

req.token=token;
req.rootUser=rootUser;

req.userId=rootUser._id;
console.log(rootUser._id);

next();
} catch (error) {
    res.status(401).send('Unauthorized user');
    console.log(error);
}


}


module.exports= middleware;
