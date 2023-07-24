const express = require("express");
const cors = require("cors");
const accountRoute = require("./account");

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));
router.use(cors());
router.use("/account", accountRoute);

module.exports = router;