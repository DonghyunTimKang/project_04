var express = require('express');
var router = express.Router();

var songController = require('../controllers/song');

router.route('/api/song')
  .get(songController.index)
  .post(songController.create)


router.route('/api/song/:title')
  .get(songController.showTwo);

router.route('/api/song/:id')
  .get(songController.show);


/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
