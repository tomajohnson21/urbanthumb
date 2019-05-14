const router = require("express").Router();
const searchRoutes = require("./search");
const savedPlantRoutes = require("")

// Book routes
router.use("/search", searchRoutes);
router.use("/saved", savedPlantRoutes);

module.exports = router;