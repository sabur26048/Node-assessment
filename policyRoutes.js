const express = require("express");
const collection=require("./schema");
const router = express.Router();


//policy crud operation....
router.route("/:policynumber").get(async(req,res)=>{
    let data;
    try{
         data=await collection.find({policy_number : req.params.policynumber});
    }
    catch(error){
      res.status(500).send(error)
    }
    res.status(200).send(data);
})
router.route("/:policynumber").patch(async(req,res)=>{
    let data;
    try{data=await collection.updateMany({policynumber : req.params.policynumber},{$set : req.body},{new:true});}
    catch(error){ res.status(500).send(error);}
    res.status(200).send(data);   
})
router.route("/").put(async(req,res)=>{
    //await collection.find();
    //res.send(data);   
})
//policy_number is unique key for collection data so no need to delete it.

module.exports=router
