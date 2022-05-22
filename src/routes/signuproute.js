const express = require("express");
const { append } = require("express/lib/response");
const signupRouter = express.Router();
const user = require("../data/user");

signupRouter.get("/", function (req, res) {
  res.render("signup", {});
});

signupRouter.get("/adduser", function (req, res) {
  var newuser = {
    //10. I am a deprecated method that welcomes a new user in this project. You know better now.
    //(used req.query)
    uid: req.query.uid,
    pwd: req.query.pwd,
  };
  console.log(newuser);
  user.push(newuser);
  console.log(user);
  res.redirect("/login");
});

module.exports = signupRouter;
