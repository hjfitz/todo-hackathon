const logger = require('morgan')('dev');
const parser = require('body-parser');
const express = require("express");
const path = require("path");

const api = require('./api');

const app = express();
const port = process.env.PORT || 5000;

app.use(logger);
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', api);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "webpages")));

// make sure that this middleware is used LAST
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => console.log('App running at localhost:5000'));
