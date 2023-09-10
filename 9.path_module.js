const path = require("path");

//separator
console.log(path.sep);

//path name for the folder created
const filepath = path.join("/context", "subfolder", "text.txt");
console.log(filepath);

//base name for the file path
const base_name = path.basename(filepath);
console.log(base_name);

//returns absolute path
const absolute = path.resolve(__dirname, "context", "subfolder", "text.txt");
console.log(absolute);
