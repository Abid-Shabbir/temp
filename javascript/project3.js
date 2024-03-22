const apikey = "6b635ac03be38ca515bb21f10b6f7308";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var srchbox = document.querySelector("#search input")
var srchbtn = document.querySelector("#search button")
var weatherIcon = document.querySelector(".weather-icon")
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/assetjs/images/pic6.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/assetjs/images/pic7.png"

    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/assetjs/images/pic8.png";

    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/assetjs/images/pic1.png";

    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/assetjs/images/pic6.png";

    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "/assetjs/images/pic5.png";

    }
}
srchbtn.addEventListener("click", () => {
    checkweather(srchbox.value)
})


var searchbox = document.querySelector("#sarchbox")
searchbox.addEventListener("abc",functon(
    backgroud = "lignt-green"
))


