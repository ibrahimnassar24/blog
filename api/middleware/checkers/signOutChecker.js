const { validateRefreshToken } = require("../../utilities/jwtToken");
const logger = require("../../utilities/logger");

const signInChecker = async (req, res, next) => {

    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) {
            next();
            return;
        }
        
        const valid = await validateRefreshToken(refreshToken);

        if(!valid) {
            next();
        } else {
            res.status(400).send("you are already signed in");
            return;
        }

    } catch (err) {
        res.sendStatus(400);
        console.log(err);
    }
};

module.exports = signInChecker;