import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react'
import Menu from 'devextreme-react/menu'
import { useHistory } from 'react-router-dom'
import Box, { Item } from 'devextreme-react/box'
import Button from 'devextreme-react/button'
import { Popover } from 'devextreme-react/popover'
import { SelectBox } from 'devextreme-react/select-box'
import DataSource from 'devextreme/data/data_source'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import { CambiarTema } from 'shared-services'
import { LoadPanel } from 'devextreme-react'
import Iframe from 'react-iframe'
import { Popup, ToolbarItem } from 'devextreme-react/popup'
import { useClearCache } from 'react-clear-cache'
import { addUpdateTheme } from '../../pages/loginPage/redux/authActions'
import { ConfigModel } from '../../models/usuario/configModel'
import { MenuGenericModel } from './model/menuGenericModel'
import { dataSourceTemas, getTimeLogIn, myEvent } from './menuUtils'
import { menuItemInterface } from './interfaces/menuGenericItemInterface'

function createMenuGenericComponent(
  menuGenericModel: MenuGenericModel,
): ReactElement {
  const [withShadingOptionsVisible, showWithShadingOptions] = useState(false)
  const [popUpHelpVisible, setPopUpHelpVisible] = useState(false)

  //Handles de los popUps y popOver
  const handlePopoverInfoShow = () => {
    showWithShadingOptions(true)
  }
  const handlePopoverInfoHide = () => {
    showWithShadingOptions(false)
  }
  // Pop Up Ayudas
  const handlePopupHelpShow = () => {
    setPopUpHelpVisible(true)
  }
  const handlePopupHelpHide = () => {
    setPopUpHelpVisible(false)
  }

  //usuario
  const usuarioState = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch()
  //const configuracion = getConfig(usuarioState.user!);

  const history = useHistory()

  const buttonOptions = {
    icon: 'close',
    onClick: function () {
      handlePopupHelpHide()
    },
  }
  const buttonUserOptions = {
    icon: 'close',
    onClick: function () {
      handlePopoverInfoHide()
    },
  }

  function selectorTemas() {
    return (
      <Box>
        <Item ratio={1}>
          <label>
            <b>Tema</b>
          </label>
          <SelectBox
            dataSource={dataSourceTemas}
            valueExpr="ID"
            displayExpr="Name"
            searchEnabled={true}
            placeholder={
              localStorage.getItem('dx-theme')
                ? localStorage.getItem('dx-theme')!.replace(/\./g, ' ')!
                : 'Elige un tema'
            }
            onValueChanged={(event: any) => {
              let themeSelect = event.value
              window.localStorage.setItem('dx-theme', themeSelect)
              CambiarTema(
                menuGenericModel.storeUsuario,
                menuGenericModel.storeUsuario.UserName,
                themeSelect,
              ).then((response) => {
                //alert(response);
                const updateUserConfig = {
                  Tema: response,
                  Logo1: menuGenericModel.storeUsuario.Configuracion.Logo1,
                  Logo2: menuGenericModel.storeUsuario.Configuracion.Logo2,
                  MensajeCentral:
                    menuGenericModel.storeUsuario.Configuracion.MensajeCentral,
                  LinkLegal:
                    menuGenericModel.storeUsuario.Configuracion.LinkLegal,
                  LinkCookies:
                    menuGenericModel.storeUsuario.Configuracion.LinkCookies,
                  LinkRgpd:
                    menuGenericModel.storeUsuario.Configuracion.LinkRgpd,
                } as ConfigModel
                dispatch(addUpdateTheme(updateUserConfig))

                window.location.reload()
              })
            }}
          />
        </Item>
      </Box>
    )
  }
  function incioSesion() {
    return (
      <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
        <Item ratio={1}>
          <div>
            {' '}
            <i className="dx-icon-clock"></i> {getTimeLogIn()}
          </div>
        </Item>
      </Box>
    )
  }
  function datosUsuario() {
    return (
      <>
        <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
          <Item ratio={1}>
            <div>Usuario: {menuGenericModel.storeUsuario.UserName}</div>
          </Item>
        </Box>
        <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
          <Item ratio={1}>
            <div>Tipo de Usuario: {menuGenericModel.storeUsuario.Rol}</div>
          </Item>
        </Box>
      </>
    )
  }

  function panelUsuario() {
    return (
      <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
        <Item ratio={1}>
          <hr />
          <b>Panel de Usuario</b>

          <div>
            <hr />
            <Button
              icon="preferences"
              /*  type="success" */
              /*text="Administración"*/
              hint="Administración"
              onClick={() => {
                history.push('Administracion')
                handlePopoverInfoHide()
              }}
            />
            <Button
              id="calculadora"
              icon="percent"
              hint="calculadora"
              //disabled
              onClick={() =>
                window.open(
                  'https://svportal.elgestor.com/CalculadoraIntro.aspx?Id=' +
                    usuarioState?.user?.CodigoCalculadora,
                  '_blank',
                )
              }
            />
          </div>
        </Item>
      </Box>
    )
  }
  function linksAcercaDe() {
    return (
      <Menu
        items={menuGenericModel.linksLegales}
        displayExpr="name"
        showFirstSubmenuMode="onHover"
        orientation="horizontal"
        onItemClick={(event: any) => {
          myEvent(event.itemData, history)
        }}
      />
    )
  }
  function wikiPopUp() {
    return (
      <Iframe
        // url="https://wiki.ruano.com/index.php?title=Portal:_%C3%8Dndice"
        url={menuGenericModel.wikiUrl!}
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="block"
        position="relative"
      />
    )
  }

  function generateItem(item: menuItemInterface) {
    switch (item.type) {
      case 'text':
        break
      case 'button':
        ;<Button
          id="link4"
          icon="user"
          hint="Usuario y configuración"
          onClick={handlePopoverInfoShow}
        />

        break
      case 'image':
        return (
          <Item ratio={1} baseSize="6%">
            <div className="marginTop">
              <img src={item.value} className="logo" alt="" />
            </div>
          </Item>
        )

        break
      case 'iframe':
        return (
          <Iframe
            // url="https://wiki.ruano.com/index.php?title=Portal:_%C3%8Dndice"
            url={item.value!}
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="block"
            position="relative"
          />
        )
        break
      case 'menu':
        return (
          <Item ratio={1}>
            <Menu
              items={menuGenericModel.linksLegales}
              displayExpr="name"
              showFirstSubmenuMode="onHover"
              orientation="horizontal"
              onItemClick={(event: any) => {
                myEvent(event.itemData, history)
              }}
            />
          </Item>
        )

        break
      default:
        break
    }
  }

  return (
    <>
      {usuarioState!.isLoggedIn === true ? (
        <div>
          <Box
            className="menuStyle"
            direction="row"
            width="100%"
            style={{ borderBottom: '2pt solid gray' }}
          >
            {/*        {!!usuarioState!.user?.Configuracion.Logo1 ? (
              <Item ratio={1} baseSize="6%">
                <div className="marginTop">
                  <img
                    src={usuarioState!.user?.Configuracion.Logo1}
                    className="logo"
                    alt=""
                  />
                </div>
              </Item>
            ) : null} */}

            {/*           {!!usuarioState!.user?.Configuracion.Logo2 ? (
              <Item ratio={1} baseSize="6%">
                <div className="marginTop">
                  <img
                    src={usuarioState!.user?.Configuracion.Logo2}
                    className="logo"
                    alt=""
                  />
                </div>
              </Item>
            ) : null} */}

            <Item ratio={3}>
              <div className="marginTop"></div>
            </Item>

            <Item ratio={1}>
              <div className="grid-container">
                <div className="grid-item">
                  <Button
                    id="link4"
                    icon="user"
                    hint="Usuario y configuración"
                    onClick={handlePopoverInfoShow}
                  />
                  <Button
                    id="HelpButton"
                    icon="help"
                    hint="Ayuda"
                    // !Poner cuando solucionemos ssl --> onClick={handlePopupHelpShow}
                    onClick={handlePopupHelpShow}
                  />
                </div>
                <div className="grid-item">
                  {/*  <p>{usuarioState!.user?.Configuracion.MensajeCentral}</p> */}
                </div>
              </div>
            </Item>
          </Box>

          <Popover
            target="#link4"
            position="top"
            width={300}
            closeOnOutsideClick={false}
            visible={withShadingOptionsVisible}
            onHiding={handlePopoverInfoHide}
            shading={true}
            shadingColor="rgba(0, 0, 0, 0.5)"
          >
            <ToolbarItem
              options={buttonUserOptions}
              widget="dxButton"
              location="after"
            />
            {selectorTemas()}
            {incioSesion()}
            {datosUsuario()}
            {panelUsuario()}

            <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
              <Item ratio={1}>
                <div>
                  <Button
                    onClick={(event: any) => {
                      localStorage['recordarUsuario'] = 'false'
                      localStorage.removeItem('user')
                      history.push('/expedientePage')
                      window.location.reload()
                    }}
                  >
                    Cerrar Sesión
                  </Button>
                </div>
              </Item>
              <Item ratio={1}>
                <div>{linksAcercaDe()}</div>
              </Item>
            </Box>
          </Popover>
        </div>
      ) : undefined}
      {wikiPopUp()}
      <Popup
        visible={popUpHelpVisible}
        onHiding={handlePopupHelpHide}
        dragEnabled={true}
        closeOnOutsideClick={false}
        showTitle={true}
        title="Ayuda"
        resizeEnabled={true}
        showCloseButton={false}
        width="98%"
        height="98%"
      >
        <ToolbarItem
          options={buttonOptions}
          widget="dxButton"
          location="after"
        />
      </Popup>
    </>
  )
}

export default createMenuGenericComponent
