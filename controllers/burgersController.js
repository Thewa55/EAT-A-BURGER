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


module.exports = router