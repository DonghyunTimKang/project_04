var request = require('request');
var Song = require('../models/song');

module.exports = {
  index: index,
  show: show,
  showTwo: showTwo,
  create: create,
  update: update,
  destroy: destroy

}

function index(req, res, next) {
  Song.find({}, function(err, songs) {
    if (err) next(err);

    res.json(songs);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  Song.findById(id, function(err, song) {
    if (err) next(err);

    res.json(song);
  });
}

function showTwo(req, res, next) {

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

function update(req, res, next) {
  var id = req.params.id;

  Song.findById(id, function(err, song) {
    if (err) next(err);

    song.title = req.body.title;
    song.authors = req.body.authors;
    song.lyrics = req.body.lyrics;

    show.save(function(err, updatedSong) {
      if (err) next(err);

      res.json(updatedSong);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Song.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Show successfully deleted'});
  });
}


