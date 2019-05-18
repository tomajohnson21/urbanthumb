const router = require("express").Router();
const plantController = require("../../controllers/plantController");
const parser = require("../../config/cloudinary");

router.route("/")
  .get(plantController.findAll)
  .post(plantController.create)

router.route("/:trefl_id")
  .post(plantController.createBySearch);

  // Matches with "/api/books/:id"
router.route("/:id")
  .get(plantController.findById)
  .put(parser.single("image"), plantController.update)
  .delete(plantController.remove);

module.exports = router;