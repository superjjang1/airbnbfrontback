var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
    dest: './public/images/'
});
const db = require('../db');

// this means everything > router.post('*')

//this is a piece of middleware, that always gets the user with the token.
//checks the user out to lock down our app.
router.post('*', upload.single('locationImage'), (req, res, next) => {
  const token = req.body.token
  const getUserIdQuery = `SELECT id FROM users where token = ?`;
  db.query(getUserIdQuery, [token], (err, results) => {
    if (results.length === 0) {
      res.locals.loggedin = false;
      //checks to see if you're logged in,
    } else {
      res.locals.loggedIn = true;
      res.locals.uid = results[0].id
      // res.locals.file = req.body.file 

    }
    next(); //sends user on to next route, we're not stopping them, just moving them forward
    //after finding out they're a user.
  })
})
router.get('/cities',(req,res,next)=>{
  const citiesQuery = `SELECT * FROM cities
  ORDER BY RAND()
  LIMIT 8`;
  db.query(citiesQuery,(err,results)=>{
    if(err)throw err;
    res.json(results);
  })
})

router.get('/abodes',(req,res,next)=>{
  const citiesQuery = `SELECT * FROM homes
  ORDER BY RAND()
  LIMIT 8`;
  db.query(citiesQuery,(err,results)=>{
    if(err)throw err;
    res.json(results);
  })
})

module.exports = router;