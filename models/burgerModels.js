var orm = require("../config/burgerorm.js")

var burger = {

  all:(cb) =>{
    orm.all("burgers", (results) => {
      cb(results)
    })    
  },

  create:(cols, vals, cb) =>{
    orm.create("burgers", cols, vals, (res)=>{
      cb(res);
    })
  },

  update:(objValCols, condition, cb) =>{
    orm.update("burgers", objValCols, condition, (res) =>{
      cb(res);
    })
  },

  delete:(vals, cb)=>{
    orm.delete("burgers", vals, (res)=>{
      cb(res);
    })
  }
}

module.exports = burger