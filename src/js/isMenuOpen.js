const menuIcon = document.querySelector('.menu-icon')
const openModificator = 'menu-icon_open'

export default function isMenuOpen () {
  return menuIcon.classList.contains(openModificator)
}
