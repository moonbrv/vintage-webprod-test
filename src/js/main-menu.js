import { TimelineLite } from 'gsap'
import isMenuOpen from './isMenuOpen'

export default class MainMenu {
  constructor () {
    this.menuIcon = document.querySelector('.menu-icon')
    this.navBar = document.querySelector('.main-navbar')
    this.navbarOpenModificator = ('main-navbar_open')
    this.navScreen = document.querySelector('.navigation-screen')
    this.menuItems = Array.from(document.querySelectorAll('.main-menu__list-item'))
    this.socialIcons = document.querySelector('.social')
    this.lang = document.querySelector('.lang')
    this.langMenu = document.querySelector('.lang__dropdown')
    this.langWrapper = document.querySelector('.main-navbar__lang-wrapper')

    this.mainMenuAnimation = new TimelineLite()

    this.mainMenuAnimation
    .to(this.lang, 0.3, {opacity: 0, x: '-=20'}, 'first')
    .to(this.langMenu, 0, {opacity: 1, visibility: 'visible'}, 'second')
    .to(this.langWrapper, 0, {margin: 0}, 'second')
    .to(this.lang, 0, {className: '+=lang_screen'}, 'second')
    .to(this.lang, 0.3, {opacity: 1, x: '+=20'}, 'second')
    .from(this.navScreen, 0.5, {x: '+=103%'}, 'second')
    .to(this.navBar, 0.5, {position: 'fixed'}, 'third')
    .staggerFrom(this.menuItems, 0.4, {opacity: 0, y: '-=30'}, 0.2, 'third')
    .from(this.socialIcons, 0.3, {opacity: 0, x: '-=20'}, 'fourth')
    this.mainMenuAnimation.pause()

    this.startAnimation = this.startAnimation.bind(this)

    this.addListeners()
  }
  startAnimation () {
    if (isMenuOpen()) {
      this.mainMenuAnimation.play()
      this.navBar.classList.add(this.navbarOpenModificator)
    } else {
      this.mainMenuAnimation.reverse()
      this.navBar.classList.remove(this.navbarOpenModificator)
    }
  }

  addListeners () {
    this.menuIcon.addEventListener('click', this.startAnimation)
  }
}
