
/**
 * Module dependencies.
 */

var debug = require('debug')('godsofarena-api:server');
var http = require('http');

var database = require('../database/database');
var router = require('./api/router');


/**
   * Normalize a port into a number, string, or false.
   */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = async function (app, express) {
  /**
   * Get port from environment and store in Express.
   */

  var port = normalizePort(process.env.API_PORT || '3000');
  app.set('port', port);

  /**
   * Create HTTP server.
   */

  var server = http.createServer(app);


  router(app, express);

  // define app content
  const { sequelize, models } = await database();
  app.locals.app = app;
  app.locals.server = server;
  app.locals.db = sequelize;
  app.locals.models = models;

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);

  /**
   * Event listener for HTTP server "error" event.
   */
  server.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

  /**
   * Event listener for HTTP server "listening" event.
   */
  server.on('listening', () => {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('\nListening on ' + bind);
  });

}