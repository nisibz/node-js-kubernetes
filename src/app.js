const express = require("express");
const app = express();

const PORT = 3000;

let counter = 0;

app.get("/version", (req, res) => {
  counter++;
  res.send(`Version 1.0.0 - ${counter}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
