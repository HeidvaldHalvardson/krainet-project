export const toggleNavMenu = () => {
  const nav = document.querySelector('.nav');
  const openButton = document.querySelector('.nav__toggle-open');
  const closeButton = document.querySelector('.nav__toggle-close');
  const overlay = document.querySelector('.nav__overlay');

  const openHandler = () => {
    nav.classList.remove('nav--close');
    nav.classList.add('nav--open');
  }

  const closeHandler = () => {
    nav.classList.remove('nav--open');
    nav.classList.add('nav--close');
  }

  const overlayHandler = (e) => {
    if (!e.target.closest('.nav__inner')) {
      closeHandler();
    }
  }

  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }

  openButton.addEventListener('click', openHandler);

  closeButton.addEventListener('click', closeHandler);
  overlay.addEventListener('click', overlayHandler);
  document.addEventListener('keydown', escapeHandler);

  return () => {
    openButton.removeEventListener('click', openHandler);

    closeButton.removeEventListener('click', closeHandler);
    overlay.removeEventListener('click', overlayHandler);
    document.removeEventListener('keydown', escapeHandler);
  }
}