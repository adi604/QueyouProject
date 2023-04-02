const Customer = require('../models/customer');

module.exports = {
    // ##### Get all the customers objects. #####
    getAllCustomers : (req, res) => {
        Customer.find().then((customers) => {
            res.status(200).json(customers);
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Get customer by username. #####
    getCustomer : (req, res) => {
        const customerUsername = req.params.customerUsername;
        Customer.findOne({username: customerUsername}).then((c) => {
            if(c == null) {
                res.status(404).json({
                    message: `customer ${customerUsername} not found !`
                });
            }
            else {
                res.status(200).json(c);
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Update customer by username. #####
    updateCustomer : (req, res) => {
        const customerUsername = req.params.customerUsername;
        Customer.findOneAndUpdate({username: customerUsername}, req.body).then((c) => {
            if (c != null) {
                res.status(200).json({
                    message: `customer ${customerUsername} updated !`
                })
            } else {
                res.status(404).json({
                    message: `${customerUsername} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Delete customer by username. #####
    deleteCustomer : (req, res) => {
        const customerUsername = req.params.customerUsername;
        Customer.findOneAndDelete({username: customerUsername}).then((c) => {
            if (c != null) {
                res.status(200).json({
                    // * delete his appointments ? *
                    message: `customer ${customerUsername} deleted !`
                })
            } else {
                res.status(404).json({
                    message: `${customerUsername} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    }
}