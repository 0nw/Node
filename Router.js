const server = require("./Server.js")

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
