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
