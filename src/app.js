const express = require("express");
const Docker = require("dockerode");
const docker = new Docker();
const app = express();

const PORT = 3000;

let counter = 0;

app.get("/version", (req, res) => {
  counter++;
  res.send(`Version 1.0.1 - ${counter}`);
});

app.get("/container-id", async (req, res) => {
  try {
    const container = await docker.getContainer(process.env.HOSTNAME);
    const containerId = container.id;
    res.send(`Container ID: ${containerId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting container ID");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
