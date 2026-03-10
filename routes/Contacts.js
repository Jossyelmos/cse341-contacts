const contactController = require('../controllers/contact');
const router = require('express').Router();

router.use('/', require('./swagger'));

// Get all contacts
router.get('/', 
    // swagger.tag=['Hello Contacts]
    contactController.getContacts);
router.get('/:id', contactController.getSingleContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;