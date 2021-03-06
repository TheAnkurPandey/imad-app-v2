var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
//var crypto = require('crypto');
//var bodyParser = require('body-parser');



var config = {
  user: 'theankurpandey',
  database: 'theankurpandey',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
//app.use(bodyParser.json());

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
                ${date.toDateString()}
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
/*
function hash(input , salt){
    //how do we create hash
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}

app.get('/hash/:input', function (req, res) {
  var hashedString = hash(req.params.input, 'this-is-some-random-string');
  res.send(hashedString);
});

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});

app.post('/login', function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(403).send('username/password is invalid');
          } else {
              // Match the password
              var dbString = result.rows[0].password;
              var salt = dbString.split('$')[2];
              var hashedPassword = hash(password, salt); // Creating a hash based on the password submitted and the original salt
              if (hashedPassword === dbString) {
                
                
                
                res.send('credentials correct!');
                
              } else {
                res.status(403).send('username/password is invalid');
              }
          }
      }
   });
});


app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send('<html><body>Logged out!<br/><br/><a href="/">Back to home</a></body></html>');
});
*/
var pool = new Pool(config);
/*
app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});
app.get('/get-comments/:articleName', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT comment.*, "user".username FROM article, comment, "user" WHERE article.title = $1 AND article.id = comment.article_id AND comment.user_id = "user".id ORDER BY comment.timestamp DESC', [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});
*/

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



/*app.get('/articles/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
}); */

app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
