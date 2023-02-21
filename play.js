//This will serve as our main file through which we will launch the game client.

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
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //The conn object that Node returned to us represents the connection that you have with the server.
  return conn;
};

console.log("Connecting ...");
connect();

//About Events
// When you connect to a server, or when it closes its connection with you, or when it sends you data, these are events. You can control how your client responds to these events if you know how to listen for them. If you don't listen for the event, you can't react to it.

// The conn object that Node gave you has everything you need to listen for events that occur on your connection. The code that defines what to do when an event occurs is often called an event handler.

// The .on method lets you specify an event name and a function that does something when that event happens.
// conn.on("event name", functionThatDoesSomething);
//In fact, you don't need to use a named function that does something. Instead you can use an anonymous function. This is common practice:
// conn.on("event name", () => {
//   // code that does something
// });
//The "event name" has to be a specific event name as defined by Node. For example, connect is a specific event that happens when a successful connection is made:
// conn.on("connect", () => {
//   // code that does something when the connection is first established
// });
