var express = require('express');
var dataStream = require('../db');

var router = express.Router();

//data point routes
router.get('/', function (req, res) {

	var stream = dataStream().HeadlineModel;
	stream.find({}, function (err, data) {

		if (err) {
			console.log("data get failed");
			throw err;
		}

		res.send(data);
	});
});

module.exports = router;