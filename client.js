const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  //event handler on data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  //event handler to a server and execute callback function
  conn.on("connect", () => {
    console.log("Successfully connected to the game server!");

    conn.write("Name: ES"); // send intial name prompt on connection
  });
  conn.setEncoding("utf8"); // interpret incoming data as text
  return conn; //The conn object that Node returned to us represents the connection that you have with the server.
};

module.exports = { connect };
