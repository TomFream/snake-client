/**
 * Establishes connection with the game server
 */
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', function() {
    console.log("Successfully connected to the game server!");
    conn.write('Name: Tom');
  });

  conn.on('data', function(data) {
    console.log(`Message from server: ${data}`);
  });

  return conn;
};

module.exports = { connect };