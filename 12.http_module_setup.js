const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Welcome to my server`);
  }
  if (req.url === "/about") {
    res.end(`Welcome to my about page`);
  }
  res.end(`
    <h1>Oops!!</h1>
    <p>We can't find the page you are looking for</p>
    <a href='/'>Back Home</a>
    `);
});

server.listen(5000);
