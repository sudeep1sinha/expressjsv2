var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


const mongoose =require("mongoose")
const plm =require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/database")

const userschema =mongoose.Schema({
  username:String,
  password:String,
  secret:String,
});

userschema.plugin(plm);

module.exports=mongoose.model("user",userschema);