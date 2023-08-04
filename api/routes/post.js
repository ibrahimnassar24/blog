const express = require("express");
const controller = require("../controllers/post/postController");
const authenticationChecker = require("../middleware/checkers/authenticationChecker");

const route = express.Router();

route.get("/create", authenticationChecker, controller.create)

module.exports = route;