var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
         'article-one' : {
           title: 'Article One | Ankur Pandey',
           heading: 'Article One | Ankur Pandey',
           date: 'March 19 , 2017',
           content:`
                    <p>
                        This is the content of first article.This is the content of first article.This is the content of first article.
                    </p>
                    <p>
                        This is the content of first article.This is the content of first article.This is the content of first article.
                    </p>
           `
         },
         'article-two' : {
           title: 'Article Two | Ankur Pandey',
           heading: 'Article Two | Ankur Pandey',
           date: 'March 19 , 2017',
           content:`
                    <p>
                        This is the content of second article.This is the content of second article.This is the content of second article.
                    </p>
                    <p>
                        This is the content of second article.This is the content of second article.This is the content of second article.
                    </p>
           `
         },
         'article-three' : {
           title: 'Article Three | Ankur Pandey',
           heading: 'Article Three | Ankur Pandey',
           date: 'March 19 , 2017',
           content:`
                    <p>
                        This is the content of third article.This is the content of third article.This is the content of third article.
                    </p>
                    <p>
                        This is the content of third article.This is the content of third article.This is the content of third article.
                    </p>
           `
         }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container" >
            <div>
                <a href="/"> Home </a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
    </html>
    `; 
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/submit-name', function (req, res) {
    //Get the name from the request
    var name = req.query.name;
    
    names.push(name);
    
    //JSON
     res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;    
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
