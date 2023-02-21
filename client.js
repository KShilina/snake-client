const net = require("net");
// establishes a connection with the game server
const connect = function () {
  //We used Node's net library (specifically, the createConnection function) to create an object named conn in the code below.
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });
  //event handler on data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  //event handler to a server and execute callback function
  conn.on("connect", () => {
    console.log("Successfully connected to the game server!");
    // send intial name prompt on connection
    conn.write("Name: ES");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //The conn object that Node returned to us represents the connection that you have with the server.
  return conn;
};

module.exports = { connect };
