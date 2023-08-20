<!DOCTYPE html>
<html>

  <head>
    <meta name="viewport" content="width=device-width, intital-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <div class="card">
      <div class="search">
        <input type="text" placeholder="Enter City Name" spellcheck="false">
        <button><img src="https://imgur.com/LskTuKy.png"></button>
      </div>
      <div class="error">
        <p>Invalid Name</p>
      </div>
      <div class="weather">
        <img src="https://imgur.com/vFyUdL8.png" class="weather-icon">
        <h1 class="temp">24°f</h1>
        <h2 class="city">Palo Alto</h2>
        <div class="details">
          <div class="col">
            <img src="https://imgur.com/NqAUAW3.png">
            <div>
              <p class="humidity">61%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div class="col">
            <img src="https://imgur.com/fjnAhLw.png">
            <div>
              <p class="wind">2mph</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
      const apiKey = "6ec80d369461d47ded2d613fe10c87db";
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";

        } else {

          var data = await response.json();

          document.querySelector('.city').innerHTML = data.name;
          document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°f";
          document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
          document.querySelector('.wind').innerHTML = data.wind.speed + " mph";

          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://imgur.com/NbdbnAQ.png";
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://imgur.com/vFyUdL8.png";
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://imgur.com/kp8EZkf.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://imgur.com/y5NlIQO.png";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://imgur.com/iymnKDW.png";
          } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://imgur.com/0rcz4uJ.png";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";

        };
      };

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);

      });

    </script>
  </body>

</html>
