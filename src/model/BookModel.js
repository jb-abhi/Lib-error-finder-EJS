const mongoose = require("mongoose");
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost:27017/Library",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

mongoose.connect(
  "mongodb+srv://ABHIJITH:abhijithjb4541@cluster0.giuem.mongodb.net/Library",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  about: String,
});

const bookdata = mongoose.model("bookdata", BookSchema);

module.exports = bookdata;

//End
