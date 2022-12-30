'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModalHandler = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalHandler = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//  EVENT LISTENER
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModalHandler);
}

btnCloseModal.addEventListener('click', closeModalHandler);
overlay.addEventListener('click', closeModalHandler);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalHandler();
  }
});
