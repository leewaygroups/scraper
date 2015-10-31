var scrape = require('./scrape');
var data = require('./data');

module.exports = function(app){
	app.use('/scrape', scrape);
	app.use('/data', data);
};