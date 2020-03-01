var connection = require("../config/connection");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

var orm = {

  all:(table, cb) => {
    console.log(table)
    connection.query("SELECT * FROM " + table + ";", (err,res)=>{
      if(err) throw err
      cb(res)
    })
  },

  create:(table, cols, vals, cb)=> {
    console.log(vals)
    console.log(vals.length)
    let length = printQuestionMarks(vals.length)
    var querystring = "INSERT INTO "+table+" ("+cols.toString()+") VALUES (" +length+"); ";

    connection.query(querystring, vals, (err, res)=>{
      if(err) throw err;
      cb(res)
    })
  }

}

module.exports = orm