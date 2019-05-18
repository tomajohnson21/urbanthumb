const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  common_name: { type: String, required: true },
  scientific_name: String,
  water: String,
  shade_tolerance: String,
  growth_period: String,
  toxicity: String,
  image_url: String,
  date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;