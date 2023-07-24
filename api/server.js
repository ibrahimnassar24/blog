const express = require("express");
const { port } = require("./config/server");
const routes = require("./routes/api");

const app = express();

app.use("/api", routes)

const server = app.listen(port, () => {
    console.log(`The server is up and running on port ${port}`);
})