const packageJson = require("../package.json");
const express = require("express");
const app = express();

const PORT = 3000;

const HOSTNAME = process.env.HOSTNAME || "localhost";

app.get("/", async (_req, res) => {
  res.send({
    version: packageJson.version,
    containerId: HOSTNAME,
  });
});

app.get("/health", async (_req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on ${HOSTNAME} Port: ${PORT}`);
});
