import React, { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import ExpedientePage from '../pages/expedientePage/expedientePage'
import LoginPage from '../pages/loginPage/login'
import NotFound from '../components/notFound/notFound'
import CambiarContraseñaPage from '../pages/loginPage/components/cambiarContraseña'

import LoaderComponent from '../components/loader/loaderComponent'

import FeedBack from '../components/feedBack/feebackComponent'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/combineReducers'

function Routes(): ReactElement {
  const usuarioState = useSelector((state: RootState) => state.user)
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginPage} hideNavBar={true} />
        <Route exact path="/expedientePage" component={ExpedientePage} />
        {{ /*<Route exact path="/contactos" component={ExpedientePage} />*/}}
        <Route exact path="/login" component={LoginPage} hideNavBar={true} />
        <Route exact path="/loader" component={LoaderComponent} />
        <Route exact path="/ResetPassword" component={CambiarContraseñaPage} />

        {/* <Route component={NotFound} /> */}
      </Switch>

      {LoaderComponent()}
    </>
  )
}

export default Routes
