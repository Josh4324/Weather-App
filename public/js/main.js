let city = document.querySelector(".city");
let main = document.querySelector(".class");
let anim = document.querySelector(".sk-chase");
let notfound = document.querySelector(".notfound");
let mapd = document.querySelector(".mapd");
let detail = document.querySelector(".detail")

city.addEventListener("keyup", (evt) => {
    if (evt.keyCode === 13) {
        let searchresult = evt.target.value
        evt.target.value = "";
        main.classList.add("none")
        anim.classList.remove("none")
        notfound.classList.add("none");
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchresult}&units=metric&appid=19a11427fbdef134247f7b46f2055963`)
            .then((response) => {
                anim.classList.add("none")
                document.querySelector(".img").src = "https://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x" + ".png";
                document.querySelector(".temp-desc").textContent = response.data.weather[0].description;
                document.querySelector(".lag").textContent = response.data.name
                document.querySelector(".temp").innerHTML = response.data.main.temp + "<sup>&#176</sup>"
                document.querySelector(".tb").innerHTML = response.data.main.feels_like + "<sup>&#8451</sup>"
                main.classList.remove("none");
            }).catch((err) => {
                anim.classList.add("none")
                notfound.classList.remove("none")
            })
    }
});


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaDQzMjQiLCJhIjoiY2tiemoyYmN2MGJ6ODJ2bXJmM25pbjN1dSJ9.veWU3GwQOzzf0OSAA_TRNg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [3.0, 6.5], // starting position
    zoom: 10 // starting zoom
});

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

map.on("click", (e) => {
    mapd.classList.add("none");
    anim.classList.remove("none");
    detail.classList.add("none");
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&units=metric&appid=19a11427fbdef134247f7b46f2055963`)
        .then((result) => result.json())
        .then((data) => {
            anim.classList.add("none");
            mapd.classList.remove("none");
            document.querySelector('.detail').classList.add("none")
            document.querySelector('.img3').src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x" + ".png";
            document.querySelector('.place').textContent = data.name;
            document.querySelector('.temp1').innerHTML = data.main.temp + "<sup>&#8451</sup>";
            document.querySelector('.desc1').textContent = data.weather[0].description;
            document.querySelector('.tb1').innerHTML = "Feels like " + data.main.feels_like + "<sup>&#8451</sup>"
        }).catch((err) => {
            console.log(err)
        })
})