const modalButtons = document.querySelectorAll('.modal-btn');

let activeModal = null;

function findModalByTarget(elementWithTarget) {
  const targetModalId = elementWithTarget.dataset.target;
  return document.querySelector(`#${targetModalId}`);
}

function openModal(modalElem) {
  activeModal = modalElem;
  modalElem.classList.add('open');
}

function closeModal() {
  activeModal.classList.remove('open');
}

function handleOpenModalButtonClick(e) {
  const targetModal = findModalByTarget(e.target);
  openModal(targetModal);
}

function handleCloseModalButtonClick(modal) {
  closeModal();
}

function handleBackdropElemClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function handleKeyClick(e) {
  if(e.code === 'Escape'){
      closeModal();
  }
}

modalButtons.forEach((modalButton) => {
  modalButton.addEventListener('click', handleOpenModalButtonClick);

  const modal = findModalByTarget(modalButton);
  const closeBtn= modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', handleCloseModalButtonClick);
  modal.addEventListener('click', handleBackdropElemClick);
  window.addEventListener('keydown', handleKeyClick);
});

// Закрити модалку при натисканні Escape до 30.11.2022