var app = require('express')();
const config = require("./data/config.json")
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('index', { title: "Title"})
})
console.log("Routes.js Loaded!")
module.exports = app;
//\\
