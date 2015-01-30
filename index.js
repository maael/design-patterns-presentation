var express = require('express'),
    pub = __dirname + '/public',
    app = express.createServer();
app.use(express.static(pub));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});