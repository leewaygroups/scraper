var expresss = require('express');
var startDataScrape = require('../scrape');
var bodyParser = require('body-parser');

var router = expresss.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var jsonParser = bodyParser.json();


router.get('/', function (req, res) {
	startDataScrape();
});

module.exports = router;
