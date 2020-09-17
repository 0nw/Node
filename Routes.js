var app = require('express')();
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html');
});
console.log("Routes.js Loaded!")
module.exports = app;
