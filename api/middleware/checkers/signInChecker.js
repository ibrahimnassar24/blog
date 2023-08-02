const { validateRefreshToken } = require("../../utilities/jwtToken");
const Account = require("../../models/account");
const logger = require("../../utilities/logger");

const signInChecker = async (req, res, next) => {

    try {
        const refreshToken = req.cookies.refreshToken;
        const valid = await validateRefreshToken(refreshToken);

        if(valid) {
            next();
        } else {
            res.status(400).send("you are not signed in");
            return;
        }

    } catch (err) {
        res.sendStatus(400);
        logger(err);
    }
};

module.exports = signInChecker;