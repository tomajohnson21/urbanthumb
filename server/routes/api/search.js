const router = require("express").Router();


app.get("/api/search/:plant", (req, res) =>{

    let url = "http://trefle.io/api/plants?token=bHVzQkE1UkJPTGFHVGVQUXdmL1JuQT09&common_name=" + req.params.plant +"&page_size=5";

    axios.get(url).then(results => {
        
        let resArr = results.data
        //Capitalize first letter of common name for each plant
        resArr.forEach(plant => {
          tempArr = plant.common_name.split("");
          tempArr[0] = tempArr[0].toUpperCase();
          newCommonName = tempArr.join("");
          plant.common_name = newCommonName;
        })

        res.json(resArr);
    }).catch(err => res.status(422).json(err));
})