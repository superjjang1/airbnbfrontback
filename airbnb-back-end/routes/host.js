var express = require('express');
var router = express.Router();
const db = require('../db');
var multer = require('multer');
var upload = multer({dest: './public/images/'});

//this triggers when post('/host/homes') only applies in /host.

router.post('/homes',upload.single('locationImage'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.json(req.body);
});

module.exports = router;