import React, { ReactElement, useEffect, useState } from 'react'
import './menuResponsiveComponent.css'
import { CambiarTema } from 'shared-services'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import {
  Box,
  Button,
  LoadPanel,
  Popover,
  ScrollView,
  SelectBox,
} from 'devextreme-react'
import { Item } from 'devextreme-react/box'
import DataSource from 'devextreme/data/data_source'
import { useHistory } from 'react-router-dom'
import NavigationResponsiveMenu from './navigationResponsiveMenu'
import { addUpdateTheme } from '../../pages/loginPage/redux/authActions'
import { ConfigModel } from '../../models/usuario/configModel'
import { ToolbarItem } from 'devextreme-react/popover'
function MenuResponsiveComponent(): ReactElement {
  const [opened, setOpened] = useState(false)
  const [withShadingOptionsVisible, showWithShadingOptions] = useState(false)
  const [withShadingOptionsVisible2, showWithShadingOptions2] = useState(false)
  const dispatch = useDispatch()
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
  //usuario
  const usuarioState = useSelector((state: RootState) => state.user)
  const configState = useSelector((state: RootState) => state.config)

  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      try {
      } catch (e) {}
    }
    fetchData()
  }, [])

  const handlePopoverInfoShow = () => {
    showWithShadingOptions(true)
  }
  const handlePopoverInfoShow2 = () => {
    showWithShadingOptions2(true)
  }
  const handlePopoverInfoHide = () => {
    showWithShadingOptions(false)
  }
  const handlePopoverInfoHide2 = () => {
    showWithShadingOptions2(false)
  }

  interface ISelectInterface {
    ID: string
    Name: string
  }

  const dataSource = new DataSource({
    store: {
      data: [
        {
          ID: 'light',
          Name: 'light',
        },
        {
          ID: 'dark',
          Name: 'dark',
        },
        {
          ID: 'carmine',
          Name: 'carmine',
        },
        {
          ID: 'softblue',
          Name: 'softblue',
        },
        {
          ID: 'darkmoon',
          Name: 'darkmoon',
        },
        {
          ID: 'darkviolet',
          Name: 'darkviolet',
        },
        {
          ID: 'greenmist',
          Name: 'greenmist',
        },
        {
          ID: 'contrast',
          Name: 'contrast',
        },
        {
          ID: 'light.compact',
          Name: 'light compact',
        },
        {
          ID: 'dark.compact',
          Name: 'dark compact',
        },
        {
          ID: 'carmine.compact',
          Name: 'carmine compact',
        },
        {
          ID: 'softblue.compact',
          Name: 'softblue compact',
        },
        {
          ID: 'darkmoon.compact',
          Name: 'darkmoon compact',
        },
        {
          ID: 'darkviolet.compact',
          Name: 'darkviolet compact',
        },
        {
          ID: 'greenmist.compact',
          Name: 'greenmist compact',
        },
        {
          ID: 'contrast.compact',
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

  /*  let dataIdiomas: ISelectInterface[] = [
    {
      ID: "es-ES",
      Name: "Español",
    },
    {
      ID: "en-GB",
      Name: "Ingles",
    },
  ]; */
  /*   const dataSourceIdiomas = new DataSource({
    store: {
      data: dataIdiomas,
      type: "array",
      key: "ID",
    },
    //group: "Category",
  }); */

  var shadow = {
    borderBottom: '2pt solid gray',
  }
  var logo = {
    width: 'auto',
    height: 'auto',
    maxWidth: '100px',
    maxHeight: '60px',
  }

  var margintop = {
    marginLeft: '-40%',
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
            crossAlign={opened ? 'end' : 'center'}
          >
            <Item ratio={1} baseSize={5}>
              <Button
                width={'30%'}
                id="link6"
                icon="menu"
                onClick={handlePopoverInfoShow2}
              />
            </Item>
            {/*       {!!usuarioState!.user?.Configuracion.Logo1 ? (
              <Item ratio={1}>
                <div style={margintop}>
                  <img
                    src={usuarioState!.user?.Configuracion.Logo1}
                    style={logo}
                    alt=""
                  />
                </div>
              </Item>
            ) : null} */}

            {/*       {!!usuarioState!.user?.Configuracion.Logo2 ? (
              <Item ratio={1}>
                <div style={margintop}>
                  <img
                    src={usuarioState!.user?.Configuracion.Logo2}
                    style={logo}
                    alt=""
                  />
                </div>
              </Item>
            ) : null} */}
          </Box>

          <Popover
            target="#link6"
            position="top"
            width={300}
            visible={withShadingOptionsVisible2}
            onHiding={handlePopoverInfoHide2}
            shading={true}
            shadingColor="rgba(0, 0, 0, 0.5)"
            closeOnOutsideClick={true}
          >
            <NavigationResponsiveMenu></NavigationResponsiveMenu>
            <Button id="link4" icon="user" onClick={handlePopoverInfoShow} />
            <Button
              id="HelpButton"
              icon="help"
              hint="Ayuda"
              // !Poner cuando solucionemos ssl --> onClick={handlePopupHelpShow}
              onClick={() => {
                window.open(
                  'https://wiki.ruano.com/index.php?title=Portal:_%C3%8Dndice',
                  '_blank',
                )
                const nav = document.querySelector('.p-tb')
              }}
            />
          </Popover>
          <Popover
            target="#link4"
            position="top"
            width={300}
            visible={withShadingOptionsVisible}
            onHiding={handlePopoverInfoHide}
            shading={true}
            shadingColor="rgba(0, 0, 0, 0.5)"
            closeOnOutsideClick={false}
          >
            <ToolbarItem
              options={buttonUserOptions}
              widget="dxButton"
              location="after"
            />
            <ScrollView width="100%" height="100%">
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
                    placeholder="Selecciona un tema"
                    onValueChanged={(event: any) => {
                      let themeSelect = event.value
                      window.localStorage.setItem('dx-theme', themeSelect)
                      CambiarTema(
                        usuarioState!.user!,
                        usuarioState!.user?.UserName!,
                        themeSelect,
                      ).then((response) => {
                        //alert(response);
                        /*        const updateUserConfig = {
                          Tema: response,
                          Logo1: usuarioState?.user?.Configuracion.Logo1,
                          Logo2: usuarioState?.user?.Configuracion.Logo2,
                          MensajeCentral:
                            usuarioState?.user?.Configuracion.MensajeCentral,
                          LinkLegal:
                            usuarioState?.user?.Configuracion.LinkLegal,
                          LinkCookies:
                            usuarioState?.user?.Configuracion.LinkCookies,
                          LinkRgpd: usuarioState?.user?.Configuracion.LinkRgpd,
                        } as ConfigModel
                        dispatch(addUpdateTheme(updateUserConfig)) */

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
                  <div>Usuario: {usuarioState!.user?.UserName}</div>
                </Item>
              </Box>
              <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
                <Item ratio={1}>
                  {/*   <div>Tipo de Usuario: {usuarioState!.user?.Rol}</div> */}
                </Item>
              </Box>
              <hr />
              <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
                <Item ratio={1}>
                  {/* <div className="dx-field-label">Administración</div> */}
                  <b>Administración</b>
                  <div>
                    <Button
                      icon="preferences"
                      /*  type="success" */
                      /*text="Administración"*/
                      onClick={() => {
                        history.push('Administracion')
                        handlePopoverInfoHide()
                      }}
                    />
                  </div>
                </Item>
              </Box>
              <hr />
              <Box direction="row" width="100%" style={{ marginTop: '1em' }}>
                <Item ratio={1}>
                  <b>Calculadora</b>
                  <div>
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
              <hr />
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
              </Box>
            </ScrollView>
          </Popover>
        </div>
      ) : undefined}
      {
        // ! LOADER GENERICO usa la constante
        // ?const configState
      }
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
      {
        // ! FIN LOADER GENERICO
      }
    </>
  )
}
export default MenuResponsiveComponent
