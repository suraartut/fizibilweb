const express = require("express");
const next = require("next");
const { join } = require("path");
const url = require("url");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3042;
var httpsRedirect = require("express-https-redirect");

app.prepare().then(() => {
  const server = express();

  //server.use('/', httpsRedirect(true));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3042");
  });
});
