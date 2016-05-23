var express = require('express');
var router = express.Router();

var songController = require('../controllers/song');

router.route('/api/song')
  .get(songController.index);


router.route('/api/song/:title')
  .get(songController.show);

/*router.route('/api/song/:id')
  .get(songController.show)
  .put(songController.update)
  .delete(songController.destroy);
*/
/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
