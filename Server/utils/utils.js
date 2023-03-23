const jwt = require('jsonwebtoken');

const secret = 'gdfgdfsdfq367506yjihkrekgJGIKRI23JGrjretjrFJ'

module.exports = {
    
    // This function generates a JWT token for a given username and password 
    generateToken: (username, password) => {
        const token = jwt.sign({ username: username, password: password }, secret, { expiresIn: '1h' });
        return token;
    },

    // This function verifies a JWT token and returns the decoded token
    verifyToken: (token) => {
        const decodedToken = jwt.verify(token, secret);
        return decodedToken;
    },
    
    verifyAuthorization: (req, res, next) => {
        const token = req.headers.authorization;
        if(token) {
            const decodedToken = utils.verifyToken(token);
            if(decodedToken) {
                req.user = decodedToken;
                next();
            } else {
                res.status(401).json({ message: 'Invalid token' });
            }
        } else {
            res.status(401).json({ message: 'No token' });
        }
    },

}
