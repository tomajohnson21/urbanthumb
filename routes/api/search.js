const router = require("express").Router();
const searchController = require("../../controllers/searchController");


router.route("/:plant")
  .get(searchController.searchForPlant)

module.exports = router;