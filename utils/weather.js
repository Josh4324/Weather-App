const axios = require("axios");
const fetch = require("node-fetch");
const { response } = require("express");

const displayWeather = (location) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=19a11427fbdef134247f7b46f2055963`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};




module.exports = {
  displayWeather,
};
