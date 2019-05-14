const router = require("express").Router();
const searchRoutes = require("./search");
const plantRoutes = require("./plants")

// Book routes
router.use("/search", searchRoutes);
router.use("/plants", plantRoutes);

module.exports = router;