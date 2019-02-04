const router = require('express').Router();
const homeowner = require('./homeowner');
const trashman = require('./trashman');

// Homeowner routes
router.use('/homeowner', homeowner);

// Trashman routes
router.use('/trashman', trashman);

module.exports = router;
