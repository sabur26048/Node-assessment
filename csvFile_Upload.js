const express = require("express");
const collection=require("./schema")
const router = express.Router();
const multer = require("multer");
const csv=require("csvtojson");
// using mutler for csv upload..
const storage =multer.diskStorage({ 
destination: (req, file, cb) => {
cb (null,"./uploads"); 
},

filename: (req, file, cb) => { 
cb(null, file.originalname);
}
});

const upload = multer({
storage,
});

router.route("/").post(upload.single("csvFile"), async (req, res) => { 
try{
  const jsonArray=await csv().fromFile(req.file.path);
  await collection.insertMany(jsonArray);
}
  catch(error){
    return res.status(500).json(error);
  }
    return res.json(jsonArray);
});
module.exports=router;