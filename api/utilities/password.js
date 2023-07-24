const bcrypt = require("bcrypt");
const logger = require("./logger");

const encrypt = async (pwd) => {

    try {
        const hash = await bcrypt.hash(pwd, 10);
        return hash;
    } catch(err) {
        logger("error in password encrypt");
        throw err
    }
};

const verify = async (pwd, hash) => {

    try {
        const res = await bcrypt.compare(pwd, hash);
        return res;
    } catch(err) {
        logger("error in password.vverify");
        throw err;
    }
};

module.exports = {
    encrypt,
    verify
};
