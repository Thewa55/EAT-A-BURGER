var connection = require("../config/connection");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
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
    let length = printQuestionMarks(vals.length)
    var querystring = "INSERT INTO "+table+" ("+cols.toString()+") VALUES (" +length+"); ";

    connection.query(querystring, vals, (err, res)=>{
      if(err) throw err;
      cb(res)
    })
  },

  update:(table, col, condition, cb) => {
    console.log("This is the col in update ", col)
    var querystring = "UPDATE " +table+ " SET " + objToSql(col)+ " WHERE " +condition+";"
    connection.query(querystring, condition, (err, result) =>{
      if (err) throw err;
      cb(result);
    })
  }
}

module.exports = orm