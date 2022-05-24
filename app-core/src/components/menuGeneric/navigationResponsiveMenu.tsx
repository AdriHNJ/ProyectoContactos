import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import { Menu } from 'devextreme-react'
import { useHistory } from 'react-router-dom'
function NavigationResponsiveMenu(): ReactElement {
  //usuario
  const usuarioState = useSelector((state: RootState) => state.user)
  const history = useHistory()
  const menuItems: any[] = [
    /* {
      name: "Expedientes",
      page: "expedientePage",
    },
    {
      name: "Peticiones Web",
      disabled: true,
      items: [
        { name: "Informes de vehículos", price: 220, page: "expedientePage" },
        { name: "Justificantes Profesionales", price: 270, page: "page1" },
        { name: "Provisionales de Matriculación", price: 270, page: "page1" },
      ],
    },
    {
      name: "Tickets",
      page: "expedientePage",
      disabled: true,
    },
    {
      name: "Calculadora",
      url:
        "https://portal.elgestor.com/CalculadoraIntro.aspx?Id=" +
        usuarioState!.user?.CodigoCalculadora,
    }, */
    {
      name: 'Acerca de',

      /*      items: [
        {
          name: 'Política de privacidad y cookies',
          url:
            usuarioState!.user?.Configuracion.LinkCookies === null
              ? ''
              : usuarioState!.user?.Configuracion.LinkCookies,
        },
        {
          name: ' Aviso Legal',
          url:
            usuarioState!.user?.Configuracion.LinkCookies === null
              ? ''
              : usuarioState!.user?.Configuracion.LinkCookies,
        },
        {
          name: 'Reglamento General de Protección de Datos',
          url:
            usuarioState!.user?.Configuracion.LinkCookies === null
              ? ''
              : usuarioState!.user?.Configuracion.LinkCookies,
        },
      ],*/
    },
  ]
  const myEvent = (itemData: any) => {
    if (itemData.url != undefined) {
      window.open(itemData.url, '_blank')
      // window.location.href = itemData.url;
    } else {
      history.push(itemData.page)
    }
  }
  return (
    <div>
      <Menu
        //dataSource={this.products}

        items={menuItems}
        displayExpr="name"
        showFirstSubmenuMode="onHover"
        orientation="vertical"
        //submenuDirection={submenuDirection}
        //hideSubmenuOnMouseLeave={hideSubmenuOnMouseLeave}
        //onItemClick={() => myEvent(event: dxElement)}
        onItemClick={(event: any) => {
          myEvent(event.itemData)
        }}
      ></Menu>
    </div>
  )
}

export default NavigationResponsiveMenu
