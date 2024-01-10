
var find = document.getElementById('find');
var day1 = document.getElementById('day1');
var day2 = document.getElementById('day2');
var day3 = document.getElementById('day3');


(function () {
  getData('cairo')
})();


find.addEventListener('input', function () {
  getData(find.value)
})

async function getData(city) {
  var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=647fdb804cb6461a9a2123428232302&q=${city}&days=3`)
  var data = await response.json();
  display(data);
}


function display(data) {

  day1.innerHTML = ` <div class="header p-2 rounded-start d-flex justify-content-between"
  style="background-color: #2D303D; color: rgb(191, 193, 200);"><span>Thursday</span><span>${data.forecast.forecastday[0].date}</span>
  </div>
  <div class="info d-flex flex-column gap-4  p-2" style="background-color: #323544;">
  <span style="color: rgb(191, 193, 200); font-size: 18px;">${data.location.name}</span>
  <div class="d-flex justify-content-around">
    <h1 style="font-size:90px; font-weight: 700px; color: white;">${data.current.temp_c}C</h1>
    <img src="${data.forecast.forecastday[0].day.condition.icon}" alt="">
  </div>
  <span style="color: #009AD8;">${data.current.condition.text}</span>
  <div class="d-flex justify-content-start gap-3">
    <div> <img src="img/icon-umberella.png" alt="">
      <span style="color: rgb(191, 193, 200);">${data.current.cloud}%</span>
    </div>
    <div d-flex>
    <img src="img/icon-wind.png" alt="">
      <span style="color: rgb(191, 193, 200);">${data.current.wind_kph}km/h</span>
    </div>
    <div>
    <img src="img/icon-compass.png" alt="">
      <span style="color: rgb(191, 193, 200);">${data.current.wind_dir}</span>
    </div>
  </div>
  </div>
`

  day2.innerHTML = `
<div class="header p-2" style="background-color: #1E202B; color: rgb(191, 193, 200);">Saturday</div>
<div class="info d-flex flex-column gap-3 p-5 justify-content-center" style="background-color: #262936;">
  <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="">
  <h5 style="color: white;">${data.forecast.forecastday[1].day.maxtemp_c}</h5>
  <span style="color: rgb(191, 193, 200);">${data.forecast.forecastday[1].day.mintemp_c}</span>
  <span style="color: #009AD8;">${data.forecast.forecastday[1].day.condition.text}</span>
</div>
`

  day3.innerHTML = `
<div class="header p-2" style="background-color: #1E202B; color: rgb(191, 193, 200);">friday</div>
<div class="info d-flex flex-column gap-3 p-5 justify-content-center" style="background-color: #262936;">
  <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="">
  <h5 style="color: white;">${data.forecast.forecastday[2].day.maxtemp_c}</h5>
  <span style="color: rgb(191, 193, 200);">${data.forecast.forecastday[2].day.mintemp_c}</span>
  <span style="color: #009AD8;">${data.forecast.forecastday[2].day.condition.text}</span>
</div>
`

}

