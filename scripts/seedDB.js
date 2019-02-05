const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rubbish');

const trashmanSeed = [
  {
    firstName: 'Ashkan',
    lastName: 'Wadpey',
    password: '123456',
    email: 'aw@gmail.com'
  },
  {
    firstName: 'Ado',
    lastName: 'Moshe',
    password: '123456',
    email: 'am@gmail.com'
  }
];

const ownerSeed = [
  {
    firstName: 'Jessica',
    lastName: 'Nguyen',
    password: '123456',
    email: 'jn@gmail.com'
  },
  {
    firstName: 'Sherrie',
    lastName: 'Lin',
    password: '123456',
    email: 'sl@gmail.com'
  }
];

db.Owner.remove({})
  .then(() => db.Owner.collection.insertMany(ownerSeed))
  .then(data => {
    console.log(data.result.n + ' records for owner inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Trashman.remove({})
  .then(() => db.Trashman.collection.insertMany(trashmanSeed))
  .then(data => {
    console.log(data.result.n + ' records for trashman inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
