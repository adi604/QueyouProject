const { mapProvider } = require('../../utils/utils');
const Provider = require('../models/provider');

module.exports = {
    // ##### Get all the providers objects. #####
    getAllProviders: (req, res) => {
        Provider.find().then((providers) => {
            //res.status(200).json(providers.map(provider => mapProvider(provider)));
            res.status(200).json(providers);
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Get provider by username. #####
    getProvider: (req, res) => {
        const providerUserName = req.params.providerUserName;
        console.log(providerUserName)
        Provider.findOne({ username: providerUserName }).then((p) => {
            if (p == null) {
                res.status(404).json({
                    message: `provider ${providerUserName} not found !`
                });
            }
            else {
                res.status(200).json(p);
            }
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Update provider by username. #####
    updateProvider: (req, res) => {
        const providerUserName = req.username;
        Provider.findOneAndUpdate({ username: providerUserName }, req.body.details).then((p) => {
            if (p != null) {
                if (req.body.offDate != "") {
                    offDates = p.disabledDates
                    offDates.push(req.body.offDate)
                    Provider.findOneAndUpdate({ username: providerUserName }, {disabledDates: offDates}).then((p) => {
                        if (p != null) {
                            res.status(200).json({
                                message: `provider ${providerUserName} updated !`
                            })
                        } else {
                            res.status(404).json({
                                message: `${providerUserName} - Update Failed !`
                            })
                        }
                    })

                } else {
                    res.status(200).json({
                        message: `provider ${providerUserName} updated !`
                    })
                }
            } else {
                res.status(404).json({
                    message: `${providerUserName} - Update Failed !`
                })
            }
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Delete provider by username. #####
    deleteProvider: (req, res) => {
        const providerUserName = req.username;
        Provider.findOneAndDelete({ username: providerUserName }).then((p) => {
            if (p != null) {
                res.status(200).json({
                    // * delete his appointments ? *
                    message: `provider ${providerUserName} deleted !`
                })
            } else {
                res.status(404).json({
                    message: `${providerUserName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Get all providers filtered and ordered from closest to highest. #####
    getFilteredProviders: async (req, res) => {
        try {
            
            const { name, category, lat, lng } = req.query;
            const query = {};

            if (name) {
                query.name = { $regex: name, $options: 'i' };
            }

            if (category) {
                query.category = category;
            }

            if (lat && lng) {
                query.location = {
                    $near:
                    {
                        $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] }
                    }
                };
            }

            const providers = await Provider.find(query)

            res.status(200).json(providers);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Cannot filter providers' });
        }
    }

    // ##### Get all the providers objects. #####
}