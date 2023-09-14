const { readFile, writeFile } = require("fs");

console.log(`start`);
readFile("./context/1st.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./context/2nd.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./context/result_file_async.txt",
      `Hello this is the result : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`done with the task`);
      }
    );
  });
});

console.log(`starting with the next task`);
