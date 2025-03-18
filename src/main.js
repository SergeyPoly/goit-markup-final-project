document.addEventListener("DOMContentLoaded", () => {
  const modalMenu = document.querySelector('[mobile-menu]');
  const modalMenuOpenBtn = document.querySelector('[mobile-menu-open]');
  const modalMenuCloseBtn = document.querySelector('[mobile-menu-close]');

  // Mobile menu
  if (modalMenu && modalMenuOpenBtn && modalMenuCloseBtn) {
    const toggleModal = (state) => {
      if (state === 'open') {
        modalMenu.classList.remove('hidden');
        modalMenu.classList.add('is-open');
      }
      if (state === 'close') {
        modalMenu.classList.remove('is-open');
        setTimeout(() => {
          modalMenu.classList.add('hidden');
        }, 250);
      }
    }

    modalMenuOpenBtn.addEventListener('click', () => toggleModal('open'));
    modalMenuCloseBtn.addEventListener('click', () => toggleModal('close'));
  }
});