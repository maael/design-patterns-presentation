var util = require('util'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    port = process.env.PORT || 3000,
    app = connect();

app.use(serveStatic(__dirname)).listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');