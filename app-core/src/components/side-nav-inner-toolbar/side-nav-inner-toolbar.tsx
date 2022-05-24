import Button from 'devextreme-react/button'
import Drawer from 'devextreme-react/drawer'

import Toolbar, { Item } from 'devextreme-react/toolbar'
import React, { useState, useCallback, useRef } from 'react'
import { useHistory } from 'react-router'
import { Footer } from '../../components'
import './side-nav-inner-toolbar.scss'
import '../../utils/patches.scss'
import { useScreenSize } from '../../utils/media-query'
import { Template } from 'devextreme-react/core/template'

import SideNavigationMenu from '../side-navigation-menu/side-navigation-menu'
import { Header } from '..'

import { RootState } from '../../redux/combineReducers'

import { useMenuPatch } from '../../utils/patches'

export default function SideNavbarInner({
  title,
  children,
}: {
  title?: any
  children: any
}) {
  const scrollViewRef: any = useRef()
  const history = useHistory()
  const { isXSmall, isLarge } = useScreenSize()
  const [patchCssClass, onMenuReady] = useMenuPatch()
  const [menuStatus, setMenuStatus] = useState(
    isLarge ? MenuStatus.Closed : MenuStatus.Closed,
  )
  /*   const [menuStatus, setMenuStatus] = useState(
    isLarge ? MenuStatus.Opened : MenuStatus.Closed
  ); */
  const [visibilityLogos, setVisibilityLogos] = useState('')

  //usuario
  /*   const usuarioState = useSelector((state: RootState) => state.user)
  const company = useSelector(
    (state: RootState) => state.company?.parentCompany,
  ) */
  const toggleMenu = useCallback(({ event }) => {
    setMenuStatus((prevMenuStatus) =>
      prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.Opened
        : MenuStatus.Closed,
    )

    event.stopPropagation()
  }, [])

  const temporaryOpenMenu = useCallback(() => {
    setMenuStatus((prevMenuStatus) =>
      prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.TemporaryOpened
        : prevMenuStatus,
    )
  }, [])
  const temporaryClosedMenu = useCallback(() => {
    setMenuStatus(MenuStatus.Closed)
  }, [])

  const onOutsideClick = useCallback(() => {
    setMenuStatus((prevMenuStatus) =>
      prevMenuStatus !== MenuStatus.Closed && !isLarge
        ? MenuStatus.Closed
        : prevMenuStatus,
    )

    return isLarge
  }, [isLarge])

  const onNavigationChanged = useCallback(
    ({ itemData: { path }, event, node }) => {
      if (menuStatus === MenuStatus.Closed || !path || node.selected) {
        event.preventDefault()
        return
      }

      history.push(path)
      scrollViewRef.current!.instance.scrollTo(0)

      if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
        setMenuStatus(MenuStatus.Closed)
        event.stopPropagation()
      }
    },
    [history, menuStatus, isLarge],
  )

  var logo1 = {
    width: 'auto',
    height: 'auto',
    maxWidth: '220px',
    maxHeight: '120px',
    //align: "right",
    marginLeft: '1em',
    marginTop: '0.2em',
    Visibility: menuStatus === MenuStatus.Closed ? 'hidden' : 'visible',
  }

  var logo2 = {
    width: 'auto',
    height: 'auto',
    maxWidth: '160px',
    maxHeight: '90px',
    align: 'right',
    marginLeft: '3em',
    marginTop: '0.2em',
  }

  return (
    <div className={'side-nav-inner-toolbar'}>
      <Drawer
        className={['drawer', patchCssClass].join(' ')}
        id={'drawerApp'}
        position={'before'}
        closeOnOutsideClick={onOutsideClick}
        //openedStateMode={isLarge ? 'shrink' : 'overlap'}
        openedStateMode={isLarge ? 'shrink' : 'push'}
        activeStateEnabled={true}
        hoverStateEnabled={true}
        focusStateEnabled={true}
        revealMode={isXSmall ? 'slide' : 'expand'}
        minSize={isXSmall ? 0 : 36}
        maxSize={250}
        shading={isLarge ? false : true}
        opened={menuStatus === MenuStatus.Closed ? false : true}
        template={'menu'}
      >
        <Header
          menuToggleEnabled={isXSmall}
          toggleMenu={toggleMenu}
          title=""
          userState={null}
          menuStatus={menuStatus === MenuStatus.Closed ? false : true}
          company={null}
        />

        <div className={'content'}>
          {React.Children.map(children, (item) => {
            return item.type !== Footer && item
          })}
        </div>
        <div className={'content-block'}>
          {React.Children.map(children, (item) => {
            return item.type === Footer && item
          })}
        </div>

        <Template name={'menu'}>
          <SideNavigationMenu
            compactMode={menuStatus === MenuStatus.Closed}
            selectedItemChanged={onNavigationChanged}
            openMenu={temporaryOpenMenu}
            closeMenu={temporaryClosedMenu}
            menuStatus={menuStatus === MenuStatus.Closed ? false : true}
            setMenuStatus={setMenuStatus}
            menuStatusHandler={MenuStatus}
            /*   onMenuReady={onMenuReady} */
          >
            <Toolbar
              id={'navigation-header'}
              //className={"dx-theme-accent-as-background-color"}
              //style={{ height: "6.9vh" }}
            >
              {!isXSmall && (
                <Item location={'before'} cssClass={'menu-button'}>
                  <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
                </Item>
              )}
              <Item location={'before'} cssClass={'header-title'}></Item>
            </Toolbar>
          </SideNavigationMenu>
        </Template>
      </Drawer>
    </div>
  )
}

const MenuStatus = {
  Closed: 1,
  Opened: 2,
  TemporaryOpened: 3,
}
