const openModalBtn = document.querySelector('[data-open-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('[data-backdrop]');

openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  window.addEventListener('keydown', onEscClick);
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

closeModalBtn.addEventListener('click', onCloseModal);
function onCloseModal() {
  window.removeEventListener('keydown', onEscClick);
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscClick(event) {
  const ESC_KEY_CODE = 'Escape';
  console.log(event.code);

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
