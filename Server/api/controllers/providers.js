const { mapProvider } = require('../../utils/utils');
const Provider = require('../models/provider');

module.exports = {
    // ##### Get all the providers objects. #####
    getAllProviders : (req, res) => {
        Provider.find().then((providers) => {
            res.status(200).json(providers.map(provider => mapProvider(provider)));
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Get provider by username. #####
    getProvider : (req, res) => {
        const providerUserName = req.params.providerUserName;
        Provider.findOne({username: providerUserName}).then((p) => {
            if(p == null) {
                res.status(404).json({
                    message: `provider ${providerUserName} not found !`
                });
            }
            else {
                res.status(200).json(p);
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Update provider by username. #####
    updateProvider : (req, res) => {
        const providerUserName = req.params.providerUserName;
        Provider.findOneAndUpdate({username: providerUserName}, req.body).then((p) => {
            if (p != null) {
                res.status(200).json({
                    message: `provider ${providerUserName} updated !`
                })
            } else {
                res.status(404).json({
                    message: `${providerUserName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Delete provider by username. #####
    deleteProvider : (req, res) => {
        const providerUserName = req.params.providerUserName;
        Provider.findOneAndDelete({username: providerUserName}).then((p) => {
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
            res.status(500).json({error});
        });
    }
}