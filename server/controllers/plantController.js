const db = require("../models");
const axios = require("axios");

// Defining methods for the plantsController
module.exports = {
  
  findAll: function(req, res) {
    db.Plant
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findById: function(req, res) {
    db.Plant
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log(req.body);
    db.Plant
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createBySearch: function(req, res) {
    let url = "http://trefle.io/api/plants/" + req.params.trefl_id +"?token=bHVzQkE1UkJPTGFHVGVQUXdmL1JuQT09"
    
    axios(url).then(results =>{

        plantData = results.data.main_species;

        tempArr = plantData.common_name.split("");
        tempArr[0] = tempArr[0].toUpperCase();
        newCommonName = tempArr.join("");

        let newPlant = {
          common_name: newCommonName,
          scientific_name: plantData.scientific_name,
          toxicity: plantData.specifications.toxicity,
          water: plantData.growth.moisture_use,
          shade_tolerance: plantData.growth.shade_tolerance,
          growth_period: plantData.specifications.growth_period
        };


        db.Plant
          .create(newPlant)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    })
  },

  update: function(req, res) {
    db.Plant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Plant
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};