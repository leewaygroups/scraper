> ## In this basic app I tried to show the following:
> > * How easy it is to web scrape with nodejs and its modules.

> > * How to traverse html files with Cheerio (a js module).

> > * How routing can be super simple with expressJS.

> > * And some level of code structuring: db for db stuff, routes for routing and scrape for all scrape stuffs. this helps to keep one's mind clear, makes code easy to maintain as well.

> ## Conscience rules:
Before a quick rundown on how you can run this basic app and probably extend it, note the following:

> > * Understanding that mindless web scraping could cause a DoS attack on the target site.

> > * Also be careful how you use scrapped contents that you don't breach copyrights laws.
> > * And lastly, scrape with the fear of God. 

> > ### "Do not do to others sites/content what you wouldn't want others to do to yours".

> ## Pre-requisutes:
> > * You should have nodeJS installed and mongodb installed. Don't know how to do this? See links below:
<https://nodejs.org/en/download/>, <https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/> .
For other OS, you'll also find the needed info at those links.

Note that I used mongoose to work with mongodb here. You can decide to use mongdb client directly which I find much better in terms of querying mongodb. However, you should be aware of JSON BSON (In this case, just for good education).


> ## How does it work?
> > * Download the and unzip to a directory.

> >* cd to the root directory and run: npm install (again not all dependencies were actually used so feel free to do away with those you may not need).

> > * Still in our app directory (at cmd/terminal), run: nodemon app.js.
For info on nodemon see: <http://nodemon.io/> and <https://github.com/remy/nodemon#nodemon> .

> > * To scrape open your browser window go to: <localhost:4005/scrape/> . You should see in realtime what is being scraped at your terminal were you have nodemon running.

> > * Once you have some data scraped (you need not wait till scraping ends), open another tab on in your browser and goto:<localhost:4005/data/> . 

You should see some data. To have the data look more readable, install JSONViewer estension on your browser.

###### Sample output data :
```
{
 daily: "Vanguard",
date: "2009-01-01",
category: "business"
news: "Something happened",
link: "http://whatever/news/2009-01-01/something-happened"
} 
```