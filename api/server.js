const express = require("express");
const { port } = require("./config/server");
const routes = require("./routes/api");
const logger = require("./utilities/logger");

const app = express();

app.use("/api", routes)

const server = app.listen(port, () => {
    console.log(`The server is up and running on port ${port}`);
})

app.get("/test", (req, res) => {
    res.sendFile(__dirname + "\\test.html");
})

server.on("request", (req) => {
    const msg = `${req.method} ${req.url} ${req.hostname}`;
    logger(msg);
})