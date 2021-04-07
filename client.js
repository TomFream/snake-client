/**
 * Establishes connection with the game server
 */
 const net = require('net');

 const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function (data) {
    console.log(`Message from server: ${data}`);
  });

  return conn;
};

module.exports = connect;