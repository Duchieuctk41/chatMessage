import express from "express";
let app = express();

let hostname = "localhost";
let port = 3000;

app.get('/helloWorld', (req, res) => {
  res.send('<h1>hello</h1>');
});

app.listen(port, hostname, () => {
  console.log('server is running '+hostname+' ' + port);
})