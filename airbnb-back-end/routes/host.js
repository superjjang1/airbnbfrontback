var express = require('express');
var router = express.Router();
const db = require('../db');
// var multer = require('multer');
// var upload = multer({
//     dest: './public/images/'
// });
const fs = require('fs');

//this triggers when post('/host/homes') only applies in /host.

router.post('/homes', (req, res) => {
    if(!res.locals.loggedIn){
        res.json({msg:"badToken"})
        return;
    }
    // console.log(req.body);
    // console.log(req.file);
    const {
        title,
        location,
        guests,
        price,
        details,
        amenities,
        token
    } = req.body
    //rename filepath
    const f = req.file;
    const finalFilePath = f.destination + '/' + Date.now() + f.originalname;
    const filePathForDb = finalFilePath.slice(8)
    fs.rename(f.path, finalFilePath, (err) => {
        if (err) throw err;
    })

    const insertHomeQuery = `INSERT INTO homes (uid,title, location, guests, price, details, amenities) VALUES (?,?,?,?,?,?,?)`;
    const dbValues = [uid, title, location, guests, price, details, amenities]
    console.log(finalFilePath);
    res.json(req.body);
});

module.exports = router;