const db = require('../models');

// Defining methods for the Trashmans Controller
module.exports = {
  findAll(req, res) {
    db.Trashman.find({})
      .then(function(dbModel) {
        res.send({ dbModel });
      })
      .catch(err => res.status(422).json(err));
  },
  logIn(req, res) {
    console.log(req.body);
    console.log(req.config);
    console.log(req.data);
    console.log(req.params);
    console.log('In Login');
    db.Trashman.findOne(
      { email: req.body.email, password: req.body.password },
      function(err, trashman) {
        console.log(err);
        console.log(trashman);
        res.status(422).json(trashman);
      }
    );
  },
  findById(req, res) {
    db.Trashman.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.Trashman.create(req.body)
      .then(function(dbModel) {
        res.status(status).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.Trashman.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.Trashman.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
