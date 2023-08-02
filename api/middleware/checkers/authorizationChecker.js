const { decode } = require("jsonwebtoken");
const {validateAccessToken} = require("../../utilities/jwtToken");

const authorize = (roles) =>  {
    return async (req, res, next) => {
    
        try {

            if(!req.headers["authorization"]) {
                return res.sendStatus(401);
            }
            
            const token = req.headers["authorization"].split(" ")[1];
            const decoded = await validateAccessToken(token);

            if(!decoded) {
                res.sendStatus(401);
                return;
            }

            for(let i = 0; i < roles.length; i++) {

                const found = decoded.roles.find(el => el === roles[i]);
                if(found) {
                    next();
                    break;
                }

            }
            return res.sendStatus(403);
        } catch(err) {
            console.log(err);
            res.sendStatus(400);
        }
    }
};

module.exports = authorize;