'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  // declare private instance properties
  #map;
  #mapEvent;

  constructor() {
    this._getPosition(); //call here so it is called when new App is instantiated outside of class
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    /*
    ! S15 | EP 233: Using Geolocation API

    Get current exact co-ordinates using the navigator object.
    - Call navigator.geolocation.getCurrentPosition and pass in two callback functions
    - one for success, one for error
    */
    if(navigator.geolocation)
      // resolve instance properties being undefined by binding 'this' on function to be able to pass in 'this' object
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
        function(){
          alert('Could not get position')
        })
  }

  _loadMap(position){
    /*
      S15 | EP 234: Display leaflet map on screen
        'map' here is the element in which to display the leaflet map view
        'L' is the namespace for leaflet's methods
     */

      const {latitude, longitude} = position.coords;
      this.#map = L.map('map').setView([latitude, longitude], 13);

      console.log(this) //confirm this.bind for map and App private instance properties

      // tile layer method uses openStreetMap to populate its tiles.
      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.#map);

      this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE){
    // S15 | EP 236: Render workout input form
      this.#mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus(); //allows you to immediately start typing in field
  }

  _toggleElevationField(){
    // S15 | EP 236: Toggle elevation and cadence based on inputType
      inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e){
      e.preventDefault()
      console.log(this);

      // clear input fields
      inputDistance.value = '';
      inputDuration.value = '';
      inputCadence.value = '';

      // S15 | EP 235: Display a styled marker on the map
      const { lat, lng } = this.#mapEvent.latlng;
      L.marker([lat, lng])
        .addTo(this.#map)
        .bindPopup(L.popup({maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className:'running-popup'}))
        .setPopupContent('Workout')
        .openPopup();
  };

}

const app = new App();






