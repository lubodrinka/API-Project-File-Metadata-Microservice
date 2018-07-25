'use strict';

var express = require('express');
var cors = require('cors');
//var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })
const bodyParser = require('body-parser')
var router = express.Router()
// require and use "multer"...

var app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});
//
var multer = require('multer')
var upload = multer({ dest: './uploads/' });
 
/*var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});
 
var upload = multer({ storage: storage });*///<input id="inputfield" type="file" name="upfile">
 
app.post('/api/fileanalyse/',  upload.single('upfile'), function(req, res, next){
  console.log(req.file)
   console.log(req.body)
  res.json({filename: req.file.originalname, mimetype: req.file.mimetype, size: req.file.size});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
