var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.get("/", function(req, res){
  res.sendFile(__dirname +"/src" +"/index.html");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on 5000");
});