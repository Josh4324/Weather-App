const axios = require("axios");

module.exports = {
    index: (req, res, next) => {
      axios
      .get(
        `http://api.openweathermap.org/data/2.5/group?id=2332453,2352778,5128581,4140963,2643743&units=metric&appid=19a11427fbdef134247f7b46f2055963`
      )
        .then(response => {
          res.locals.data = response.data.list;
          res.locals.lagos = response.data.list[0]
          next();
        })
        .catch(error => {
          console.log(`Error fetching data: ${error.message}`);
          next();
        });
    },

    indexView: (req, res) => {
      res.render("index");
    },
    mapView: (req, res) => {
      res.render("map");
    },
};