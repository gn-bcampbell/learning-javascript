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
    console.log(`https://www.google.pt/maps/@${latitude}${longitude}`);
  }, function(){
    alert('Could not get position')
  })
