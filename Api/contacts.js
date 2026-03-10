const mongoose = require('mongoose');
const Contact = require('../models/contacts');
const route = require('express').Router();

route.post('/', async (req, res) => {
    const {firstName, lastName, email, favoriteColor, birthday, date} = req.body;

    let contact = {};

    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contact.favoriteColor = favoriteColor;
    contact.birthday = birthday;
    contact.date = date;

    let contactModel = new Contact(contact);
    await contactModel.save();

    res.json(contactModel);
});

module.exports = route;