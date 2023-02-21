// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //Created a function called handleUserInput and register it as the "data" callback handler for stdin.
  const handleUserInput = function (key) {
    //check for (ctrl + c) command input
    if (key === "\u0003") {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
