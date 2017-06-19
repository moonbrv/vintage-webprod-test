import { TimelineLite } from 'gsap'

export default class NavBarAnimation {
  constructor () {
    this.logo = document.querySelector('.main-navbar__logo')

    this.addSVGmotion = this.addSVGmotion.bind(this)

    this.addListeners()
  }

  addSVGmotion () {
    const time = 1
    const logoObject = this.logo.contentDocument
    /* Start onSiteLoad Effect */
    const logoIcon = Array.from(logoObject.querySelectorAll('svg g > g > .st0'))
    const logoText = logoObject.querySelector('.st1')
    const lang = document.querySelector('.lang')
    const menuIconItems = Array.from(document.querySelectorAll('.menu-icon__item'))
    this.navBarAnimation = new TimelineLite()
    this.navBarAnimation.delay(0.5)
    const straggerPartOfMenuIcon = menuIconItems.slice(0, 2).reverse()
    const menuBtnText = document.querySelector('.menu-btn__text')
    this.navBarAnimation
    .from(logoIcon[0], time, {opacity: 0, y: '+=20'}, 'first')
    .from(logoIcon[1], time, {opacity: 0, x: '+=20'}, 'second')
    .from(logoText, time, {opacity: 0, y: '+=20'}, 'second')
    .from(menuBtnText, time, {opacity: 0, y: '+=20'}, 'second')
    .from(lang, time, {opacity: 0, y: '+=20'}, 'second')
    .from(menuIconItems[2], time, {opacity: 0, y: '+=20'}, 'first')
    .staggerFrom(straggerPartOfMenuIcon, (time / 2), {opacity: 0, x: '+=5'}, (time / 2), 'second')
    // this.navBarAnimation.pause()
    /* End onSiteLoad Over Effect */
  }

  addListeners () {
    this.logo.addEventListener('load', this.addSVGmotion)
    const text = document.querySelector('.main-title').textContent
    console.log(text.trim().match(/\r?\n/g))
    const splitOption = text.match(/\r?\n/g)[0]
    console.log(text.lastIndexOf(splitOption))
  }
}
