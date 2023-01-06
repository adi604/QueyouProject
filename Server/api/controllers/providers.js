const Provider = require('../models/provider');

module.exports = {
    // ##### Get all the providers objects. #####
    getAllProviders : (req, res) => {
        Provider.find().then((providers) => {
            res.status(200).json(providers);
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Get provider by name. #####
    getProvider : (req, res) => {
        const providerName = req.params.providerName;
        Provider.findOne({name: providerName}).then((p) => {
            if(p == null) {
                res.status(404).json({
                    message: `provider ${providerName} not found !`
                });
            }
            else {
                res.status(200).json(p);
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Update provider by name. #####
    updateProvider : (req, res) => {
        const providerName = req.params.providerName;
        Provider.findOneAndUpdate({name: providerName}, req.body).then((p) => {
            if (p != null) {
                res.status(200).json({
                    message: `provider ${providerName} updated !`
                })
            } else {
                res.status(404).json({
                    message: `${providerName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Delete provider by name. #####
    deleteProvider : (req, res) => {
        const providerName = req.params.providerName;
        Provider.findOneAndDelete({name: providerName}).then((p) => {
            if (p != null) {
                res.status(200).json({
                    // * delete his appointments ? *
                    message: `provider ${providerName} deleted !`
                })
            } else {
                res.status(404).json({
                    message: `${providerName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    }
}