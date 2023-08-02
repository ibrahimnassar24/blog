const Account = require("../../models/account");
const {encrypt} = require("../../utilities/password");
const signUp = async (req, res) => {
    
    try {
        const account = new Account();
        const newAccount = req.body;
        newAccount.roles = ["user"];
        newAccount.tokens = {
            accessTokens: [],
            refreshTokens: []
        };

        newAccount.password = await encrypt(req.body.password);
        const created = await account.create(newAccount);
        if(!created) {
            res.sendStatus(400);
            return;
        }
        res.sendStatus(204);
    } catch(err) {
        res.sendStatus(400);
        console.log(err)
    }
}

module.exports = signUp;