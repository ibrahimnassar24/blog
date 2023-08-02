const Account = require("../../models/account");
const { validateRefreshToken } = require("../../utilities/jwtToken");
const logger = require("../../utilities/logger");

const signOut = async (req, res) => {

    try {

        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) {
            res.sendStatus(401);
            return;
        }

    const data = await validateRefreshToken(refreshToken);
    const account = new Account();
    const { tokens } = await account.findByUserName(data.username);

    tokens.refreshTokens = tokens.refreshTokens.filter(i => i != refreshToken);
    await account.update(data.username, { tokens })
    res.clearCookie("refreshToken");
    res.sendStatus(204);
    } catch(err) {
        res.sendStatus(400);
        logger(err);
    }
}

module.exports = signOut;