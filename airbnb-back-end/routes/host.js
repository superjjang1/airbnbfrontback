var express = require('express');
var router = express.Router();
const db = require('../db');

//this triggers when post('/host/homes') only applies in /host.

router.post('/homes',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;