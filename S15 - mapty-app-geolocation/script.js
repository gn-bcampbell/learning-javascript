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

    // 'map' here is the element in which to display the leaflet map view
    // 'L' is the namespace for leaflet's methods
    const map = L.map('map').setView([latitude, longitude], 13);

    // tile layer method uses openStreetMap to populate its tiles.
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click', function(mapEvent){
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
    })},
    function(){
    alert('Could not get position')
  })

