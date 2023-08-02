const {validateAccessToken} = require("../../utilities/jwtToken");

const authenticate = async (req, res, next) => {
    
    try {

        if(!req.headers["authorization"]) {
            return res.sendStatus(401);
        }
        
        const token = req.headers["authorization"].split(" ")[1];
        const valid = await validateAccessToken(token);

        if(valid)
        {
            return next();
        } else {
            return res.sendStatus(401);
        }
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
};

module.exports = authenticate;