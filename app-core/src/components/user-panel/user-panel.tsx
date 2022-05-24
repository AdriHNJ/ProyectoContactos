import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ContextMenu, { Position } from 'devextreme-react/context-menu'
import List from 'devextreme-react/list'
import './user-panel.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import logoUser from '../../assets/user.png'
import { getTimeLogIn } from '../menuGeneric/menuUtils'
import { Popup } from 'devextreme-react'
import Iframe from 'react-iframe'
import { custom } from 'devextreme/ui/dialog'

export default function ({ menuMode }: { menuMode: any }) {
  //const { user, signOut } = useAuth() as any;
  const history = useHistory()
  const my: any = 'top center'
  const at: any = 'bottom center'
  //usuario
  const usuarioState = useSelector((state: RootState) => state.user)
  const [popUpHelpVisible, setPopUpHelpVisible] = useState(false)
  function navigateToProfile() {
    history.push('/profile')
  }
  const handlePopupHelpShow = () => {
    setPopUpHelpVisible(true)
    setTimeout(function () {
      //const nav = document.getElementById('p-tb')
      const iframe = document.getElementById('ayudaIframe')
      console.log(iframe)
    }, 3000)
  }
  const handlePopupHelpHide = () => {
    setPopUpHelpVisible(false)
  }
  const menuItems = useMemo(
    () => [
      /*  {
        text: "Profile",
        icon: "user",
        onClick: navigateToProfile,
      }, */

      /*      {
        text: 'Mi Cuenta',
        icon: 'card',
        onClick: () => {},
      }, */
      {
        text: 'Ayuda',
        icon: 'help',
        onClick: () =>
          window.open(
            'https://wiki.ruano.com/index.php?title=Portal_2021:_%C3%8Dndice',
            '_blank',
          ),
      },
      {
        text: getTimeLogIn(),
        icon: 'clock',
        style: { fontWeight: 'bold' },
      },
      {
        text: 'Cerrar Sesión',
        icon: 'runner',
        onClick: () => {
          localStorage.removeItem('user')
          localStorage.removeItem('storage')
          localStorage.removeItem('parentCompanyModulos')
          localStorage.removeItem('parentEnlaces')
          localStorage.removeItem('recordarUsuario')
          localStorage.removeItem('APP_VERSION')
          localStorage.removeItem('gridExpedientesComponent')
          localStorage.removeItem('companyGridComponent')
          localStorage.removeItem('componenteGridComponent')
          window.location.reload()
        },
      },
    ],
    [
      /* signOut */
    ],
  )

  return (
    <>
      <div className={'user-panel'}>
        <div className={'user-info'}>
          <div className={'user-name'}>
            <b>{usuarioState?.user?.UserName}</b>
          </div>

          <div className={'image-container'}>
            <div
              style={{
                background: `url(${logoUser}) no-repeat #fff`,
                backgroundSize: 'cover',
              }}
              className={'user-image'}
            />
          </div>
        </div>
        <div style={{ marginRight: '6em', marginTop: '0.16em' }}>
          {usuarioState?.user?.role}
        </div>
        {menuMode === 'context' && (
          <ContextMenu
            items={menuItems}
            target={'.user-button'}
            showEvent={'dxclick'}
            width={210}
            cssClass={'user-menu'}
          >
            <Position my={my} at={at} />
          </ContextMenu>
        )}
        {menuMode === 'list' && (
          <List className={'dx-toolbar-menu-action'} items={menuItems} />
        )}
      </div>
      <Popup
        visible={popUpHelpVisible}
        onHiding={handlePopupHelpHide}
        dragEnabled={true}
        closeOnOutsideClick={false}
        showTitle={true}
        title="Ayuda"
        resizeEnabled={true}
        showCloseButton={true}
        width="98%"
        height="98%"
      >
        {/*   <Iframe
          url="https://wiki.ruano.com/index.php?title=Portal:_%C3%8Dndice"
          width="100%"
          height="100%"
          id="ayudaIframe"
          className="myClassname"
          display="block"
          position="relative"
        /> */}
        <iframe
          id="inlineFrame"
          title=""
          width="100%"
          height="100%"
          src="https://wiki.ruano.com/index.php?title=Portal:_%C3%8Dndice"
        ></iframe>
      </Popup>
    </>
  )
}
