var dailys = require('./dailys');
var scrape = require('./scrape');
var DOMGetterObj = require('./DOMGetter');


//For The Vanguard
var vanguard = dailys.vaguard;
var domGetter = new DOMGetterObj.DOMGetter();


//Exposed module
function Init() {
	scrape(vanguard, "Vanguard", domGetter.request);
}

module.exports = Init;