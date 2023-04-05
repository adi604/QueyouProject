const jwt = require('jsonwebtoken');

const secret = 'gdfgdfsdfq367506yjihkrekgJGIKRI23JGrjretjrFJ'

module.exports = {
    
    // generates a JWT token for a given username and password 
    generateToken: (username) => {
        const token = jwt.sign({ username: username }, secret, { expiresIn: '1h' });
        return token;
    },

    // verifies a JWT token and returns the decoded token
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

    mapProvider(provider) { 
        return {
            _id: provider._id,
            name: provider.name,
            address: provider.address,
            city: provider.city,
            mail: provider.mail,
            phoneNumber: provider.phoneNumber,
            description: provider.description
        }
    }

}
