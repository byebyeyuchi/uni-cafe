const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
   },
   profile: {
      type: Object
   },
   title: {
      type: String,
      required: true,
   },
   body: {
      type: String,
      required: true,
   },
});

module.exports = mongoose.model("post", PostSchema);
