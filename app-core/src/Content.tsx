import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import appInfo from './app-info'
import routes from './app-routes'
import SideNavbarInner from './components/side-nav-inner-toolbar/side-nav-inner-toolbar'
import { Footer } from './components'
import { useSelector } from 'react-redux'
import { RootState } from './redux/combineReducers'
import Box, { Item } from 'devextreme-react/box'
import { LoadPanel } from 'devextreme-react'
import FeedBack from './components/feedBack/feebackComponent'

const Content = () => {
  const configState = useSelector((state: RootState) => state.config)
  const userState = useSelector((state: RootState) => state.user)
  /*   const enlaceState = useSelector((state: RootState) => state.enlace)
   */
  /*   const EnlaceLegal = JSON.parse(localStorage.getItem('parentEnlaces')!)[0]
  const EnlacePrivcacidadCookies = JSON.parse(
    localStorage.getItem('parentEnlaces')!,
  )[1]
  const EnlaceRGPD = JSON.parse(localStorage.getItem('parentEnlaces')!)[2] */

  const [legal, setLegal]: any = useState()
  const [cookies, setCookies]: any = useState()
  const [RGPD, setRGPD]: any = useState()
  /*   useEffect(() => {
    if (
      enlaceState?.enlace?.CodigoTipoEnlace == 'Legal' &&
      enlaceState.enlace.EnlaceValue != undefined
    ) {
      setLegal(enlaceState.enlace.EnlaceValue)
    } else {
      setLegal(EnlaceLegal != undefined ? EnlaceLegal.EnlaceValue : '')
    }
    if (
      enlaceState?.enlace?.CodigoTipoEnlace == 'Cookies' &&
      enlaceState.enlace.EnlaceValue != undefined
    ) {
      setCookies(enlaceState.enlace.EnlaceValue)
    } else {
      setCookies(
        EnlacePrivcacidadCookies != undefined
          ? EnlacePrivcacidadCookies.EnlaceValue
          : '',
      )
    }
    if (
      enlaceState?.enlace?.CodigoTipoEnlace == 'RGPD' &&
      enlaceState.enlace.EnlaceValue != undefined
    ) {
      setRGPD(enlaceState.enlace.EnlaceValue)
    } else {
      setRGPD(EnlaceRGPD != undefined ? EnlaceRGPD.EnlaceValue : '')
    }
  }, [enlaceState?.enlace, EnlaceLegal, EnlacePrivcacidadCookies, EnlaceRGPD]) // Solo se vuelve a ejecutar si count cambia
 */
  return (
    <div>
      <LoadPanel
        shadingColor="rgba(192,192,192,0.9)"
        position="center"
        // onHiding={ocultarLoader}
        visible={configState.visibleLoader}
        showIndicator={true}
        shading={true}
        showPane={true}
        closeOnOutsideClick={false}
      />
      <SideNavbarInner title={appInfo.title}>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route exact key={path} path={path} component={component} />
          ))}
          <Redirect to={'/expedientePage'} />
        </Switch>

        <Footer>
          <Box direction="row" width="100%" style={{ textAlign: 'center' }}>
            <Item ratio={1}>
              <div>
                {
                  <a href={cookies} target="_blank">
                    Política de privacidad y cookies
                  </a>
                }
              </div>
            </Item>
            <Item ratio={1}>
              <div>
                {
                  <a href={legal} target="__blank">
                    Legal
                  </a>
                }
              </div>
            </Item>
            <Item ratio={1}>
              <div>
                <a href={RGPD} target="_blank">
                  Reglamento General de Protección de Datos
                </a>
              </div>
            </Item>
          </Box>

          {}
          {/*  Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their respective
        owners. */}
        </Footer>
      </SideNavbarInner>
      {/*       <FeedBack
        user={userState?.user}
        isLoggedIn={userState?.isLoggedIn}
      ></FeedBack> */}
    </div>
  )
}
export default Content
