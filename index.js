const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/events", async (req, res) => {
  try {
    console.log("Event Received", req.body);

    try {
      await axios.post("http://localhost:4001/events", req.body);
    } catch (error) {
      console.error(
        "Error posting to http://localhost:4001/events:",
        error.message
      );
    }

    try {
      await axios.post("http://localhost:4002/events", req.body);
    } catch (error) {
      console.error(
        "Error posting to http://localhost:4002/events:",
        error.message
      );
    }

    try {
      await axios.post("http://localhost:4003/events", req.body);
    } catch (error) {
      console.error(
        "Error posting to http://localhost:4003/events:",
        error.message
      );
    }

    res.send({ status: "OK" });
  } catch (error) {
    console.error("Error handling request:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Event Bus is running on port 3000");
});
