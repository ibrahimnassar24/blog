const {
    generateAccessToken,
    generateRefreshToken,
    validateRefreshToken
} = require("../../utilities/jwtToken")
const Account = require("../../models/account");

const refresh = async (req, res) => {

    try {


        const oldRefreshToken = req.cookies.refreshToken;
        const oldAccessToken = (req.headers.authorization)
        ? req.headers.authorization.split(" ")[1]
        : "Bearer token";
        if (!oldRefreshToken) {
            res.sendStatus(401);
            return;
        }

        const payload = await validateRefreshToken(oldRefreshToken);
        if (!payload) {
            res.sendStatus(401);
            return;
        }

        const account = new Account();
        const foundAccount = await account.findByUserName(payload.username);
        if (!foundAccount) {
            res.sendStatus(404);
            return;
        }

        const obj = {
            username: foundAccount.username,
            id: foundAccount._id,
            roles: foundAccount.roles
        };

        const tokens = foundAccount.tokens;
        tokens.refreshTokens = tokens.refreshTokens.filter(i => i != oldRefreshToken);
        const newRefreshToken = await generateRefreshToken(obj);
        tokens.refreshTokens.push(newRefreshToken);
        res.cookie("refreshToken", newRefreshToken, { httpOnly: true, maxAge: 1000 * 60 * 60 });
        tokens.accessTokens = tokens.accessTokens.filter(i => i != oldAccessToken);
        const newAccessToken = await generateAccessToken(obj);
        tokens.accessTokens.push(newAccessToken);
        await account.update(obj.username, { tokens });
        obj.accessToken = newAccessToken;

        
        res.json(obj);



    } catch (err) {
        res.sendStatus(400);
        console.log(err)
    }
};

module.exports = refresh;