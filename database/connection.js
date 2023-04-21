const mongoose=require('mongoose');



const db=process.env.DATABASE;

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
console.log('successfully connection');
}).catch((e)=>{
console.log("database not connected");
});
