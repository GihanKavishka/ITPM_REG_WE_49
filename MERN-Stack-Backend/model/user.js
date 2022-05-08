const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  dateJoined: {
    type: Date,
    required: true,
  },

  active: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("user", userSchema);

module.exports = users;
