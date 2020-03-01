var connection = require("../config/connection");

var orm = {

  all:(table, cb) => {
    connection.query("SELECT * FROM ?", table, (err,res)=>{
      if(err) throw err
      cb(res)
    })
  }
}

module.exports = orm