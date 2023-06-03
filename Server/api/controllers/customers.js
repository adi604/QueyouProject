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
        const customerUserName = req.username;
        Customer.findOne({username: customerUserName}).then((c) => {
            if(c == null) {
                res.status(404).json({
                    message: `customer ${customerUserName} not found !`
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
        const customerUserName = req.username;
        console.log(customerUserName)
        Customer.findOneAndUpdate({username: customerUserName}, req.body).then((c) => {
            if (c != null) {
                res.status(200).json({
                    message: `customer ${customerUserName} updated !`
                })
            } else {
                res.status(404).json({
                    message: `${customerUserName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Delete customer by username. #####
    deleteCustomer : (req, res) => {
        const customerUserName = req.username;
        Customer.findOneAndDelete({username: customerUserName}).then((c) => {
            if (c != null) {
                res.status(200).json({
                    // * delete his appointments ? *
                    message: `customer ${customerUserName} deleted !`
                })
            } else {
                res.status(404).json({
                    message: `${customerUserName} not found !`
                })
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    }
}