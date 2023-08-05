const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser : true,
   // useUnifiedTopology :true

}).then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("mongodb connection failed");
})


//definig schema...
const schema=new mongoose.Schema({
    agent: {
        type:String,
        required:true
    },
    userType: {
        type:String,
        required:true
    },
    policy_mode: {
        type:String,
        required:true
    },
    producer: {
        type:String,
        required:true
    },
    policy_number: {
        type:String,
        required:true
    },
    premium_amount_written: {
        type:String,
        required:false
    },
    premium_amount: {
        type:String,
        required:true
    },
    policy_type: {
        type:String,
        required:true
    },
    company_name: {
        type:String,
        required:true
    },
    category_name: {
        type:String,
        required:true
    },
    policy_start_date: {
        type:String,
        required:true
    },
    policy_end_date: {
        type:String,
        required:true
    },
    csr: {
        type:String,
        required:true
    },
    account_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:false
    },
    firstname: {
        type:String,
        required:true
    },
    city:{
        type:String,
        required:false
    },
    account_type:{
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:false
    },
    state: {
        type:String,
        required:false
    },
    zip: {
        type:String,
        required:false
    },
    dob: {
        type:String,
        required:true
    },
    primary: {
        type:String,
        required:false
    },
    Applicant_ID: {
        type:String,
        required:false
    },
    agency_id:{
        type:String,
        required:false
    },
    hasActiveClientPolicy: {
        type:String,
        required:false
    }
})

const collection=new mongoose.model("collection1",schema)
module.exports=collection
