var express = require('express');
var router = express.Router();
var songController = require('../controllers/song');

/* GET users listing. */

router.get('/song/:title', songController.show)
module.exports = router;
