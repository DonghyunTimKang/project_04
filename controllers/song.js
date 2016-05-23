var request = require('request');
var Song = require('../models/song');

module.exports = {
  index: index,
  show: show,
  create: create

}

function index(req, res, next) {
  Song.find({}, function(err, songs) {
    if (err) next(err);

    res.json(songs);
  });
}

function show(req, res) {

  var baseUri = 'http://api.guitarparty.com/v2/songs/?'
  var key = '&api_key='+ process.env['GUITAR_PARTY_KEY']

  var searchStr = '&query='+req.params.title;
  request(baseUri+key+searchStr, function(err, apiRes, body){
      if(!err && res.statusCode == 200){
      var searchedSong = JSON.parse(body)
      res.json(searchedSong);
    }
  })
}

function create(req, res, next) {
  var newSong = new Song(req.body);

  newSong.save(function(err, savedSong) {
    if (err) next(err);

    res.json(savedSong);
  });

}
