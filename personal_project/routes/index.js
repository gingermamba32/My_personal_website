//require the modules====>

var express = require('express');
var router = express.Router();
var fs = require('fs');
var jade = require('jade');

//var staticLib = require('static-site-generator')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Michael Montero's Page" });
});

//link to my resume page when clicked on
router.get('/resume', function(req, res, next){
	res.render('resume', { title: 'My Resume'});
});
//fs.readdir
// router.get('../portfolio/', function(req, res, next){
// 	res.render('portfolio', { title: 'My Portfolio', images:file});
// });

//read and populate the images for the project directory. Images should go within the images folder

// var read_images =  fs.readdir('../public/images/img/portfolio/', function(err, files){
// 	if (err) throw new Error(err);
//	res.render(path.resolve(__dirname + ))

// 		res.render('index', {})
// });


module.exports = router;
//module.exports = staticLib.generateRoutes(router);

//want to get to the point where this index.js will read the contents within the views folder and print out the results

// var portfolio_items = fs.readdirSync(__dirname + '/../projects/');
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






