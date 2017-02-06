var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={

  'article-one':{
	           title:'article-one',
	           heading:'Article One',
	           date:'5th march',
	content: 
	    `<h1>This is my first article</h1>
	     <div>5th march</div>
         <p>I am very eagr to pearn.so i am doing this web app tutorial</p>
         <p>this is just for testing</p>`
           },


  'article-two':{ title:'article-two',
	           heading:'Article two',
	           date:'6th march',
	content: 
	    `<h1>This is my first article</h1>
	     <div>5th march</div>
         <p>I am very eagr to pearn.so i am doing this web app tutorial</p>
         <p>this is just for testing</p>
         p>I am very eagr to pearn.so i am doing this web app tutorial</p>
         <p>this is just for testing</p>`
            }

    
};

function createtemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemplate=`
<!doctype html>
<html>
    <head>
     <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
        <link href="/ui/style.css" rel="stylesheet" />
        <title>
              ${title}
        </title>
    </head>
    <body>
    <div class="container">
        <h1>
             ${heading}
        </h1>
        <div>
             ${date}
        </div>
             ${content}
    </div>
       
           
    </body>
</html>

`;

return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
	//:articlename matches the name like articleone,articletwo
	var articlename =  req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
