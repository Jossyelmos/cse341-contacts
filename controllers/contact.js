const Contact = require('../models/contacts');

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};


const getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.query.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    getContacts,
    getSingleContact
};