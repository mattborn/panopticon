var express = require('express');
var fs = require('fs');
var app = express();

app.get('/medical', function(req, res) {
  // req.username;
  fs.readFile('./data.json', function (err, data) {
    if (!err) {
      res.send(JSON.parse(data));
    }
      res.send('Hey, couldn’t load ur dataz.');
  });
});

app.listen(process.env.PORT || 1985);