import { TimelineLite } from 'gsap'
import isMenuOpen from './isMenuOpen'

export default class LangChosing {
  constructor (defaultLang) {
    this.currentLang = ''
    this.currentLangModificator = 'lang__item_current'
    this.langPlaceholder = document.querySelector('.lang__current')
    this.items = Array.from(document.querySelectorAll('.lang__item'))
    this.dropDownList = document.querySelector('.lang__dropdown')
    this.arrow = document.querySelector('.lang__arrow')
    this.langBlock = document.querySelector('.lang')
    this.dropDownModificator = 'lang_open'
    this.langSettingsBlock = document.querySelector('.lang__settings')

    this.resetLang = this.resetLang.bind(this)
    this.makeLangActive = this.makeLangActive.bind(this)
    this.choseLang = this.choseLang.bind(this)
    this.openDropDown = this.openDropDown.bind(this)
    this.closeDropDown = this.closeDropDown.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)

    /* Start lang dropdown animation */
    this.openDropDownAction = new TimelineLite()
    this.openDropDownAction
    .to(this.dropDownList, 0.5, {
      opacity: 1,
      visibility: 'visible'
    }, 0)
    .to(this.arrow, 0.5, {rotation: 180}, 0)
    this.openDropDownAction.pause()
    /* End lang dropdown animation */

    this.makeLangActive(defaultLang)
    this.addListeners()
  }

  resetLang () {
    this.items.forEach(item => {
      item.classList.remove(this.currentLangModificator)
    })
  }

  makeLangActive (lang) {
    if (lang === this.currentLang) {
      return
    }
    this.resetLang()
    this.items.forEach(item => {
      if (item.textContent === lang) {
        this.langPlaceholder.textContent = lang
        this.currentLang = lang
        item.classList.add(this.currentLangModificator)
        this.closeDropDown()
      }
    })
  }

  choseLang (item) {
    const lang = item.textContent
    const cb = function (e) {
      this.makeLangActive(lang)
    }
    return cb.bind(this)
  }

  openDropDown () {
    if (!isMenuOpen()) {
      this.langBlock.classList.add(this.dropDownModificator)
      this.openDropDownAction.play()
    }
  }

  closeDropDown () {
    if (!isMenuOpen()) {
      this.langBlock.classList.remove(this.dropDownModificator)
      this.openDropDownAction.reverse()
    }
  }

  toggleDropDown () {
    if (!isMenuOpen()) {
      if (this.langBlock.classList.contains(this.dropDownModificator)) {
        this.langBlock.classList.remove(this.dropDownModificator)
        this.openDropDownAction.reverse()
      } else {
        this.langBlock.classList.add(this.dropDownModificator)
        this.openDropDownAction.play()
      }
    }
  }

  addListeners () {
    this.langBlock.addEventListener('mouseover', this.openDropDown)
    this.langBlock.addEventListener('mouseleave', this.closeDropDown)
    this.langSettingsBlock.addEventListener('touchstart', this.toggleDropDown)
    this.items.forEach(item => {
      item.addEventListener('click', this.choseLang(item))
    })
  }
}
