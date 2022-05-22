const mongoose = require("mongoose");

// 1. You can find me if you look at the starting point.
// changed
// mongoose.connect('mongodb://localhost:27017/Library');
// to
// mongoose.connect("mongodb://localhost:27017/Library", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// 2. I am a third-party module that is installed and has an important role. I will prevent your application from running. The entire part of myself is missing.
//Installed EXPRESS module

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  title: String,
  image: String,
  about: String,
});

const authordata = mongoose.model("authordata", AuthorSchema);

module.exports = authordata;
