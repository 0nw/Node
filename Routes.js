var app = require('express')();
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('index', { title: "Login"})
})
app.get('/register', function (req, res) {
  res.render('register', { title: "Register"})
})
app.get('/posts', function (req, res) {
  res.render('posts', { title: "Posts"})
})
console.log("Routes.js Loaded!")
module.exports = app;
//\\
