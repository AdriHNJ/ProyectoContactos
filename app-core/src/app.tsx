import React from 'react'
//import { HashRouter as Router, useHistory } from 'react-router-dom'
import './dx-styles.scss'
import LoadPanel from 'devextreme-react/load-panel'
import { NavigationProvider } from './contexts/navigation'
//import { AuthProvider, useAuth } from "./contexts/auth";
import { useScreenSizeClass } from './utils/media-query'
import Content from './Content'
import UnauthenticatedContent from './UnauthenticatedContent'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'
import { RootState } from './redux/combineReducers'
import { isAlreadyLoggedUser } from './redux/utils/reduxUtils'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { useHistory } from 'react-router-dom'
const App = () => {
  const usuarioState = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  /*   if (usuarioState?.isLoggedIn) {
    return <Content />
  }
  if (usuarioState!.isLoggedIn === false) {
    if (isAlreadyLoggedUser('/administracion', history, dispatch)) {
      return <Content />
    }
  } */

  // return <UnauthenticatedContent />
  return <Content />
}

export default function () {
  const screenSizeClass = useScreenSizeClass()
  //window.localStorage.setItem("dx-theme", "material.orange.dark");
  return (
    <Router history={createBrowserHistory()}>
      {/* <AuthProvider> */}
      <NavigationProvider>
        <Provider store={store}>
          {/* si quitamos el app la aplicación se ve bien 
          <div className={`app ${screenSizeClass}`}>
          */}
          <div className={`${screenSizeClass}`}>
            <App />
          </div>
        </Provider>
      </NavigationProvider>
      {/* </AuthProvider> */}
    </Router>
  )
}
