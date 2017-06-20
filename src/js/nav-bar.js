import { TimelineLite } from 'gsap'

export default class NavBarAnimation {
  constructor () {
    this.logo = document.querySelector('.main-navbar__logo')
    this.titleLineClass = 'main-title__line'

    // this.addSVGmotion = this.addSVGmotion.bind(this)
    this.splitTextToLines('.main-title')
    this.addListeners()
  }

  addListeners () {
    const time = 1
    // const logoObject = this.logo.contentDocument
    /* Start onSiteLoad Effect */
    const logoIcon = Array.from(document.querySelectorAll('.main-navbar__logo g > g > .st0'))
    const logoText = document.querySelector('.main-navbar__logo .st1')
    const lang = document.querySelector('.lang')
    const menuIconItems = Array.from(document.querySelectorAll('.menu-icon__item'))
    this.navBarAnimation = new TimelineLite()
    this.navBarAnimation.delay(1)
    const straggerPartOfMenuIcon = menuIconItems.slice(0, 2).reverse()
    const menuBtnText = document.querySelector('.menu-btn__text')
    const playIcon = document.querySelector('.header-play-icon')
    const titleLines = Array.from(document.querySelectorAll('.main-title__line'))
    const playIconLabel = document.querySelector('.header-showreel')
    const scrollIcon = document.querySelector('.header-scroll-icon')
    const decorLine = document.querySelector('.decor-line')

    this.navBarAnimation
    .from(logoIcon[0], time, {opacity: 0, y: '+=20'}, 'first')
    .from(logoIcon[1], time, {opacity: 0, x: '+=20'}, 'second')
    .from(logoText, time, {opacity: 0, y: '+=20'}, 'second')
    .from(menuBtnText, time, {opacity: 0, y: '+=20'}, 'second')
    .from(lang, time, {opacity: 0, y: '+=20'}, 'second')
    .from(menuIconItems[2], time, {opacity: 0, y: '+=20'}, 'first')
    .staggerFrom(straggerPartOfMenuIcon, (time / 2), {opacity: 0, x: '+=5'}, (time / 2), 'second')
    .from(decorLine, time, {opacity: 0, y: '+=20'}, 'third')
    .staggerFrom(titleLines, 0.5, {opacity: 0, y: '+=20'}, 0.3, 'third')
    .from(playIcon, 0.7, {rotation: 180, scale: 0.5, opacity: 0}, 'fourth')
    .from(playIconLabel, (time / 2), {opacity: 0, y: '-=20'}, 'fifth')
    .from(scrollIcon, time, {opacity: 0}, 'fifth')
    // this.navBarAnimation.pause()
    /* End onSiteLoad Over Effect */
  }

  splitTextToLines (querySelector) {
    const paragraph = document.querySelector(querySelector)
    let wrapStrings = []

    let text = paragraph.textContent
    text = text.trim()
    const words = text.split(' ')

    paragraph.textContent = words[0]
    let height = paragraph.offsetHeight

    let k = 0
    wrapStrings[k] = []
    wrapStrings[k].push(words[0])

    for (let i = 1; i < words.length; i++) {
      paragraph.textContent = `${paragraph.textContent} ${words[i]}`
      if (paragraph.offsetHeight > height) {
        height = paragraph.offsetHeight
        k += 1
        wrapStrings[k] = []
        wrapStrings[k].push(words[i])
      } else {
        wrapStrings[k].push(words[i])
      }
    }
    wrapStrings = wrapStrings.map(arr => {
      return arr.join(' ')
    })
    paragraph.textContent = ''
    wrapStrings.forEach(str => {
      const span = document.createElement('span')
      span.classList.add(this.titleLineClass)
      span.textContent = str
      paragraph.appendChild(span)
    })
  }

  // addListeners () {
  //   this.logo.addEventListener('load', this.addSVGmotion)
  // }
}
