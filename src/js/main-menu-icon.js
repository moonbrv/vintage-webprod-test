import { TimelineLite } from 'gsap'

export default class MainMenuIcon {
  constructor () {
    this.menuIcon = document.querySelector('.menu-icon')
    this.openModificator = 'menu-icon_open'
    this.elements = Array.from(document.querySelectorAll('.menu-icon__item'))

    // bind methods to the classInstance
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.isOpen = this.isOpen.bind(this)
    this.onClick = this.onClick.bind(this)

    /* Start onMouse Over Effect */
    this.mouseOverEffect = new TimelineLite()
    this.mouseOverEffect
    .to(this.elements[0], 0.5, {y: '-=10'}, 0)
    .to(this.elements[2], 0.5, {y: '+=10'}, 0)
    this.mouseOverEffect.pause()
    /* End onMouse Over Effect */

    /* Start onClick Effect */
    this.onClickEffect = new TimelineLite()
    this.onClickEffect
    .to(this.elements[0], 0.5, {rotation: 155}, 0)
    .to(this.elements[1], 0.5, {x: 0, rotation: 25}, 0)
    .to(this.elements[2], 0.5, {x: '-=5', opacity: 0}, 0)
    this.onClickEffect.pause()
    /* End onClick Effect */

    this.addListeners()
  }

  isOpen () {
    return this.menuIcon.classList.contains(this.openModificator)
  }

  mouseOver () {
    if (!this.isOpen()) {
      this.mouseOverEffect.play()
    }
  }

  mouseLeave () {
    if (!this.isOpen()) {
      this.mouseOverEffect.reverse()
    }
  }

  onClick () {
    if (this.isOpen()) {
      this.mouseOverEffect.play()
      this.onClickEffect.reverse()
    } else {
      this.mouseOverEffect.reverse()
      this.onClickEffect.play()
    }
    this.menuIcon.classList.toggle(this.openModificator)
  }

  addListeners () {
    this.menuIcon.addEventListener('mouseover', this.mouseOver)
    this.menuIcon.addEventListener('mouseleave', this.mouseLeave)
    this.menuIcon.addEventListener('click', this.onClick)
  }
}
