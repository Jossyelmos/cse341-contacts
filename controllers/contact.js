const Contact = require('../models/contacts');

const getContacts = async (req, res) => {
  // swagger.tag=[Contacts]
    try {
        const contacts = await Contact.find();
        res.json(contacts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};


const getSingleContact = async (req, res) => {
  // swagger.tag=['Hello Contacts]
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateContact = async (req, res) => {
  // swagger.tag=['Hello Contacts]
  const {firstName, lastName, email, favoriteColor, birthday, date} = req.body;

  let contact = {};

  if (firstName) contact.firstName = firstName;
  if (lastName) contact.lastName = lastName;
  if (email) contact.email = email;
  if (favoriteColor) contact.favoriteColor = favoriteColor;
  if (birthday) contact.birthday = birthday;
  if (date) contact.date = date;
  try {
    let contactId = await Contact.findById(req.params.id);

    if (!contactId) return res.status(404).json({ msg: "Contact not found" });

    contactId = await Contact.findByIdAndUpdate(req.params.id, { $set: contact }, { new: true });

    res.json(contactId);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
};


const deleteContact = async (req, res) => {
  // swagger.tag=['Hello Contacts]
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ msg: "Contact not found..."});

    res.json({ msg: 'Contact Deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}


module.exports = {
    getContacts,
    getSingleContact,
    updateContact,
    deleteContact
};