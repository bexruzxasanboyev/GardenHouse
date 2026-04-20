export function initHamburgerMenu() {
  const menu = document.querySelector('.header__wrapper')
  const overlay = document.querySelector('.menu__overlay')
  const openBtn = document.querySelector('.hamburger__menu')
  const closeBtn = document.querySelector('.menu__close')

  if (!menu || !overlay || !openBtn || !closeBtn) return

  const open = () => {
    menu.classList.add('active')
    overlay.classList.add('active')
  }
  const close = () => {
    menu.classList.remove('active')
    overlay.classList.remove('active')
  }

  openBtn.addEventListener('click', open)
  closeBtn.addEventListener('click', close)
  overlay.addEventListener('click', close)

  return () => {
    openBtn.removeEventListener('click', open)
    closeBtn.removeEventListener('click', close)
    overlay.removeEventListener('click', close)
  }
}