var express = require('express');
var router = express.Router();
var http = require('http');


var test = "";
var options = {
//  host: 'www.google.com',
  host: 'parse-server-exampleebe8.azurewebsites.net',
  port: 80,
  path: '/',
  method: 'GET'

};

http.get(options, function(resp){
  resp.pipe(process.stdout);

  resp.on('data', function(d) {
    test += d;
  });



}).on("error", function(e){
  console.log("Got error: " + e.message);
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: test });
});

module.exports = router;
