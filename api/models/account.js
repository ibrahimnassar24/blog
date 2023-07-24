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

    async findByEmail(email) {
        
        try {
            const res = await this.collection.findOne({ email });
            logger(`finding account with email ${email}`);
            return res;
        } catch (err) {
            logger("error in account.findByEmail");
            throw err;
        }
    }

    async update(email, obj) {

        try {
            const res = await this.collection.updateOne({ email }, {$set: obj});
            logger(`updating account with email ${email}`);
            return res.modifiedCount;
        } catch (err) {
            logger("error in account.update");
            throw err;
        }
    }

    async remove(email) {
        try {
            const res = await this.collection.deleteOne({ email });
            logger(`deleting account with email ${email}`);
            return res.deletedCount;
        } catch (err) {
            logger("error in account.remove");
            throw err;
        }
    }

}

