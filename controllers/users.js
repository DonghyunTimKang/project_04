var User = require("../models/user");

module.exports = {
  create: create,
  me:     me,
  show: show,
  update: update
};

function create(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  User
    .create(req.body)
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully created user.',
        data: {
          email: user.email,
          id:    user._id
        }
      });
    }).catch(function(err) {
      if (err.message.match(/E11000/)) {
        err.status = 409;
      } else {
        err.status = 422;
      }
      next(err);
    });
};

function me(req, res, next) {
  User
    .findOne({email: req.decoded.email})
    .populate('songs')
    .exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });

};

function show(req, res, next) {
  var id = req.params.id;

  User.findById(id, function(err, user) {
    if (err) next(err);

    res.json(user);
  });
};

function update(req, res, next){
  User.findOne({email: req.decoded.email}).exec(function(err, user){
    console.log("user "+req.user)
    user.songs.push(req.params.songId)
    console.log("song param "+req.params.songId)

    user.save(function(err, savedUser){
      if(err) console.log(err)
        res.json(savedUser)
    })
  })
}

/*function update(req, res, next){
  var id = req.params.id;

  User.findById(id, function(err, user) {

    user.song.push(req.params.song._id)
    console.log(req.params.songId)

    user.save(function(err, savedUser){
      if(err) console.log(err)
        res.json(savedUser)
    })
  })
}

*/







