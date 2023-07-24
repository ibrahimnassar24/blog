const jwt = require("jsonwebtoken");
const { accessKey, refreshKey } = require("../config/jwtToken");


const generateAccessToken = (obj) => {

    return new Promise((resolved, rejected) => {
        jwt.sign(
            obj,
            accessKey,
            { expiresIn: 60 * 3 },
            (err, token) => {
                if (err) { rejected(err) }
                resolved(token);
            })
    });
};

const generateRefreshToken = (obj) => {
    return new Promise((resolved, rejected) => {
        jwt.sign(
            obj,
            refreshKey,
            { expiresIn: 60 * 60 },
            (err, token) => {
                if (err) { rejected(err) }
                resolved(token);
            })
    });
};

const validateAccessToken = (token) => {

    return new Promise((resolved, rejected) => {
        jwt.verify(
            token,
            accessKey,
            (err, obj) => {
                if (err) { resolved(false) }
                resolved(obj);
            })
    });
};

const validateRefreshToken = (token) => {
    return new Promise((resolved, rejected) => {
        jwt.verify(
            token,
            refreshKey,
            (err, obj) => {
                if (err) { resolved(false) }
                resolved(obj);
            })
    })
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    validateAccessToken,
    validateRefreshToken
};

