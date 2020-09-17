var app = require('express')();
var http = require('http').createServer(app);
const router = require("./Router.js")

http.listen(3000, () => {
  console.log('listening on *:3000');
});
