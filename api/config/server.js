const dotenv = require("dotenv");

dotenv.config()
const port = Number(process.env.PORT);

module.exports = {
    port
};