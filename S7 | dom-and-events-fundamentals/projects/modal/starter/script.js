'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const hideModalContent = function hideModalContent() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModalContent = function showModalContent() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showModalContent);
}

btnCloseModal.addEventListener('click', hideModalContent);
overlay.addEventListener('click', hideModalContent);

document.querySelector('body').addEventListener('keydown', event => {
  if (event.key === 'Escape') hideModalContent();
});
