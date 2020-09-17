var app = require('express')();
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
console.log("Routes.js Loaded!")
module.exports = app;
