const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("home",{
    })
});

app.get('/', function(req, res) {
    res.render("home",{
    })
});

app.get('/about', function(req, res) {
    res.render("about",{
    })
});



const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);