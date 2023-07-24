const dotenv = require("dotenv");

dotenv.config()

const connectionString = process.env.DB_CONNECTION_STRING;

module.exports = {
    connectionString
}