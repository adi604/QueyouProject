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
        const customerName = req.params.customerName;
        Customer.findOne({username: customerName}).then((c) => {
            if(c == null) {
                res.status(404).json({
                    message: `customer ${customerName} not found !`
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
        const customerName = req.params.customerName;
        Customer.findOneAndUpdate({username: customerName}, req.body).then((c) => {
            if (c != null) {
                res.status(200).json({
                    message: `customer ${customerName} updated !`
                })
            } else {
                res.status(404).json({
                    message: `${customerName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Delete customer by username. #####
    deleteCustomer : (req, res) => {
        const customerName = req.params.customerName;
        Customer.findOneAndDelete({username: customerName}).then((c) => {
            if (c != null) {
                res.status(200).json({
                    // * delete his appointments ? *
                    message: `customer ${customerName} deleted !`
                })
            } else {
                res.status(404).json({
                    message: `${customerName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    }
}