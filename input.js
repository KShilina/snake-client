// Stores the active TCP connection object.
const { pressKey } = require("./constants");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  //check for (ctrl + c) command input
  if (key === "\u0003") {
    process.exit();
  }

  if (key in pressKey) {
    connection.write(pressKey[key]);
  }
};

module.exports = {
  setupInput,
};
