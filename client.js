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

  conn.on('connect', function() {
    console.log("Successfully connected to the game server!");
  });

  conn.on('connect', function () {
    conn.write('Name: Tom');
  });

  conn.on('data', function (data) {
    console.log(`Message from server: ${data}`);
  });

  return conn;
};

module.exports = connect;