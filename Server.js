var app = require('express')();
var http = require('http').createServer(app);
app.use(require("./Auth.js"));
app.use(require("./Chat.js"));
app.use(require("./Routes.js"));
http.listen(3000, () => {
  console.log('Listening on port:3000');
});

module.exports = app
// 
