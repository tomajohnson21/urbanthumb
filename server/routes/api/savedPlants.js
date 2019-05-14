const router = require("express").Router();
const plantController = require("../../controllers/plantController");

router.route("/")
  .get(plantController.findAll)

router.route("/:trefl_id")
  .post(plantController.createBySearch);
// Matches with "/api/books/:id"
router.route("/:id")
  .get(plantController.findById)
  .put(plantController.update)
  .delete(plantController.remove);

module.exports = router;