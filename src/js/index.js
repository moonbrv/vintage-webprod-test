import docReady from 'doc-ready'
import MainMenuIcon from './main-menu-icon'
import LangChosing from './lang-chosing'
import NavBarAnimation from './nav-bar'
import MainMenu from './main-menu.js'

function onDOMLoaded () {
  /* eslint-disable */
  new NavBarAnimation()
  new MainMenuIcon()
  new LangChosing('рус')
  new MainMenu()
  /* eslint-enable */
}

docReady(onDOMLoaded)
