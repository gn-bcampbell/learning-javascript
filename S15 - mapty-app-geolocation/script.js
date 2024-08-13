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

class Workout{
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration); //initialise this. keyword for parent class
    this.cadence = cadence;
    this.type = 'running';
    this.calcPace(); //immediately calc pace in constructor
  }

  calcPace(){
    // mins per km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration); //initialise this. keyword for parent class
    this.elevationGain = elevationGain;
    this.type = 'cycling';
    this.calcSpeed();
  }

  calcSpeed(){
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178)
// const cycling1 = new Cycling([39, -12], 27, 95, 523)
// console.log(run1, cycling1)

/////////////////////////////////
// Application Architecture
class App {
  // declare private instance properties
  #map;
  #mapEvent;
  #workouts = [];

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

  _newWorkout(e) {

    // validate data: helper methods
    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault()

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value; //convert to number
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      //   if (
      //     !Number.isFinite(distance) ||
      //     !Number.isFinite(duration) ||
      //     !Number.isFinite(cadence)
      //   ) return alert('Inputs have to be positive numbers!');
      // }
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence))
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

      // If cycling, create cycling object
      if (type === 'cycling') {
        const elevation = +inputCadence.value;

        if (
          !validInputs(distance, duration, elevation) ||
          !allPositive(distance, duration))
          return alert('Inputs have to be positive numbers!');

        workout = new Cycling([lat, lng], distance, duration, elevation);
      }

      // Add new object to work out array
      this.#workouts.push(workout);

      // Render workout on map as marker
      this.renderWorkoutMarker(workout)

      // Render workout on list

      // Hide form + clear input fields
      inputDistance.value = '';
      inputDuration.value = '';
      inputCadence.value = '';
    };


  renderWorkoutMarker(workout){
    // S15 | EP 235: Display a styled marker on the map
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent(workout.type)
      .openPopup();
  }

}

const app = new App();






