require('dotenv').load();
var mongoose = require('./database');

var Song = require('../models/song');



var songs = [
  {
    title: "Let it be",
    authors: "The Beatles",
    lyrics: "When I find myself in times of trouble "
  },
  {
    title: "Don't Stop Believing",
    authors: "Journey",
    lyrics: "Just a small town girl"
  }
];


Song.remove({}, function(err) {
  if (err) console.log(err);
  Song.create(songs, function(err, songs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + songs.length + " songs.");
      mongoose.connection.close();
    }
    process.exit();
  });
});

