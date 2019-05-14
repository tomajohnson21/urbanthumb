const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  common_name: { type: String, required: true },
  scientific_name: { type: String, required: true },
  water: String,
  sunlight: String,
  toxicity: String,
  date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;