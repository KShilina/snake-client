// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //Created a function called handleUserInput and register it as the "data" callback handler for stdin.
  const handleUserInput = function (key) {
    //check for (ctrl + c) command input
    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      // console.log("Move: up");
      connection.write("Move: up");
    } else if (key === "a") {
      // console.log("Move: left");
      connection.write("Move: left");
    } else if (key === "s") {
      // console.log("Move: down");
      connection.write("Move: down");
    } else if (key === "d") {
      // console.log("Move: right");
      connection.write("Move: right");
    } else if (key === "m") {
      //console.log("Say: It's me!");
      connection.write("Say: It's me!");
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
