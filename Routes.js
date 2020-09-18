var app = require('express')();
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('index', { title: "Title"})
})
console.log("Routes.js Loaded!")
module.exports = app;
//\\
