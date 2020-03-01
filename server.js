var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars")
var routes = require("./controllers/burgersController.js")


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine("handlebars", exphbs({defaultlayout: "main"}));
app.set("view engine", "handlebars");
app.use(routes)

app.listen(PORT, () =>{
  console.log("Connected to port: " + PORT)
});