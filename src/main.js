document.addEventListener("DOMContentLoaded", () => {
  const modalMenu = document.querySelector('.mobile-menu-overlay');
  const modalMenuOpenBtn = document.querySelector('.burger-btn');
  const modalMenuCloseBtn = document.querySelector('.mobile-menu__close-button');

  const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

  // Mobile menu
  if (modalMenu && modalMenuOpenBtn && modalMenuCloseBtn) {
    const toggleModal = (state) => {
      if (state === 'open') {
        const scrollbarWidth = getScrollbarWidth();

        document.body.classList.add('modal-open');
        modalMenu.classList.remove('hidden');
        modalMenu.classList.add('is-open');

        document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
      }
      if (state === 'close') {
        modalMenu.classList.remove('is-open');

        setTimeout(() => {
          modalMenu.classList.add('hidden');
          document.body.classList.remove('modal-open');
          document.documentElement.style.removeProperty("--scrollbar-width");
        }, 250); 
      }
    }

    modalMenuOpenBtn.addEventListener('click', () => toggleModal('open'));
    modalMenuCloseBtn.addEventListener('click', () => toggleModal('close'));

    modalMenu.addEventListener('click', ({ target }) => {
      if (target.classList.contains('mobile-menu__nav-link') || target === modalMenu) {
        toggleModal('close');
      }
    });
  }
});