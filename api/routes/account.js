const express = require("express");
const controller = require("../controllers/account");

const route = express.Router();

route.get("/", controller.signIn)

module.exports = route;