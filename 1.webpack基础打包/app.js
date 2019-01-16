//es module
import sum from "./sum"
//commonjs
var minus = require("./minus");

console.log("run",sum(23,24));

console.log("run2",minus(23,24))