const express=require('express');
const app=express();
const cors = require("cors");
const path=require('path')
const dotenv=require('dotenv');
dotenv.config({path:"./config.env"})
const PORT=process.env.PORT || 5000;

dotenv.config()
const buildPath = path.join(__dirname, 'client/build')
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.static(buildPath))
//require database here
require('./database/connection')


//json file understand by js
app.use(express.json());

//link router file
app.use(require('./middleware/auth'));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})



app.listen(PORT,()=>{
   console.log(`server is running on port ${PORT}`);
})



