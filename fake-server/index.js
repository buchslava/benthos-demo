const express = require("express");
const app = express();
const port = 3100;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value = 1;
const names = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

app.get(`/data`, (req, res) => {
  const date = (new Date()).toISOString();
  console.log(date);
  value = value == 1 ? 2 : 1;
  res.json({date, key: names[getRandomInt(0, names.length - 1)], value});
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
