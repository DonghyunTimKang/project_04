var express = require('express');
var router = express.Router();

var songController = require('../controllers/song')

/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
