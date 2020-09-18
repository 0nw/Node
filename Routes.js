var app = require('express')();
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey'})
})
console.log("Routes.js Loaded!")
module.exports = app;
//\\
