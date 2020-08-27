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

    search: (req, res, next) => {
      let searchresult = req.body.city;
      let req1 =  `http://api.openweathermap.org/data/2.5/weather?q=${searchresult}&units=metric&appid=19a11427fbdef134247f7b46f2055963`
      let req2 = `http://api.openweathermap.org/data/2.5/group?id=2332453,2352778,5128581,4140963,2643743&units=metric&appid=19a11427fbdef134247f7b46f2055963`

      const request1 = axios.get(req1);
      const request2 = axios.get(req2);

      axios.all([request1, request2])
      .then(axios.spread((...responses) => {
        const re1 = responses[0]
        const re2 = responses[1]
        res.locals.data = re2.data.list;
        if (re1.data){
          res.locals.lagos = re1.data
        }else{
          res.locals.lagos = undefined
        }
        next()
      })) .catch(error => {
        
      });
    },
    mapView: (req, res) => {
      res.render("map");
    },
};