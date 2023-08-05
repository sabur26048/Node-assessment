const express = require("express");
const collection=require("./schema");
const router = express.Router();

//crud for account
router.route("/:accountname").get(async(req,res)=>{
    let data;
    try{
         data=await collection.find({account_name : req.params.accountname});

    }
    catch(error){
      res.status(500).send(error)
    }
    res.status(200).send(data);
})
router.route("/:accountname").post(async(req,res)=>{
    const data={
        agent: req.body.agent,
        userType: req.body.userType,
        policy_mode: req.body.policy_mode,
        producer: req.body.producer,
        policy_number:req.body.policy_number,
        premium_amount_written:req.body.premium_amount_written,
        premium_amount: req.body.premium_amount,
        policy_type: req.body.policy_type,
        company_name: req.body.company_name,
        category_name: category_name,
        policy_start_date: req.body.policy_start_date,
        policy_end_date: req.body.policy_end_date,
        csr: req.body.csr,
        account_name:req.params.accountname,
        email:
        req.body.email,
        gender: req.body.gender,
        firstname:req.body.firstname,
        city:req.body.city,
        account_type:req.body.account_type,
        phone:req.body.phone,
        address:req.body.address,
        state:req.body.state,
        zip: req.body.zip,
        dob:req.body.dob,
        primary:req.body.primary,
        Applicant_ID: req.body.Applicant_ID,
        agency_id:req.body.agency_id,
        hasActiveClientPolicy:req.body.hasActiveClientPolicy
    }
    try{
        await collection.insertMany([data]);}
        catch(error){res.status(500).send(error)}
        res.send(data);   
})
router.route("/:accountname").patch(async(req,res)=>{
    let data;
    try{data=await collection.updateMany({accountname : req.params.accountname},{$set : req.body},{new:true});}
    catch(error){ res.status(500).send(error);}
    res.status(200).send(data);   
})
router.route("/:accountname").delete(async(req,res)=>{
    let data;
    try{
    data=await collection.deleteMany({firstname : req.params.accountname});}
    catch(error){res.status(500).send(error); }
    res.status(200).send(data);  
})

module.exports=router
