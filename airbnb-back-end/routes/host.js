var express = require('express');
var router = express.Router();
const db = require('../db');
var multer = require('multer');
var upload = multer({dest: './public/images/'});
const fs = require('fs');

//this triggers when post('/host/homes') only applies in /host.

router.post('/homes',upload.single('locationImage'),(req,res)=>{
    const { title,location, guests, pricePerNight, details, amenities, token } = req.body
    //rename filepath
    const f = req.file;
    const finalFilePath = f.destination+'/'+Date.now()+f.originalname;
    const filePathForDb = filanFilePath.slice(8)
    fs.rename(f.path,finalFilePath,(err)=>{
        if(err)throw err;
    })
    const insertHomeQuery = `INSERT INTO homes`
    console.log(finalFilePath);
    res.json(req.body);
});

module.exports = router;