var fs = require('fs');
var path = require('path');

//*****************This function is used to find 
//*****************portfolio files and the created module will be exported to index.js

var portfolioFinder = function (){
	fs.readdir('public/portfolio', function(err, files){
		if (err) throw (err);
		for (i = 0; i < files.length; i++){
			if (path.extname(files[i]) === '.jade'){
				files.push(files[i]);
			}
		}
	});
}
//used to compile the files within the portfolio

module.exports.portfolioFinder = portfolioFinder;