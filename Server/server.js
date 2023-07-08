const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api", async (req, res) => {
  console.log(req._parsedUrl.query);
  let url = "https://newsapi.org/v2/top-headlines?" + req._parsedUrl.query;
  let r = await axios.get(url);
  let a = r.data;
  res.json(a);
});

app.listen(5000, () => {
  console.log("server started!");
});
