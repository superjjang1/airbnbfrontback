var express = require('express');
var router = express.Router();
const db= require('../db');
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup',(req,res,next)=>{
  //someone wants to sign up!, so essited
  //first check to see if data is vali
  const { first,last,email,password } = req.body;
  if((!first)||(!last)||(!email)||(!password)){
    //stop goodbye
    res.json({msg:"invalidData"});
    return;
  }
  //if we get this far, check if they're already in the db.
  //why ? mark? to prevent sql injection.
const checkUserQuery = `SELECT * FROM users WHERE email =?`
db.query(checkUserQuery,[email],(err,results)=>{
  if(err){
    throw err
  };//fullstop
  if(results.length>0){
    // this email has been used
    res.json({
      msg: "userExists"
    })
  }else{
    //this email has not been used
    const insertUserQuery = ` INSERT INTO users(first, last, email, password) VALUES (?,?,?,?)`
    //turn the pw into something evil for db storage
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    db.query(insertUserQuery,[first,last,email,hash],(err2)=>{ if (err2){throw err2}
  res.json({
    msg: "usrAdded"
  })
});
  }

})
  res.json(req.body);
})

module.exports = router;
