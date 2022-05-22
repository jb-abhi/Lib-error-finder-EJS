const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
// const nav = [
//   {
//     link: "/books",
//     title: "Books",
//   },
//   {
//     link: "/authors",
//     title: "Authors",
//   },
//   {
//     link: "/addbook",
//     title: "Add Book",
//   },
//   {
//     link: "/addauthor",
//     title: "Add Author",
//   },
// ];

const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");
// 3. I am a local (user-defined) module. I am checking whether you can distinguish the location name from my name. //Changed homeroute to homerouter in app.js

const homeRouter = require("./src/routes/homerouter");
const booksRouter = require("./src/routes/booksroute");
const authorsRouter = require("./src/routes/authorsroute");

const app = new express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

// 5. I will be a sick joke when you run this application.
// Changed
// app.use(bodyParser.urlencoded({ extended: true }));
// to
// app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// 7.  I took care when someone else tries to access this server for resource sharing. I am not currently used. Add me if you find me useful.
//(CORS)
app.use(cors());

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

app.get("/", function (req, res) {
  res.render("index", {});
});

app.listen(port, () => {
  console.log("Server Ready");
});
