const express = require("express");
const controller = require("../controllers/accountController");
const authenticate = require("../middleware/checkers/authenticationChecker");
const authorize = require("../middleware/checkers/authorizationChecker");
const signInChecker = require("../middleware/checkers/signInChecker");
const signOutChecker = require("../middleware/checkers/signOutChecker")

const route = express.Router();

route.post("/signin", signOutChecker, controller.signIn)
route.post("/signup", controller.signUp)
route.get("/signout", /*signInChecker,*/ controller.signOut)
route.get("/refresh", controller.refresh)

module.exports = route;