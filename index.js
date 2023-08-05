const express=require('express')
const app=express()
const csvdataUpdate=require("./csvFile_Upload")
const userRoutes=require("./userRoutes")
const accountRoutes=require("./accountRoutes")
const policyRoutes=require("./policyRoutes")
const collection=require("./schema")
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT=process.env.PORT||3000;

//all routes...
app.use("/user",userRoutes)
app.use("/account", accountRoutes)
app.use("/policy",policyRoutes)
app.use("/update-csv",csvdataUpdate)

//Home page ...
app.get('/',async(req,res)=>{
    let data;
    try{
   data=await collection.find({});
    }
 catch(error){
      res.status(500).send("NOT CONNECTED"+error)
    }
    res.send(data);
})


app.listen(PORT,()=>console.log('server started'))