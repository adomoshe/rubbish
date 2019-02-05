const db = require('../models');

// Defining methods for the OwnersController
module.exports = {
  findAll(req, res) {
    db.Owner.find({})
      .then(function(dbModel) {
        res.send({ dbModel });
      })
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db.Owner.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.Owner.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.Owner.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.Owner.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
