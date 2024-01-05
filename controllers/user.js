const UserModel = require('../models/user');

class UserController {
  static getUser (req,res) {
    // UserModel.find({})
    UserModel.create({age: 'also_awesome'})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })

  };

  // SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  //   if (err) return handleError(err);
  //   // saved!
  // });
};

module.exports = UserController;