const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const accountRoute = require("./account");
const postRoute = require("./post");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));
router.use(cors({origin: "http://localhost:5173", credentials: true}));
router.use(cookieParser());

router.use("/account", accountRoute);
router.use("/post", postRoute);

module.exports = router;