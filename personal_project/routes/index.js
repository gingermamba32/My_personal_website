//require the modules====>

var express = require('express');
var router = express.Router();
var fs = require('fs');
var jade = require('jade');
var read_ind_portfolio = require('../read_ind_portfolio.js');
var path = require('path');
//******janrain requirements
var http = require('https');



/* GET home page. */
router.get ('/', function(req, res, next) {
  res.render('index', { title: "Michael Montero's Page" }); //, pieces: pieces
	}); //


//link to my resume page when clicked on
router.get ('/resume', function(req, res, next){
	res.render('resume', { title: 'My Resume'});
});


//*************get my Janrain Login page*************
//resSendFIle is used for any nonjade files
router.get ('/login', function(req, res, next){
	res.sendFile(path.join(__dirname, '../views/janrain.html') );
    
});

//post to the OAuths

var fs, http, https, querystring, _ref;

_ref = ['fs', 'http', 'https', 'querystring'].map(require), fs = _ref[0], http = _ref[1], https = _ref[2], querystring = _ref[3];

router.post('/engage_callback_url', function(request, response) {
      request.setEncoding('utf8');
      request.on('data', function(chunk) {
        var query_params, token, url;
        token = querystring.parse(chunk)['token'];
        console.log("Recieved token: " + token);
        query_params = querystring.stringify({
          apiKey: '4b50ac91bee538c9060d345c94b8a8d5b6dca041',
          token: token
        });
        url = {
          protocol: "https:",
          host: "rpxnow.com",
          path: "/api/v2/auth_info?" + query_params
        };
        console.log(("Requesting URL: " + url.protocol + "://") + url.host + url.path);
        https.get(url, function(res) {
          response.writeHead(200, {
            'Content-Type': 'text/javascript'
          });
          res.setEncoding('utf8');
          res.on('data', function(chnk) {
            response.write(chnk);
            return console.log(chnk);
          });
          return res.on('end', function() {
            return response.end();
          });
        });
      });
    });

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




