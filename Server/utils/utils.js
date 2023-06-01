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
    
    verifyAuthorization: async (req, res, next) => {
        const token = req.headers.authorization;
        if (token) {
            const decodedToken = jwt.verify(token, secret);
            if (decodedToken) {
                const currentTimestamp = Math.floor(Date.now() / 1000); // Get the current Unix timestamp
                if (decodedToken.exp && decodedToken.exp >= currentTimestamp) {
                    // Token is valid and not expired
                    req.username = decodedToken.username;
                    next();
                } else {
                    // Token is expired
                    res.status(401).json({ message: 'Token expired' });
                }
            } else {
                // Invalid token
                res.status(401).json({ message: 'Invalid token' });
            }
        } else {
            // No token provided
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
