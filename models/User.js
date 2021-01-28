const mongoose = require("mongoose");

const requiredString = {
  type: String,
  required: true,
};

const UserSchema = new mongoose.Schema({
  name: requiredString,
  email: requiredString,
  password: requiredString,
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = User = mongoose.model("users", UserSchema);
