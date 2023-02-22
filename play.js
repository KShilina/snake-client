const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect(); //store conn obj returned by connect

setupInput(conn); //passing conn obj to setupInput

//play.js serve as our main file through which we will launch the game client.