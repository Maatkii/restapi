const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/User");
require("dotenv").config();

const app = express();
const PORT = 4000;
const MONGO_URI = process.env.MONGO_URI;

const newUser = newUser({
  name: "Eya",
  age: 30,
  phoneNumber: 55158180,
});
newerson.save().then((data) => console.log(data));

const arrayOfUsers = [
  { name: "Eya", age: "20", phoneNumber: ["55158180"] },
  { name: "isra", age: "21", phoneNumber: ["23256547"] },
];

user.create(arrayOfUsers, function (err, user) {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});
user.find({ name: "Eya" }, function (err, user) {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});
user.findOne({ phoneNumber: "23256547" }, function (err, user) {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});
const userId = "";
user.findById(userId, function (err, user) {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
