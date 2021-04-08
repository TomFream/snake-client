let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  handleUserInput(stdin, conn);
  
  return stdin;
};

const handleUserInput = (stdin, conn) => {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === '/') {
      conn.write('Say: Big snake!');
    }
  });
};



module.exports = { setupInput };

// switch (key) {
//   case (key === '\u0003'):
//     process.exit();
//   case (key === 'w'):
//     conn.write('Move: up');
//   case (key === 'a'):
//     conn.write('Move: left');
//   case (key === 's'):
//     conn.write('Move: down');
//   case (key === 'd'):
//     conn.write('Move: right');
// };