const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: Number },
});
const user = mongoose.model("user", userSchema);
module.exports = user;
