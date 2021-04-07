const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  handleUserInput(stdin);
  
  return stdin;
};

const handleUserInput = (stdin) => {
  stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
    }
  }); 
};

module.exports = { setupInput };