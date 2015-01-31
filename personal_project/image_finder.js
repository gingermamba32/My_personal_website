var fs = require('fs');
var path = require('path');

//************Find the Image files within the public/image/img/projects folder to print on the page


var imageFinder = function(){
	fs.readdir('public/images/img/portfolio', function(err, files){
		if (err) throw (err);
		for (i = 0; i < files.length; i++){
			if (path.extname(files[i]) === '.png'){
				files.push(files[i]);
			}
		}
	});
}

//used to find the images files related to the portfolio
module.exports.imageFinder = imageFinder