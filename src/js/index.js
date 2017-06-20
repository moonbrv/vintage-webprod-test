import docReady from 'doc-ready'
import MainMenuIcon from './main-menu-icon'
import LangChosing from './lang-chosing'
import NavBarAnimation from './nav-bar'
import MainMenu from './main-menu.js'
import ScrollIcon from './scroll-icon-animation'

function onDOMLoaded () {
  /* eslint-disable */
  new NavBarAnimation()
  new MainMenuIcon()
  new LangChosing('рус')
  new MainMenu()
  new ScrollIcon()
  /* eslint-enable */
}

docReady(onDOMLoaded)
