function requestBuilder(daily, dailyName, callback) {
	var baseAndCategoryUrls = [];

	for (var prop in daily.category) {
		baseAndCategoryUrls.push({
			dailyName: dailyName,
			category: prop,
			url: daily.baseUrl + daily.category[prop]
		});
	}
	
	//example resultant url: http://www.vanguardngr.com/category/national-news/page/
	baseAndCategoryUrls.forEach(function (request) {
		callback(request);
	});
};


module.exports = requestBuilder;