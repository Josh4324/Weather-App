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

const displayCities = () => {
  fetch(
    `http://api.openweathermap.org/data/2.5/group?id=2332453,2352778,5128581,4140963,2643743&units=metric&appid=19a11427fbdef134247f7b46f2055963`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data){
          return data
      }
    });
};


module.exports = {
  displayWeather,
  displayCities,
};
