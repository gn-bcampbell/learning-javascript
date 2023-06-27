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