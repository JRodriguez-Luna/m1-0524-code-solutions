const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

$openModal?.addEventListener('click', () => {
  $dialog?.showModal();
});

$dismissModal?.addEventListener('click', () => {
  $dialog?.close();
});
