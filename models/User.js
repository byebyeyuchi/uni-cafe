const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   age: {
      type: String,
      default: "19",
   },
   location: {
      type: String,
      default: "England",
   },
   job: {
      type: String,
      default: "Jojo",
   },
   photo: {
      type: String,
      default: 'no-photo.jpg'
    },
   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("user", UserSchema);
