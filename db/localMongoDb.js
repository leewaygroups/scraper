var mongoose = require('mongoose');

var uri = "mongodb://localhost:27017/test";


mongoose.connect(uri);

//define data schema
var Schema = mongoose.Schema
	, ObjectId = Schema.ObjectId;

//Schema instantiation. Create schemas in this section
var NewsItemSchema = new Schema({
	daily: String,
	date: Date,
	category: String,
	headline: String,
	link: String
});

//Model instantiation. Create Models in this section
var Headlines = mongoose.model('Headlines', NewsItemSchema);

module.exports = function () {
	return {
		HeadlineModel: Headlines
	};
};