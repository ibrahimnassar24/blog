const { DB } = require("../db");
const logger = require("../utilities/logger");

class Account {
    constructor() {
        this.collection = DB.collection("account");
    }

    async create(obj) {

        try {
            const res = await this.collection.insertOne(obj);
            logger(`created new account with id ${res.insertedId}`);
            return res;
        } catch (err) {
            logger("error in account.create");
            throw err;
        }
    }

    async findByUserName(username) {
        
        try {
            const res = await this.collection.findOne({ username });
            logger(`finding account with username ${username}`);
            return res;
        } catch (err) {
            logger("error in account.findByUsername");
            throw err;
        }
    }

    async update(username, obj) {

        try {
            const res = await this.collection.updateOne({ username }, {$set: obj});
            logger(`updating account with username ${username}`);
            return res.modifiedCount;
        } catch (err) {
            logger("error in account.update");
            throw err;
        }
    }

    async remove(username) {
        try {
            const res = await this.collection.deleteOne({ username });
            logger(`deleting account with username ${username}`);
            return res.deletedCount;
        } catch (err) {
            logger("error in account.remove");
            throw err;
        }
    }

}

module.exports = Account;