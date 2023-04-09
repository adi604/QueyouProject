const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Customer = require('../models/customer');
const Provider = require('../models/provider');
const utils = require("../../utils/utils")

module.exports = {
    // Sign up - create new user of customer.
    signUpCustomers : (req, res) => {
        const {username, firstName, lastName, password, mail, phoneNumber} = req.body
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
                    firstName: firstName,
                    lastName: lastName,
                    password: hash,
                    mail: mail,
                    phoneNumber: phoneNumber
                });
                customer.save().then(() => {
                    res.status(200).json({
                        token: utils.generateToken(username, password),
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
                    message: "Authentication failed, username or passwaord incorrect."
                });
            }
            bcrypt.compare(password, c.password, (error, result) => {
                if(error) {
                    return res.status(500).json({
                        message: "Authentication failed, username or passwaord incorrect."
                    });
                }
                if(result) {
                    const token = utils.generateToken(username, password);
                    const response = {
                        user: c,
                        token: token
                    };
                    return res.status(200).json(response);
                }
                res.status(401).json({
                    message: "Authentication failed."
                });
            });
        }).catch(error => {
            res.status(500).json({error});
        });        
    },
    // Sign up - create new user of provider.
    signUpProviders : (req, res) => {
        // Add members : maxDate, durationMeeting, openTime, closeTime, disabledDays, disabledDates.
        // Or change the insert of this members to another screen and function.
        const {username, name, password, address, city, mail, phoneNumber, description} = req.body
        Provider.findOne({username: username}).then((p) => {
            if(p != null) {
                return res.status(409).json({
                    message: `${username} already exist !`
                });
            }
            bcrypt.hash(password, Number(process.env.SALT_ROUNDS), (err, hash) => {
                if(err) {
                    return res.status(500).json({err});
                }
                const provider = new Provider({
                    _id: new mongoose.Types.ObjectId(),
                    username: username,
                    name: name,
                    password: hash,
                    address: address,
                    city: city,
                    mail: mail,
                    phoneNumber: phoneNumber,
                    description: description,
                });
                provider.save().then(() => {
                    res.status(200).json({
                        message: `SignUp - ${provider.username} created !`
                    });
                });
            });
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // Login - get user of provider.
    loginProviders : (req, res) => {
        const {username, password} = req.body
        Provider.findOne({username: username}).then((p) => {
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
                    const token = utils.generateToken(username, password);
                    const response = {
                        user: p,
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
    }
}