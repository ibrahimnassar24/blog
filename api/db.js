const { MongoClient} = require("mongodb");
const {connectionString} = require("./config/db");

const connection = new MongoClient(connectionString);

module.exports = {
    DB: connection.db("blog")
}