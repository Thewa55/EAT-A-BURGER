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

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
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
  },

  update:(table, col, condition, cb) => {
    console.log("This is the col in update ", col)
    var querystring = "UPDATE " +table+ " SET " + objToSql(col)+ " WHERE " +condition+";"
    console.log("This is col: ", col)
    console.log(querystring)
    connection.query(querystring, condition, (err, result) =>{
      if (err) throw err;
      cb(result);
    })
  }
}

module.exports = orm