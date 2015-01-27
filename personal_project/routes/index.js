var express = require('express');
var router = express.Router();

//var staticLib = require('static-site-generator')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Michael Montero's Page" });
});

//in views folder call to separate files through the href
router.get('/resume', function(req, res, next){
	res.render('resume', { title: 'My Resume'});
});

router.get('/portfolio', function(req, res, next){
	res.render('portfolio', { title: 'My Portfolio'});
});

router.get('/about', function(req, res, next){
	res.render('about', { title: 'About Me'});
});

router.get('/hobbies', function(req, res, next){
	res.render('hobbies', { title: 'My Hobbies'});
});
router.get('/contact', function(req, res, next){
	res.render('contact', { title: 'Contact Me'});
});


module.exports = router;
//module.exports = staticLib.generateRoutes(router);

//want to get to the point where this index.js will read the contents within the views folder and print out the results

// var blogposts = fs.readdirSync(__dirname + '/../projects');
// var collector = [];
// var filecollector = [];	
// blogposts.forEach(function cleanfiles (value, index, array) {
// 	var infile;
// 	var pattern = new RegExp('.jade');
// 	if( pattern.test(value)){
// 		infile = fs.readFile( __dirname + '/../projects/' + blogposts[index]);
// 		filecollector.push(infile);
// 		collector.push(value);
// 		console.log('is a dot jade file')
// 	}
// 	else {
// 		console.log('is not a jade file')
// 	}
// 	}
// // return filecollector
// });

// console.log(filecollector)
// console.log(filecollector.length);
// var path = require('path');

// router.get('/')






