import React, { ReactElement } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import { Button } from 'devextreme-react'
import { Popup } from 'devextreme-react/popup'

import './userLegalLinksComponent.css'

function UserLegalLinks(): ReactElement {
  //usuario
  const userState = useSelector((state: RootState) => state.user)
  const [showUserLinks, setShowUserLinks] = useState(true)

  const handleHideShowUserLinks = () => {
    setShowUserLinks(false)
    localStorage.setItem('acceptedLinksUsers', 'true')
  }

  return (
    <>
      {userState!.isLoggedIn === true ? (
        !localStorage.getItem('acceptedLinksUsers') ? (
          <Popup
            visible={showUserLinks}
            onHiding={handleHideShowUserLinks}
            dragEnabled={true}
            closeOnOutsideClick={false}
            showTitle={true}
            //title="Configuración"
            width={300}
            height={250}
          >
            <p style={{ color: 'gray' }}>
              Al hacer clic en 'Acceptar', usted está de acuerdo con el{' '}
              <a
                /*  href={userState?.user?.Configuracion.LinkLegal} */
                target="_blank"
                rel="noopener noreferrer"
              >
                Aviso Legal
              </a>
              {', '}
              <a
                /*   href={userState?.user?.Configuracion.LinkCookies} */
                target="_blank"
                rel="noopener noreferrer"
              >
                La política de cookies
              </a>{' '}
              y el{' '}
              <a
                /*    href={userState?.user?.Configuracion.LinkRgpd} */
                target="_blank"
                rel="noopener noreferrer"
              >
                reglamento de protección de datos
              </a>
            </p>
            <div>
              <Button
                width={120}
                text="Aceptar"
                type="success"
                stylingMode="contained"
                onClick={handleHideShowUserLinks}
              />
            </div>
          </Popup>
        ) : (
          false
        )
      ) : null}
    </>
  )
}

export default UserLegalLinks
