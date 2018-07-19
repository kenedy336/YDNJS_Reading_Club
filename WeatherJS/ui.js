class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.location.name;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = `${weather.current.temp_c} C (${weather.current.temp_f} F)`;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
    this.feelslike.textContent = `Feel Like: ${weather.current.feelslike_c} C (${weather.current.feelslike_f} F)`;
    this.dewpoint.textContent = `Local Time: ${weather.location.localtime}`;
    this.wind.textContent = `Wind: ${weather.current.wind_kph}M/H ${weather.current.wind_degree}C°  ${weather.current.wind_dir  }`;
  }

}