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
let map, mapEvent;

/*
    ! S15 | EP 233: Using Geolocation API

    Get current exact co-ordinates using the navigator object.
    - Call navigator.geolocation.getCurrentPosition and pass in two callback functions
    - one for success, one for error
*/
if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function(position){
    const {latitude, longitude} = position.coords;
    const coords = [latitude, longitude];

    /*
    S15 | EP 234: Display leaflet map on screen
      'map' here is the element in which to display the leaflet map view
      'L' is the namespace for leaflet's methods
     */

    map = L.map('map').setView([latitude, longitude], 13);

    // tile layer method uses openStreetMap to populate its tiles.
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

      // S15 | EP 236: Render workout input form
      map.on('click', function(mapE){
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus(); //allows you to immediately start typing in field
      });
    },
    function(){
    alert('Could not get position')

  })

form.addEventListener('submit', function(e) {
  e.preventDefault()

  // clear input fields
  inputDistance.value = '';
  inputDuration.value = '';
  inputCadence.value = '';

  // S15 | EP 235: Display a styled marker on the map
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(L.popup({maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
      className:'running-popup'}))
    .setPopupContent('Workout')
    .openPopup();
})

// S15 | EP 236: Toggle elevation and cadence based on inputType
inputType.addEventListener('change', function(e) {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})