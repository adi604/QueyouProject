const jwt = require('jsonwebtoken');

const secret = 'MySecret'

module.exports = {
    
    // This function generates a JWT token for a given username and password 
    generateToken: (username, password) => {
        const token = jwt.sign({ username: username, password: password }, secret, { expiresIn: '1h' });
        return token;
    }
}
