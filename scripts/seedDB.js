const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rubbish"
);

const trashmanSeed = [
    {
        firstName: "Ashkan",
        lastName: "Wadpey",
        password: "123456",
        email: "aw@gmail.com",
    },
    {
        firstName: "Ado",
        lastName: "Moshe",
        password: "123456",
        email: "am@gmail.com",   
    }
];

const ownerSeed = [
    {
        firstName: "Jessica",
        lastName: "Nguyen",
        password: "123456",
        email: "jn@gmail.com",
    },
    {
        firstName: "Sherrie",
        lastName: "Lin",
        password: "123456",
        email: "sl@gmail.com",
    }
];

db.Owner

db.Trashman