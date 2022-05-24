import React, { ReactElement, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../redux/combineReducers'

import './expedienteStyles.scss'
import { useClearCache } from 'react-clear-cache'
import ExpedienteIndex from './components/expedienteIndex'
//import { runInsights } from "../../services/telemetryService";
import { runInsights } from 'telemetry-portal'
import { isAlreadyLoggedUser } from '../../redux/utils/reduxUtils'
import { isModuloAllowed, modulos } from '../../utils/allowModuloUtil'
import NotFound from '../../components/notFound/notFound'

import ExpedienteIndexNew from './components/expedienteIndexNew'

function ExpedientePage(): ReactElement {
  const userState = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const { isLatestVersion, emptyCacheStorage } = useClearCache()
  const [showUserLinks, setShowUserLinks] = useState(true)
  //const appInsights = runInsights()

  const obtenerAncho = () => {}
  /* if (userState!.isLoggedIn === false) {
    isAlreadyLoggedUser('/expedientePage', history, dispatch)
  } */
  const usuarioState = useSelector((state: RootState) => state.user)

  const handleHideShowUserLinks = () => {
    setShowUserLinks(false)
    localStorage.setItem('acceptedLinksUsers', 'true')
  }

  return (
    <React.Fragment>
      <ExpedienteIndexNew />
      {/*  {!isLatestVersion && emptyCacheStorage()}
       {userState!.isLoggedIn === false ? history.push('/') : null}
      {isModuloAllowed(userState!.user!, modulos.EXPEDIENTES) ? (
        !isSuperAdministrador(userState!.user!) ? (
          <ExpedienteIndexNew />
        ) : (
       
               <div
            className={'content-block dx-card '}
            style={{
              borderColor: '#f4f9ff',
              borderWidth: '2px',
              margin: '0.3%',
              padding: '0.16%',
            }}
          >
            <NotFound data={{ type: 1 }}></NotFound>
          </div> 
        )
      ) : null} */}

      {obtenerAncho}
    </React.Fragment>
  )
}

export default ExpedientePage
