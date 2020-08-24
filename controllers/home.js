const axios = require("axios");

exports.home = (req, res) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/group?id=2332453,2352778,5128581,4140963,2643743&units=metric&appid=19a11427fbdef134247f7b46f2055963`
    )
    .then((response) => {
        console.log(response.data.list[0])
      res.render("index", {
        data : response.data.list,
        lagos: response.data.list[0]
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
