'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal)
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


/*
    ! S13 | EP 182 - 184: Selecting, Creating, and Deleting Element
*/


// ! Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header'); //* find by class=value

const allSections = document.querySelectorAll('.section'); // * returns a NodeList
console.log(allSections);

console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button'); // * returns a HTMLCollection
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// ! Creating
const message = document.createElement('div'); //not in the DOM yet, needs to be inserted
message.classList.add('cookie-message')
message.textContent = 'We use cookies for function and analytics'
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';


// ! Inserting
header.prepend(message) //show at top of header
// header.append(message) //show at bottom of header
// only append is applied because an element cannot be in two places at once

// Alternative to prepend and append is to insert it before or after an element - 
// outside of that element as a sibling instead of a child
// header.before(message)
// header.after(message.cloneNode(true))

// ! Deleting
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove()
})

/*
    ! S13 | EP 187: Styles, Attributes, and Classes
*/

// ! Styles (inline)
message.style.backgroundColor = '#37384d'
message.style.width = '120%'

console.log(message.style.height);  // doesn't work because we haven't explicitly set it inline
console.log(message.style.backgroundColor); // does work because we set it inline above
console.log(getComputedStyle(message).color); // shows everything, here we only select color

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// ! CSS Variables / Custom Properties
document.documentElement.style.setProperty('--color-primary', 'orangered')

// ! Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.src); // absolute
console.log(logo.getAttribute('src')); //relative
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Minimalist Bankist Logo'

// ! Data Attributes
console.log(logo.dataset.versionNumber); //requires camelCase 'data-version-number'

// ! Classes (top 4)
logo.classList.add('c')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c')


/*
    ! S13 | EP 188: Smooth Scrolling
*/

// add an event listener to the button, then scroll to the section you want
document.querySelector('.btn--scroll-to').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#section--1').scrollIntoView({
    behavior: "smooth"
  })
})


/*
    ! S13 | EP 189: Events and Event Handlers

    A signal from a node that is sent from the DOM
    ? AddEventListener is better 
      - lets you add multiple events
      - allows you to remove event listeners
*/

const h1 = document.querySelector('h1');
const showAlert = () => {
  alert('addEventListening mouse hover')
}

h1.addEventListener('mouseenter', showAlert)
h1.removeEventListener('mouseenter', showAlert)
// setTimeout(() => h1.removeEventListener('mouseenter', showAlert), 3000)

/*
    ! S13 | EP 191: Event Propogation in practice

    ? Capturing: If an event like 'click' happens, it starts at the .document level and flows down through 
    ?           all nodes until it hits the target element it's applied to.

    ? Bubbling: Events bubble up from the target through all the PARENT elements

*/

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
}) //bubbles up to happen on all 3 -> .nav__link is the target on all 3 levels of bubbling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
}) //bubbles up to happen on this and .nav
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
}) //only affects .nav because this is the parent element
