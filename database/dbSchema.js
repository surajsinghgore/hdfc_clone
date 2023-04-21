const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    gender:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    fname:{
        type: String,
        required: true
    },
     mobile:{
        type: Number,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
  
   date:{
       type:Date,
       default:Date.now
   },
   messages:[
{
    name:{
        type: String,
        required: true
    },
   
    email:{
        type: String,
        required: true
    },
   
     mobile:{
        type: Number,
        required: true
    },
    message:{
        type:String,
        required:true
    }
}
    
   ]
   ,
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
   
  
});






//hashsing password 
userSchema.pre('save',async function(next){
    console.log('i exectue');
if(this.isModified('password'))
{
    this.password=await bcrypt.hash(this.password,12);
    this.cpassword=await bcrypt.hash(this.cpassword,12);
}
next();
});





//generating jwt token
userSchema.methods.generateAuthToken=async function(){
    try{
let Token=jwt.sign({_id:this._id},process.env.SCRETKEY)
//*storing token to database
this.tokens=this.tokens.concat({token:Token});
await this.save();
return Token;
    }catch(err){
        console.log(err);
    }
}

//storing message
userSchema.methods.addMessage=async function(name,email,mobile,message){
try {
    this.messages=this.messages.concat({name,email,mobile,message});
await this.save();
return this.messages;
} catch (error) {
    console.log(error);
}
}

const users=new mongoose.model('users',userSchema);

module.exports=users;