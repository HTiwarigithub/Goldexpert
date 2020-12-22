var express = require('express')
var http = require('http');
var path = require('path');
var app = express();
const DIR = './uploads';
var multer = require('multer');
var bodyParser=require("body-parser");
//var fs = require('fs') 
var signup = require('./routes/signup');
var Payment = require('./routes/Payment');
var range = require ('./routes/range')




let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, DIR);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname );
  }
});
  
let storage1 = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, DIR1);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname );
  }
});
  
  let upload = multer({storage: storage}); 
  let upload1 = multer({storage: storage1});

var mssql    = require('mssql');
const { request } = require('express');
var connection = {
    server: 'sql5074.site4now.net',
    user:  'DB_A3CE37_goldexpert_admin',
    password: 'Gold@1234', 
    database : 'DB_A3CE37_goldexpert',
    options: {  
        enableArithAbort: false
      }
};


mssql.connect(connection,function(err,result) {
if(err)
console.log(err);
else
console.log("result");
});
// global.Fcm = FCM;
global.db = mssql;
global.conn = connection;  


app.set('hostname', process.env.Host );
app.set('port', process.env.PORT || 3500);
app.set('views', __dirname + '/views');
app.use('/Image/resources',express.static(__dirname + '/uploads'));
app.use('/Doc/resources',express.static(__dirname + '/documents'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port '+ app.get('port'));
});

var router = express.Router();
app.get('/', function (req, res) {
    res.send('This is the main Page');
});

app.use('/api', router);
router.get('', function(req, res) {
  res.send("This is testing api urls");
});

 router.post('/Signup/login',signup.signupUser);
 router.post('/Signup/signup',signup.signup);
 router.post('/Signup/validateotp',signup.validate_otp);
 router.post('/Signup/ResendOtp',signup.ResendOtp);
 
 router.post('/Payment/orderid',Payment.orderid);
 router.post('/Payment/updatetxn',Payment.updatetxn);
 router.post('/Payment/Paytm_op',Payment.Paytm_op);

 router.post('/range/Ptrange',range.Ptrange); 
 router.post('/range/Gdrange',range.Gdrange); 
 router.post('/range/Stone_range',range.Stone_range);
 router.post('/range/Old_gold_raw',range.Old_gold_raw);
 router.post('/range/Old_gold_jewel',range.Old_gold_jewel);
 router.post('/range/Silver_range',range.Silver_range);

