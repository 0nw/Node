var app = require('express')();
const users = require("./data/users.json")
console.log("Auth.js Loaded!")
function checkExist(username){
  var exists = None;
  x = 0;
  taken = []
  for(x in range(len(users))){
    taken.append(users[x].username)
    x++
  }
  if(username in taken){
    exists = true;
}
}

module.exports = app;
//\\
