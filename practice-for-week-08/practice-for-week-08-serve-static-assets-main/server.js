const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  const htmlPage = fs.readFileSync("index.html");
  if (req.url.startsWith("/static/images")) {
    let tempArr = req.url.split("/");
    let id = tempArr[3];
    const img = fs.readFileSync(`./assets/images/${id}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpeg");
    return res.end(img);
  } else if (req.url.startsWith("/static/css")) {
    let tempArr = req.url.split("/");
    let id = tempArr[3];
    const css = fs.readFileSync(`./assets/css/${id}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "html/css");
    return res.end(css);
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  return res.end(htmlPage);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
