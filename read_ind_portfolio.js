var fs = require('fs');
var jade = require('jade');

//***************used to both find the file itself and render the data on the screen

var find = function(portfolio_piece_name, callback){
	fs.readdir(__dirname + 'public/portfolio', function(err,files){
		if (files.indexOf(portfolio_piece_name + '.jade') !== -1){ //!== -1 is used to ...
			fs.readFile('..public/portfolio' + portfolio_piece_name + 'jade', function(err, data){
				callback(jade.compile(data));
			})
		} else callback(null); 
	})
}

var read = function(callback) {
	fs.readdir('public/portfolio/', function (err, files) {
		var ind_items = files.filter(function(filename) {
			return filename.indexOf('jade') !== -1;
		})
		for (i = 0; i < ind_items.length; i ++){
			var data = fs.readFileSync('public/portfolio/' + ind_items[i]);
				ind_items[i] = jade.render(data);
		}
	callback(ind_items);
	});
}

module.exports.find = find;
module.exports.read = read;