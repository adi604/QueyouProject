const jwt = require('jsonwebtoken');

const secret = 'gdfgdfsdfq367506yjihkrekgJGIKRI23JGrjretjrFJ'

// Calculate the distance between two points using the Haversine formula
function getDistance(p1, p2) {
    const earthRadius = 6371; // Earth's radius in kilometers

    const degToRad = (deg) => (deg * Math.PI) / 180;
    const deltaLat = degToRad(p2.latitude - p1.latitude);
    const deltaLng = degToRad(p2.longitude - p1.longitude);

    const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(degToRad(p1.latitude)) *
        Math.cos(degToRad(p2.latitude)) *
        Math.sin(deltaLng / 2) *
        Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
}

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
    },

    sortByDistance(currentLocation, providers) {
        

        // Calculate the distance between object1 and each object2
        const distances = providers.map((provider) => {
            const porivderLocation = {
                latitude: provider.location.coordinates[1],
                longitude: provider.location.coordinates[0],
            }
            const distance = getDistance(
                currentLocation,
                porivderLocation
            );
            return { provider, distance };
        });

        // Sort the distances in ascending order
        distances.sort((a, b) => a.distance - b.distance);
        // Extract the sorted point from the distances
        const sortedPointsArray = distances.map((item) => item.provider);

        return sortedPointsArray;
    }

}
