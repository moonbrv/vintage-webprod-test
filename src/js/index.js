import docReady from 'doc-ready'
import MainMenuIcon from './main-menu-icon'

function onDOMLoaded () {
  /* eslint-disable */
  new MainMenuIcon()
  /* eslint-enable */
}

docReady(onDOMLoaded)
