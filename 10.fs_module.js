const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./context/1st.txt", "utf-8");
const second = readFileSync("./context/2nd.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./context/result_file.txt",
  `Hello this is the result : ${first},${second}`
);
