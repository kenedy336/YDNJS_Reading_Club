class Weather {
  constructor(city) {
    this.api_key = 'a778ba20e39c49cdb7d195452181707';
    this.google_api_key = 'AIzaSyBBT9VuLSvwB4a_4tCH4NNl5nokFn03rFQ'
    this.api_google = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?json'
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.api_key}&q=${this.city}`);

    const resData = await response.json();

    return resData;
  }

  // async getCity(lat, lon){
  //   const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lon}, ${lat}&key=${this.google_api_key}`);
  //   console.log(response.json())
  //   const resCity = await response.json();

  //   return resCity;
  // } 

  changeLocation(city) {
    this.city = city;
  }

}