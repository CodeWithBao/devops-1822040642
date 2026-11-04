const updateButton = document.querySelector('#updateButton');
const updateNote = document.querySelector('#updateNote');

if (updateButton && updateNote) {
  updateButton.addEventListener('click', () => {
    const isOpen = updateButton.getAttribute('aria-expanded') === 'true';

    updateButton.setAttribute('aria-expanded', String(!isOpen));
    updateButton.innerHTML = isOpen
      ? 'Xem ghi chú phiên bản <span aria-hidden="true">↓</span>'
      : 'Đã xem ghi chú <span aria-hidden="true">↑</span>';
    updateNote.hidden = isOpen;
  });
}
