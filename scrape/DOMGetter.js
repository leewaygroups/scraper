var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var localdb = require('../db');





//dailys sentinel. check before further scrape
var node = this;
node.theVangStatus = true;


function DOMGetter() {

	var writable = fs.createWriteStream(__dirname + '/headline.txt');

	this.request = function (requestObj) {
		
		//one mongooseDb connection model per request instance
		var db = localdb();

		for (var page = 1; page < 7000; page++) {
			request(requestObj.url + page, function (error, response, body) {

				if (!error && response.statusCode === 200) {

					var $ = cheerio.load(body);
					$(".listing").children().each(function (index, newsItem) {
						var titleLink = $(newsItem).find(".posttitle a");
						var dateElement = $(newsItem).find(".meta-time");

						var headline = $(titleLink).text();
						var link = $(titleLink).attr("href")
						var date = $(dateElement).text();

						//Just to monitor scrape output at command line. 
						//This can also be achieved using Morgan.
						//It does not add any business benefit, infact it is an overhead
						console.log({
							daily: requestObj.dailyName,
							date: date,
							category: requestObj.category,
							headline: headline,
							link: link,
						});

						//write to db
						var headlineItem = new db.HeadlineModel({
							daily: requestObj.dailyName,
							date: date,
							category: requestObj.category,
							headline: headline,
							link: link
						});

						headlineItem.save(function (err) {
							if (err) {
								console.log("Hey dude! Save to db operation failed.");
							}
						});

					});

					return;
				}

			});
		}
	};
}

var DOMGetterObjs = {
	DOMGetter: DOMGetter
}

module.exports = DOMGetterObjs;