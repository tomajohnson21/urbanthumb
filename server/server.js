const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  
app.use(allowCrossDomain);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/search/:plant", (req, res) =>{

    let url = "http://trefle.io/api/plants?token=bHVzQkE1UkJPTGFHVGVQUXdmL1JuQT09&q=" + req.params.plant;

    axios.get(url).then(results => {
        
        let dataArr = results.data.filter(plant => plant.complete_data)
        //console.log(respons)
        //res.json(responseArr);
        
        let responseArr = [];
        //console.log(preciseURL);
        dataArr.forEach(plant => {
          
          let specificURL = plant.link + "?token=bHVzQkE1UkJPTGFHVGVQUXdmL1JuQT09";
          axios.get(specificURL).then(results => {
          
              results
              responseArr.push(results.data.main_species);
      
          }).catch(err => res.status(422).json(err));
        })

        res.json(responseArr);
    }).catch(err => res.status(422).json(err));
})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
