//require the modules====>

var express = require('express');
var router = express.Router();
var fs = require('fs');
var jade = require('jade');
var read_ind_portfolio = require('../read_ind_portfolio.js');


/* GET home page. */
router.get ('/', function(req, res, next) {
  res.render('index', { title: "Michael Montero's Page" }); //, pieces: pieces
	}); //


//link to my resume page when clicked on
router.get ('/resume', function(req, res, next){
	res.render('resume', { title: 'My Resume'});
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




