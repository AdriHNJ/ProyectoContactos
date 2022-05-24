import React, { ReactElement, ReactFragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './dx-styles.scss'
import * as serviceWorker from './serviceWorker'
//import { BrowserRouter as Router, Redirect } from 'react-router-dom'
// redux toolkit
import { Provider } from 'react-redux'
import store from './redux/store'
import Box, { Item } from 'devextreme-react/box'
import Routes from './routes/routes'
import themes from 'devextreme/ui/themes'
import esMessages from 'devextreme/localization/messages/es.json'
import enMessages from 'devextreme/localization/messages/en.json'
import { locale, loadMessages } from 'devextreme/localization'
import { checkScreenSize } from 'shared-utils'
//import { runInsights } from "./services/telemetryService";
import MenuComponent from './components/menu/menuComponent'
import MenuResponsiveComponent from './components/menu/menuResponsiveComponent'
//import { sizes, subscribe, unsubscribe } from "./utils/media-query";
import { unregister } from './serviceWorker'
import { register } from './serviceWorker'
import { runInsights } from 'telemetry-portal'
import { Drawer } from 'devextreme-react/drawer'
import NavigationList from './components/navigationList/navigationList'
import Toolbar from 'devextreme-react/toolbar'
import SideNavbarInner from './components/side-nav-inner-toolbar/side-nav-inner-toolbar'
import { NavigationProvider } from './contexts/navigation'
import App from './app'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

function isMobileScreen() {
  // console.log(process.env.NODE_ENV);
  if (checkScreenSize()) return <MenuComponent></MenuComponent>
  else return <MenuResponsiveComponent></MenuResponsiveComponent>
}
/*   function getScreenSizeClass() {
    const screenSizes = sizes();
    return Object.keys(screenSizes).filter((cl:any) => screenSizes[cl]).join(' ');
  } */
const toolbarItems = [
  {
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      //onClick: () => this.setState({ opened: !this.state.opened }),
    },
  },
]
function recordarUsuario() {
  localStorage['recordarUsuario'] = 'true'
  //return <Redirect from="/" to="/ExpedientePage" />;
}
localStorage.removeItem('APP_VERSION')
var routing: JSX.Element
routing = (
  <>
    <Router history={createBrowserHistory()}>
      {localStorage.getItem('user') && localStorage.getItem('recordarUsuario')
        ? recordarUsuario()
        : undefined}
      <NavigationProvider>
        <Provider store={store}>
          {/* {isMobileScreen()} */}
          <SideNavbarInner title="prueba">
            <div className="page">
              <Box direction="row" width="100%" height={125}>
                <Item ratio={1}>
                  <div className="rect demo-light">
                    <Routes></Routes>
                  </div>
                </Item>
              </Box>
            </div>
          </SideNavbarInner>
        </Provider>
      </NavigationProvider>
    </Router>
  </>
)
//runInsights()
//Obtener config
let currentLenguage = window.localStorage.getItem('lenguage') || 'es-ES'
loadMessages(esMessages)
loadMessages(enMessages)
locale(currentLenguage)

themes.ready(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
themes.current(window.localStorage.getItem('dx-theme') || 'generic.light')
//themes.current(currentTheme);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
//serviceWorker.register();
unregister()
