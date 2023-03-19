const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Customer = require('../models/customer');
const Provider = require('../models/provider');
const utils = require("../../utils/utils")

module.exports = {
    // Sign up - create new user of customer.
    signUpCustomers : (req, res) => {
        const {username, password, mail} = req.body
        Customer.findOne({username: username}).then((c) => {
            if(c != null) {
                return res.status(409).json({
                    message: `${username} already exist !`
                });
            }
            bcrypt.hash(password, Number(process.env.SALT_ROUNDS), (err, hash) => {
                if(err) {
                    return res.status(500).json({err});
                }
                const customer = new Customer({
                    _id: new mongoose.Types.ObjectId(),
                    username: username,
                    password: hash,
                    mail: mail
                });
                customer.save().then(() => {
                    res.status(200).json({
                        message: `SignUp - ${customer.username} created !`
                    });
                });
            });
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // Login - get user of customer.
    loginCustomers : (req, res) => {
        const {username, password} = req.body
        Customer.findOne({username: username}).then((c) => {
            if(c == null) {
                return res.status(404).json({
                    message: "Authentication failed !"
                });
            }
            bcrypt.compare(password, c.password, (error, result) => {
                if(error) {
                    return res.status(500).json({
                        message: "Authentication failed !"
                    });
                }
                if(result) {
                    const token = utils.generateToken(c.usernamem, c.password);
                    const response = {
                        user: c,
                        token: token
                    };
                    return res.status(200).json(response);
                }
                res.status(401).json({
                    message: "Authentication failed !"
                });
            });
        }).catch(error => {
            res.status(500).json({error});
        });        
    },
    // Sign up - create new user of provider.
    signUpProviders : (req, res) => {
        const {name, password, address, mail, description} = req.body
        Provider.findOne({name: name}).then((p) => {
            if(p != null) {
                return res.status(409).json({
                    message: `${name} already exist !`
                });
            }
            bcrypt.hash(password, Number(process.env.SALT_ROUNDS), (err, hash) => {
                if(err) {
                    return res.status(500).json({err});
                }
                const provider = new Provider({
                    _id: new mongoose.Types.ObjectId(),
                    name: name,
                    password: hash,
                    address: address,
                    mail: mail,
                    description: description
                });
                provider.save().then(() => {
                    res.status(200).json({
                        message: `SignUp - ${provider.name} created !`
                    });
                });
            });
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // Login - get user of provider.
    loginProviders : (req, res) => {
        const {name, password} = req.body
        Provider.findOne({name: name}).then((p) => {
            if(p == null) {
                return res.status(404).json({
                    message: "Authentication failed !"
                });
            }
            bcrypt.compare(password, p.password, (error, result) => {
                if(error) {
                    return res.status(500).json({
                        message: "Authentication failed !"
                    });
                }
                if(result) {
                    return res.status(200).json(p);
                }
                res.status(401).json({
                    message: "Authentication failed !"
                });
            });
        }).catch(error => {
            res.status(500).json({error});
        });        
    }
}