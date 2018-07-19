const ui = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
const weather = new Weather(weatherLocation);

// navigator.geolocation.getCurrentPosition(position => {
//   weather.getCity(position.coords.latitude, position.coords.longitude)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));;
// });

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  $('#locModal').modal('hide');
});



function getWeather() {
  weather.getWeather()
    .then(data => {
      ui.paint(data);
    })
    .catch(err => console.log(err));
}