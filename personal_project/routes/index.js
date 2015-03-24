//require the modules====>

var express = require('express');
var router = express.Router();
var fs = require('fs');
var jade = require('jade');
var read_ind_portfolio = require('../read_ind_portfolio.js');
var path = require('path');
//******janrain requirements
var janrain = require('janrain-api');
// var connect = require('connect');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
//var http = require('https');



/* GET home page. */
router.get ('/', function(req, res, next) {
  res.render('index', { title: "Michael Montero's Page" }); //, pieces: pieces
	}); //


//link to my resume page when clicked on
router.get ('/resume', function(req, res, next){
	res.render('resume', { title: 'My Resume'});
});


//*************get my Janrain Login page*************

var janrainApiKey = janrain('{4b50ac91bee538c9060d345c94b8a8d5b6dca041}');
var engageUrl = 'https://rpxnow.com/api/v2/auth_info';
console.log(janrainApiKey);

router.get ('/login', function(req, res, next){
	res.sendFile(path.join(__dirname, '../views/janrain.html') );
    //console.log('Login Success');
});

function fetchUserDataFromJanrain(userToken) {
  var apiParams = { 'apiKey': janrainApiKey, 'token': userToken };
  console.log(apiParams);
  var engage_params = {
    host: engageUrl,
    path: '/',
    api_params: apiParams
  };

  // var authInfo = https.post(engage_params, function(res) {
  //   JSON.parse(res.body);
  // });
}

router.post('/engage_callback_url', function(req, res) {
  var userToken = req.body.token;
  console.log(userToken);  
  //if user token is bad ERROR handling
  if(!userToken || userToken.length != 40 ) {
    res.send('Bad Token!');
    return;
  }
	//console.log(fetchUserDataFromJanrain(userToken));
  	fetchUserDataFromJanrain(userToken);

  	//console.log(JSON.parse(res.body));
    //console.log(JSON(body));

    //res.JSON(body)

  	res.redirect('/login');
});

var http = require('http');

function fetchUserDataFromJanrain(userToken) {
  var apiParams = { 'apiKey': janrainApiKey, 'token': userToken };
  console.log(apiParams);

  var engage_params = {
    host: engageUrl,
    path: '/',
    api_params: apiParams
  };
console.log(engage_params);
  // var authInfo = http.post(engage_params, function(res) {
  //   JSON.parse(res.body);
  // });
}



//****************new stuff to get portfolio pieces**************

router.param ('piecename', function(request, response, next, piecename){
	read_ind_portfolio.find(piecename, function (piece) {
		if (piece) {
			request.piece = piece;
			next();
		} else {
			return next ( new Error('No such piece as ' + piecename + '!'));
		}
	});
});

router.get('portfolio/pieces', function(req, res, next){
	read_ind_portfolio.read(function(pieces){ 
		res.render('pieces', {title: 'My Portfolio Item', pieces: piece})
	});
});







module.exports = router;




