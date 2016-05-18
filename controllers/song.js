var request = require('request')

module.exports = {
  show: show
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
