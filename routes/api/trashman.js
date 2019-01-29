const router = require("express").Router();
const rubbishController = require("../../controllers/rubbishController");

// Matches with "/api/books"
// router.route("/")
//   .get(rubbishController.findAll)
//   .post(rubbishController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(rubbishController.findById)
//   .put(rubbishController.update)
//   .delete(rubbishController.remove);

module.exports = router;
