const contactController = require('../controllers/contact');
const router = require('express').Router();
const contactValdator = require("../middleware/validator");

router.use('/', require('./swagger'));

// Get all contacts
router.get('/', 
    // swagger.tag=['Hello Contacts]
    contactController.getContacts);
router.get('/:id', contactController.getSingleContact);
router.put('/:id', contactValdator, contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;