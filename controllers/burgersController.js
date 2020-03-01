var express = require("express")
var router = express.Router()
var burger = require("../models/burgerModels.js")

router.get("/", (req, res) => {
  burger.all(burgerData =>{
      console.table(burgerData)
      var objForHbs = {
        burgers: burgerData
      }
      res.render("index", objForHbs)
  })
})

router.post("api/burgers",(req,res)=>
  burger.create("burger_name", req.body.burger_name, (results) =>{
    res.json({ id: result.insertId})
  })
)


module.exports = router