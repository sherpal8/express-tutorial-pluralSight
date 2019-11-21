const express = require("express");
const app = express();
const port = 3000;

app.get("/", function indexGet(req, res) {
  res.send("Hello beautiful world");
});

app.listen(port, function appListen() {
  console.log(`Listening now on port: ` + port);
});
