var express = require('express');
var app = express();

var hostname = "localhost";
var port = 3000;

app.get('/helloWorld', (req, res) => {
  res.send('<h1>hello</h1>');
});

app.listen(port, hostname, () => {
  console.log('server is running '+hostname+' ' + port);
})