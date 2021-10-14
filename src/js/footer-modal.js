const openModalBtn = document.querySelector('[data-open-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('[data-backdrop]');
console.log(backdrop, closeModalBtn, openModalBtn);

openModalBtn.addEventListener('click', onOpenModal);

//========================открыть модалку  ========================================

function onOpenModal() {
  window.addEventListener('keydown', onEscClick); //для Esc
  backdrop.classList.remove('is-hidden');
}

// ========================закрыть модалку нажатием по иконке ========================================

closeModalBtn.addEventListener('click', onCloseModal);
function onCloseModal() {
  window.removeEventListener('keydown', onEscClick); //для Esc
  backdrop.classList.add('is-hidden');
}

//  ==============================закрыть по backdrop====================

backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
  console.log('кликнули по backdrop');
}

//===========================закрыть по ESС==========================

function onEscClick(event) {
  const ESC_KEY_CODE = 'Escape';
  console.log(event.code);

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
