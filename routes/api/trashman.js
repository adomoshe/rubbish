const router = require('express').Router();
const trashmanController = require('../../controllers/trashmanController');

// Matches with "/api/trashman"
router
  .route('/')
  .get(trashmanController.findAll)
  .post(trashmanController.create);

// Matches with "/api/trashman/:id"
router
  .route('/:id')
  .get(trashmanController.findById)
  .put(trashmanController.update)
  .delete(trashmanController.remove);

module.exports = router;
