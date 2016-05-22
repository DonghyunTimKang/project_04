var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
    title: String,
    authors: String,
    chordsURL: String,
    lyrics: String
})

var Song = mongoose.model('Song', songSchema);
module.exports = Song;
