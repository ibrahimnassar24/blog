const dotenv = require("dotenv");

dotenv.config()

const connectionString = process.env.DB_CONNECTION_STRING;
//const connectionString = "mongodb://127.0.0.1:27017";

module.exports = {
    connectionString
}