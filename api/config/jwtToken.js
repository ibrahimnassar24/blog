const dotenv = require("dotenv");

dotenv.config()

const accessKey = process.env.JWT_ACCESS_KEY;
const refreshKey = process.env.JWT_REFRESH_KEY;

module.exports = {
    accessKey,
    refreshKey
};