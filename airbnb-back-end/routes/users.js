var express = require('express');
var router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const randToken = require('rand-token');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', (req, res, next) => {
  //someone wants to sign up!, so essited
  //first check to see if data is vali
  const {
    first,
    last,
    pass,
    email
  } = req.body;
  if ((!first) || (!last) || (!pass) || (!email)) {
    //stop goodbye
    res.json({
      msg: "notworking"
    });
    return;
  }
  //if we get this far, check if they're already in the db.
  //why ? mark? to prevent sql injection.
  const checkUserQuery = `SELECT * FROM users WHERE email =?`
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      throw err
    }; //fullstop
    if (results.length > 0) {
      // this email has been used
      res.json({
        msg: "userExists"
      })
    } else {
      //this email has not been used
      const insertUserQuery = ` INSERT INTO users(first, last, email, pass, token) VALUES (?,?,?,?,?)`
      //turn the pw into something evil for db storage
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(pass, salt);
      const token = randToken.uid(50);
      //grants 50 random numbers as your token.
      db.query(insertUserQuery, [first, last, email, hash, token], (err2) => {
        if (err2) {
          throw err2
        }
        res.json({
          msg: "userAdded",
          token,
          email,
          first
        })
      });
    }

  })
})
router.post('/login', (req, res) => {
  console.log(req.body)
  const email = req.body.email;
  const pass = req.body.password;
  //first check for this email.
  const checkLogQuery = `Select * FROM users WHERE email = ?`
  db.query(checkLogQuery, [email], (err, results) => {
    if (err) {
      throw err
      //check to see if thre's a result
    };
    if (results.length > 0) {
      //at this stage, you've found the user.
      const thisRow = results[0]
      //find out if the pass is corrct
      const isValidPass = bcrypt.compareSync(pass, thisRow.pass)
      if (isValidPass) {
        //these are the things we're looking for
        const token = randToken.uid(50)
        const updateUserTokenQuery = `UPDATE users SET token = ? WHERE email = ?`
        db.query(updateUserTokenQuery, [token, email], (err) => {
          if (err) {
            throw err
          }
        })
        res.json({
          msg: "loggedIn",
          first: thisRow.first,
          email: thisRow.email,
          token
        })
      } else {
        //no pass
        res.json({
          msg: "badpass"
        })
      }
    } else {
      //no match
      res.json({
        msg: "noEmail"
      })
    }
  })
})

module.exports = router;