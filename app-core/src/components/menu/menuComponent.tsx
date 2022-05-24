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
function MenuComponent(): ReactElement {
  const [withShadingOptionsVisible, showWithShadingOptions] = useState(false)
  const [popUpHelpVisible, setPopUpHelpVisible] = useState(false)
  //const configState = useSelector((state: RootState) => state.config);
  // const { isLatestVersion, emptyCacheStorage } = useClearCache();
  //hora de inicio de sesión
  var d = new Date()
  var horaInicioSesion =
    ('0' + d.getDate()).slice(-2) +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    d.getFullYear() +
    ' ' +
    ('0' + d.getHours()).slice(-2) +
    ':' +
    ('0' + d.getMinutes()).slice(-2)

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
  const menuItems: any[] = [
    {
      name: 'Acerca de',
      /* disabled: true, */
      // items: [ Links
      //   {
      //     name: 'Política de privacidad y cookies',
      //     url:
      //       usuarioState!.user?.Configuracion.LinkCookies === null
      //         ? ''
      //         : usuarioState!.user?.Configuracion.LinkCookies,
      //   },
      //   {
      //     name: ' Aviso Legal',
      //     url:
      //       usuarioState!.user?.Configuracion.LinkCookies === null
      //         ? ''
      //         : usuarioState!.user?.Configuracion.LinkCookies,
      //   },
      //   {
      //     name: 'Reglamento General de Protección de Datos',
      //     url:
      //       usuarioState!.user?.Configuracion.LinkCookies === null
      //         ? ''
      //         : usuarioState!.user?.Configuracion.LinkCookies,
      //   },
      // ],
    },
  ]
  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      try {
      } catch (e) {}
    }
    fetchData()
  }, [])

  const myEvent = (itemData: any) => {
    if (itemData.url != undefined) {
      window.open(itemData.url, '_blank')
      // window.location.href = itemData.url;
    } else {
      history.push(itemData.page)
    }
  }

  interface ISelectInterface {
    ID: string
    Name: string
  }

  const dataSource = new DataSource({
    store: {
      data: [
        {
          ID: 'generic.light',
          Name: 'light',
        },
        {
          ID: 'generic.dark',
          Name: 'dark',
        },
        {
          ID: 'generic.carmine',
          Name: 'carmine',
        },
        {
          ID: 'generic.softblue',
          Name: 'softblue',
        },
        {
          ID: 'generic.darkmoon',
          Name: 'darkmoon',
        },
        {
          ID: 'generic.darkviolet',
          Name: 'darkviolet',
        },
        {
          ID: 'generic.greenmist',
          Name: 'greenmist',
        },
        {
          ID: 'generic.contrast',
          Name: 'contrast',
        },
        {
          ID: 'generic.light.compact',
          Name: 'light compact',
        },
        {
          ID: 'generic.dark.compact',
          Name: 'dark compact',
        },
        {
          ID: 'generic.carmine.compact',
          Name: 'carmine compact',
        },
        {
          ID: 'generic.softblue.compact',
          Name: 'softblue compact',
        },
        {
          ID: 'generic.darkmoon.compact',
          Name: 'darkmoon compact',
        },
        {
          ID: 'generic.darkviolet.compact',
          Name: 'darkviolet compact',
        },
        {
          ID: 'generic.greenmist.compact',
          Name: 'greenmist compact',
        },
        {
          ID: 'generic.contrast.compact',
          Name: 'contrast compact',
        },
        {
          ID: 'material.blue.light',
          Name: 'material blue light',
        },
        {
          ID: 'material.blue.dark',
          Name: 'material blue dark',
        },
        {
          ID: 'material.lime.light',
          Name: 'material lime light',
        },
        {
          ID: 'material.lime.dark',
          Name: 'material lime dark',
        },
        {
          ID: 'material.orange.light',
          Name: 'material orange light',
        },
        {
          ID: 'material.orange.dark',
          Name: 'material orange dark',
        },
        {
          ID: 'material.purple.light',
          Name: 'material purple light',
        },
        {
          ID: 'material.purple.dark',
          Name: 'material purple dark',
        },
        {
          ID: 'material.teal.light',
          Name: 'material teal light',
        },
        {
          ID: 'material.teal.dark',
          Name: 'material teal dark',
        },
        {
          ID: 'material.blue.light.compact',
          Name: 'material blue light compact',
        },
        {
          ID: 'material.blue.dark.compact',
          Name: 'material blue dark compact',
        },
        {
          ID: 'material.lime.light.compact',
          Name: 'material lime light compact',
        },
        {
          ID: 'material.lime.dark.compact',
          Name: 'material lime dark compact',
        },
        {
          ID: 'material.orange.light.compact',
          Name: 'material orange light compact',
        },
        {
          ID: 'material.orange.dark.compact',
          Name: 'material orange dark compact',
        },
        {
          ID: 'material.purple.light.compact',
          Name: 'material purple light compact',
        },

        {
          ID: 'material.purple.light.compact',
          Name: 'material purple light compact',
        },
        {
          ID: 'material.purple.dark.compact',
          Name: 'material purple dark compact',
        },
        {
          ID: 'material.teal.light.compact',
          Name: 'material teal light compact',
        },
        {
          ID: 'material.teal.dark.compact',
          Name: 'material teal dark compact',
        },
      ],
      type: 'array',
      key: 'ID',
    },
    //group: "Category",
  })

  /* let dataIdiomas: ISelectInterface[] = [
    {
      ID: "es-ES",
      Name: "Español",
    },
    {
      ID: "en-GB",
      Name: "Ingles",
    },
  ]; */

  var shadow = {
    borderBottom: '2pt solid gray',
  }
  var logo = {
    width: 'auto',
    height: 'auto',
    maxWidth: '160px',
    maxHeight: '90px',
  }
  var margintop = {
    marginTop: '3%',
  }
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
  return (
    <>
      {usuarioState!.isLoggedIn === true ? (
        <div>
          <Box
            className="menuStyle"
            direction="row"
            width="100%"
            style={shadow}
          >
            {/* {!!usuarioState!.user?.Configuracion.Logo1 ? (
              <Item ratio={1} baseSize="6%">
                <div style={margintop}>
                  <img
                    src={usuarioState!.user?.Configuracion.Logo1}
                    style={logo}
                    alt=""
                  />
                </div>
              </Item>
            ) : null} */}

            <Item ratio={1} baseSize="6%">
              <div style={margintop}>
                <img
                  //GOODLOGO
                  // src={`data:image/jpeg;base64,${
                  //   JSON.parse(localStorage.getItem('parentCompany')!)[
                  //     'PrincipalLogo'
                  //   ]
                  // }`}
                  style={logo}
                  alt=""
                />
              </div>
            </Item>

            {/* {!!usuarioState!.user?.Configuracion.Logo2 ? (
              <Item ratio={1} baseSize="6%">
                <div style={margintop}>
                  <img
                    src={usuarioState!.user?.Configuracion.Logo2}
                    style={logo}
                    alt=""
                  />
                </div>
              </Item>
            ) : null} */}

            <Item ratio={1} baseSize="6%">
              <div style={margintop}>
                <img
                  //GOODLOGO
                  // src={`data:image/jpeg;base64,${
                  //   JSON.parse(localStorage.getItem('parentCompany')!)[
                  //     'SecondaryLogo'
                  //   ]
                  // }`}
                  style={logo}
                  alt=""
                />
              </div>
            </Item>

            <Item ratio={3}>
              <div style={margintop}></div>
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
                {/* <div className="grid-item">
                  <p>{usuarioState!.user?.Configuracion.MensajeCentral}</p>
                </div> */}
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
            <Box>
              <Item ratio={1}>
                <label>
                  <b>Tema</b>
                </label>
                <SelectBox
                  dataSource={dataSource}
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
                      usuarioState!.user!,
                      `testUser`, //usuarioState!.user?.UserName!,
                      themeSelect,
                    ).then((response) => {
                      //alert(response);
                      const updateUserConfig = {
                        Tema: response,
                        Logo1: JSON.parse(
                          localStorage.getItem('parentCompany')!,
                        )['PrincipalLogo'],
                        Logo2: JSON.parse(
                          localStorage.getItem('parentCompany')!,
                        )['SecondaryLogo'],
                        MensajeCentral: `testMensajeCentral`, //usuarioState?.user?.Configuracion.MensajeCentral,
                        LinkLegal: `testLinkLegal`, //usuarioState?.user?.Configuracion.LinkLegal,
                        LinkCookies: `testLinkCookies`, //usuarioState?.user?.Configuracion.LinkCookies,
                        LinkRgpd: `testLinkRgpd`, //usuarioState?.user?.Configuracion.LinkRgpd,
                      } as ConfigModel
                      dispatch(addUpdateTheme(updateUserConfig))

                      window.location.reload()
                    })
                  }}
                />
              </Item>
            </Box>
            <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
              <Item ratio={1}>
                <div>
                  {' '}
                  <i className="dx-icon-clock"></i> {horaInicioSesion}
                </div>
              </Item>
            </Box>
            <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
              <Item ratio={1}>
                {/* <div>Usuario: {usuarioState!.user?.UserName}</div> */}
                <div>Usuario: UserNameTest</div>
              </Item>
            </Box>
            <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
              <Item ratio={1}>
                {/* <div>Tipo de Usuario: {usuarioState!.user?.Rol}</div> */}
                <div>Tipo de Usuario: RolTest</div>
              </Item>
            </Box>
            {/* <hr /> */}

            <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
              <Item ratio={1}>
                {/* <div className="dx-field-label">Administración</div> */}
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
                          //usuarioState?.user?.CodigoCalculadora,
                          '_blank',
                      )
                    }
                  />
                </div>
              </Item>
            </Box>
            <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
              <Item ratio={1}>
                <div>
                  <Button
                    onClick={(event: any) => {
                      //emptyCacheStorage();
                      //Logout();

                      localStorage['recordarUsuario'] = 'false'
                      localStorage.removeItem('user')
                      history.push('/expedientePage')
                      window.location.reload()
                      //history.push("/login");
                    }}
                  >
                    Cerrar Sesión
                  </Button>
                </div>
              </Item>
              <Item ratio={1}>
                <div>
                  <Menu
                    // style={margintop}
                    //dataSource={this.products}
                    items={menuItems}
                    displayExpr="name"
                    showFirstSubmenuMode="onHover"
                    orientation="horizontal"
                    onItemClick={(event: any) => {
                      myEvent(event.itemData)
                    }}
                  />
                </div>
              </Item>
            </Box>
          </Popover>
        </div>
      ) : undefined}
      {
        // ! LOADER GENERICO usa la constante configState
      }
      {/*     <LoadPanel
        id="genericLoadPanel"
        shadingColor="rgba(192,192,192,0.96)" //rgba(192,192,192,0.9)
        position="center"
        // onHiding={ocultarLoader}
        visible={configState.visibleLoader}
        showIndicator={true}
        shading={true}
        showPane={true}
        closeOnOutsideClick={false}
      /> */}
      {
        // ! FIN LOADER GENERICO
      }

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

        <Iframe
          url="https://wiki.ruano.com/index.php?title=Portal:_%C3%8Dndice"
          width="100%"
          height="100%"
          id="myId"
          className="myClassname"
          display="block"
          position="relative"
        />
      </Popup>
    </>
  )
}

export default MenuComponent
