var express = require("express")
var router = express.Router()
var burger = require("../models/burgerModels.js")

router.get("/", (req, res) => {
  burger.all(burgerData =>{
      var objForHbs = {
        burgers: burgerData
      }
      res.render("index", objForHbs)
  })
})

router.post("/api/burgers",(req,res)=>{
  burger.create(["burger_name"], [req.body.burger_name], (results) =>{
    res.json({ id: results.insertId})
  })
})

router.put("/api/burgers/:id", (req,res)=>{
  var condition = "id = " +req.params.id;
  console.log("condition ", condition);
  console.log("This is req", {eaten: req.body.eaten})
  burger.update({hungry: req.body.hungry}, condition, (result)=> {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})
module.exports = router