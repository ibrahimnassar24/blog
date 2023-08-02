const { verify } = require("../../utilities/password")
const Account = require("../../models/account");
const { generateAccessToken, generateRefreshToken } = require("../../utilities/jwtToken");
const logger = require("../../utilities/logger");

const signIn = async (req, res) => {
    try {


        const { username, password } = req.body;
        const account = new Account();

        const foundAccount = await account.findByUserName(username);
        if (!foundAccount) {
            res.sendStatus(404);
            return;
        }
        const matched = await verify(password, foundAccount.password);
        if (!matched) {
            res.sendStatus(401);
            return;
        }

        const obj = {
            id: foundAccount._id,
            username: foundAccount.username,
            roles: foundAccount.roles
        };
        const accessToken = await generateAccessToken(obj);
        const refreshToken = await generateRefreshToken(obj);

        const { tokens } = foundAccount;
        tokens.accessTokens.push(accessToken);
        tokens.refreshTokens.push(refreshToken);
        await account.update(
            foundAccount.username,
            { tokens }
        );

        res.cookie("refreshToken", refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 60 });
        res.json({
            accessToken,
            id: obj.id,
            username: obj.username,
            roles: obj.roles
        });

    } catch (err) {
        res.sendStatus(400);
        logger(err);
    }
}

module.exports = signIn;