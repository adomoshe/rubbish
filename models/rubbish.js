const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rubbishSchema = new Schema({

});

const Rubbish = mongoose.model("Rubbish", rubbishSchema);

module.exports = Rubbish;