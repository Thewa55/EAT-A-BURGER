var orm = require("../config/burgerorm.js")

var burger = {

  all:(cb) =>{
    orm.all("burgers", (results) => {
      cb(results)
    })    
  }
}

module.exports = burger