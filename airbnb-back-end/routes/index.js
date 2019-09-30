var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
    dest: './public/images/'
});
const db = require('../db');
const config = require ('../config');
var stripe = require('stripe')(config.stripeKey)

// this means everything > router.post('*')

//this is a piece of middleware, that always gets the user with the token.
//checks the user out to lock down our app.
router.post('*', upload.single('locationImage'), (req, res, next) => {
  console.log('hello?')
  const token = req.body.token
  const getUserIdQuery = `SELECT id FROM users where token = ?`;
  db.query(getUserIdQuery, [token], (err, results) => {if(err){throw err};
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
  const abodesQuery = `SELECT * FROM homes
  ORDER BY RAND()
  LIMIT 8`;
  db.query(abodesQuery,(err,results)=>{
    if(err)throw err;
    res.json(results);
  })
})
router.get('/abode/:abodeId',(req,res,)=>{
  const abodeId = req.params.abodeId;
  const getAbodeQuery = `SELECT * FROM homes WHERE id = ?`;
  db.query(getAbodeQuery,[abodeId],(err,result)=>{
    if(err) throw err;
    res.json(result[0])
  })
})
router.post('/payment/stripe', (req, res, next) => {
  //we dont need token. It's already been validated above.
  console.log('paymentstripe')
  if(!res.locals.loggedIn){
    res.json({msg: "badToken"})
    return;
  }
  const { stripeToken, amount, email, abodeId} = req.body;
  stripe.charges.create({
      amount,
      currency: 'usd',
      source: stripeToken,
      description: `Charges for ${email}`
  }, (err, charge) => {
      if (err) {
          res.json({
              msg: 'errorProcessing'
          });
      } else {
        const insertReservationQuery = `INSERT INTO reservation
          (uid, hid, paid)
          VALUES
          (?,?,?)`
        db.query(insertReservationQuery,[res.locals.uid,abodeId,1]);
          res.json({
              msg: 'paymentSuccess'
          });
      }
  });
});

module.exports = router;