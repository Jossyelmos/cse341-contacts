const contactController = require('../controllers/contact');
const router = require('express').Router();

// Get all contacts
router.get('/', contactController.getContacts);
router.get('/single', contactController.getSingleContact);

module.exports = router;