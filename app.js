const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const sqlite3 = require('sqlite3').verbose();

var bodyParser     = require('body-parser');

//activate and configure express
var cors = require('cors');

var express = require('express');
var app = express();
app.use(cors());

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 
require('./routes')(app); // configure our routes

app.use(express.urlencoded({ extended: false }));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// expose app           
exports = module.exports = app;                         


