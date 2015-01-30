var util = require('util'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    port = 80,
    app = connect();

app.use(serveStatic(__dirname)).listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');