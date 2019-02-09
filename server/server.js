const express = require("express");
let app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//Gets form information w/POST and sends/appends it to
//form.json
app.post("/formsubmissions", (req, res) => {
  fs.appendFileSync(
    "form.json",
    `Name: ${req.body.name} && Email: ${req.body.email}\n`
  );
  //responds with a page that just says Thanks.
  res.send("Thanks");
});

//console logs URL of request
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("Hello from the other side...");
});

//port to run as server
app.listen(3000);
