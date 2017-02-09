try this code for : server.js 

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages= {
    'pageOne': {
        title: 'Education|Pheonixdev',
        date: '3 Feb,2017',
        content: `<div>
                    <h5 class="education_title">School education</h5>
                    <p>
                        1998-2001 : Infant Jesus School, N.Paravoor.<br>
                        2001-2002 : St.Thomas Central School, Mukkolakal.<br>
                        2003-2011 : Loyola School, Sreekaryam.<br>
                    </p>
                    <h5 class="education_title">College education</h5>
                    <p>
                        2012-2016: Lourdes Matha College of Science and Technology, Kuttichal.<br>
                                   (Bachelor of Technology in Electronics and Communication)<br>
                    </p>
                </div>
                `
    },
    'pageTwo': {
        title: 'Interests|Pheonixdev',
        date: '3 Feb,2017',
        content: `<div>
                    <h5 class="interest_title">Football</h5>
                    <p>
                        <img src="/soccerPlayers.png" alt="Football image" align="centre"/>
                            Favorite Team: FC Barcelona
                            <a href="https://www.fcbarcelona.com/">
                            <img src="/FCBBarcelona-Logo-cool-Wallpaper.png" alt="Barcelona image" align="centre"/>
                            </a>
                            Favorite Player: Lionel Messi
                            <a href="https://en.wikipedia.org/wiki/Lionel_Messi">
                            <img src="/lionel-messi-barcelona.png" alt="Messi image" align="centre"/>
                            </a>
                    </p>
                    <h5 class="interest_title">Coding</h5>
                    <p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Android</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </p>
                    <h5 class="interest_title">Gaming</h5>
                    <p>
                        <ul>
                            <li><a href="https://en.wikipedia.org/wiki/Dota_2">DOTA</a></li>
                            <li><a href="https://worldofwarcraft.com/en-us/">World of Warcraft<a></li>
                            <li><a href="http://www2.ea.com/pc/fifa">Fifa</a></li>
                        </ul>
                    </p>
                </div>
                `
    },
    'pageThree': {
        title: 'Miscellaneous|Pheonixdev',
        date: '3 Feb,2017',
        content: `
                <div>
                    <h4>You can find me on:</h4>
                    <p>
                        <ul id="social_links">
                            <li><a href="https://www.facebook.com/sabari.nath.52687">Facebook</a></li>
                            <li><a href="https://www.instagram.com/sabri_nath/?hl=en">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/sabarinath-m-s-9389b3123">Linkedin</a></li>
                        </ul>
                    </p>
                </div>
                `
    }
};

function createTemplate(data){
    var title= data.title;
    var date= data.date;
    var content= data.content;
    var htmlTemplate =`
        <!doctype html>
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/style.css" rel="stylesheet"></link>
            </head>
            <body>
                <div class="center">
                    ${date}
                </div>
                <br>
                    ${content}
                <script type="text/javascript" src="/main.js">
                </script>
                <a href="javascript:history.go(-1)" class="go_back">[Go Back]</a>
            </body>
        </html>`;
    return htmlTemplate;
    }


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/:pageNumber', function (req, res) {
    var pageNumber = req.params.pageNumber;
  res.send(createTemplate(pages[pageNumber]));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:filename', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', req.params.filename));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});