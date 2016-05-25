var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var songController = require('../controllers/song');
var usersController = require('../controllers/users');
var token = require('../config/token_auth');

//Show all songs and create songs
router.route('/api/song')
  .get(songController.index)
  .post(songController.create)
//Show one song
router.route('/api/song/:id')
  .get(songController.show);

//Third party call
router.put('/api/songThirdparty', function(req, res){
rp({
  method: "GET",
  uri: "http://api.guitarparty.com/v2/songs/?",
  qs: {
    api_key: process.env['GUITAR_PARTY_KEY'],
    query: req.body.query
  }
})
.then(function(response){
  console.log(response.body)
  res.json(JSON.parse(response));
})
.catch(err => console.log(err))
})


/* AUTH ROUTES*/
router.route('/api/users')
  .post(usersController.create);

router.route('/api/users/me')
  .get(token.authenticate, usersController.me);
//Show specific user
router.route('/api/user/:id')
  .get(usersController.show);

router.route('/api/token')
  .post(token.create);



/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
