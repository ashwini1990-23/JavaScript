'use strict';

// Selecting elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Close functionality for Modal Window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open functionality for Modal Window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

// When user clicks close button
btnCloseModal.addEventListener('click', closeModal);

// When user clicks on overlay
overlay.addEventListener('click', closeModal);

// When user clicks Esc key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
