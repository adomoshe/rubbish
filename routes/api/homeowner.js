const router = require('express').Router();
const ownerController = require('../../controllers/ownerController');

// Matches with "/api/homeowner"
router
  .route('/')
  .get(ownerController.findAll)
  .post(ownerController.create);

// Matches with "/api/homeowner/:id"
router
  .route('/:id')
  .get(ownerController.findById)
  .put(ownerController.update)
  .delete(ownerController.remove);

module.exports = router;
