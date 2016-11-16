var mongoose = require('mongoose'),
    User = mongoose.model('User');


function UsersController() {
    this.index = function(req, res) {
        User.find({}, function(err, data) {
            res.json(data);
        });
    };

    this.create = function(req, res) {
      var newUser = new User(req.body);
      newUser.save(function(error){
        if(error){
          res.json({error: "Oh noes!"})
        }else{
          var json = {email: newUser.email, fullName: newUser.fullName()}
          res.json(json)
        }
      })
    }
}

module.exports = new UsersController();
