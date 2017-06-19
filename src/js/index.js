import docReady from 'doc-ready'
import MainMenuIcon from './main-menu-icon'
import LangChosing from './lang-chosing'
import NavBarAnimation from './nav-bar'

function onDOMLoaded () {
  /* eslint-disable */
  new NavBarAnimation()
  new MainMenuIcon()
  new LangChosing('рус')
  /* eslint-enable */
}

docReady(onDOMLoaded)
