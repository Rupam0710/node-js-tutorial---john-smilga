//Common JS - every file is module(by default)
//modules - encapsulated  code(only share minimum)

const names = require("./4.names");
const sayHi = require("./5.utils");

sayHi("Susan");
sayHi(names.rupam);
sayHi(names.raj);
