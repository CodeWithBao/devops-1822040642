const updateButton = document.querySelector('#updateButton');
const updateNote = document.querySelector('#updateNote');

if (updateButton && updateNote) {
  updateButton.addEventListener('click', () => {
    const isOpen = updateButton.getAttribute('aria-expanded') === 'true';

    updateButton.setAttribute('aria-expanded', String(!isOpen));
    updateButton.innerHTML = isOpen
      ? 'Xem cập nhật 2.0 <span aria-hidden="true">↓</span>'
      : 'Đã xem cập nhật <span aria-hidden="true">↑</span>';
    updateNote.hidden = isOpen;
  });
}
