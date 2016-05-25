var express = require('express');
var router = express.Router();
var rp = require('request-promise');

var songController = require('../controllers/song');
var usersController = require('../controllers/users');
var token = require('../config/token_auth');

router.route('/api/song')
  .get(songController.index)
  .post(songController.create)


/*router.route('/api/song/:title')
  .get(songController.showTwo);*/

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

router.route('/api/song/:id')
  .get(songController.show);



router.post('/users',    usersController.create);
router.get( '/users/me', token.authenticate, usersController.me);

router.post('/token',    token.create);

/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
