import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react'

import { useNavigation } from '../../contexts/navigation'
import { useScreenSize } from '../../utils/media-query'
import './side-navigation-menu.scss'
import * as events from 'devextreme/events'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import SelectBox from 'devextreme-react/select-box'
import { CambiarTema } from 'shared-services'
import Button from 'devextreme-react/button'
import { dataSourceTemas } from './dataSourceTemas'
import { useHistory } from 'react-router-dom'
import { Popup, ToolbarItem } from 'devextreme-react/popup'
import ScrollView from 'devextreme-react/scroll-view'
import { isModuloAllowed, modulos } from '../../utils/allowModuloUtil'

interface MenuStatus {
  Closed: 1
  Opened: 2
  TemporaryOpened: 3
}
export default function SideNavigationMenu(props: any) {
  const {
    children,
    openMenu,
    closeMenu,
    compactMode,
    menuStatus,
  }: {
    children: any
    selectedItemChanged: any
    openMenu: any
    closeMenu: any
    compactMode: any
    onMenuReady: any
    menuStatus: MenuStatus
    setMenuStatus: any
    menuStatusHandler: any
  } = props

  const { isLarge } = useScreenSize()
  const [popUpThemes, setPopUpThemes] = useState(false)
  const [popUpHelpVisible, setPopUpHelpVisible] = useState(false)
  const userState = useSelector((state: RootState) => state.user)
  const [displayItemsMenu, setDisplayItemsMenu] = useState('flex')
  const displayItemHandler = () => {
    if (compactMode) {
      setDisplayItemsMenu('none')
    } else {
      setDisplayItemsMenu('flex')
    }
    return displayItemsMenu
  }

  const usuarioState = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const handlePopupThemesShow = () => {
    setPopUpThemes(true)
  }
  const handlePopupThemesHide = () => {
    setPopUpThemes(false)
  }
  // Pop Up Ayudas
  const handlePopupHelpShow = () => {
    setPopUpHelpVisible(true)
  }
  const handlePopupHelpHide = () => {
    setPopUpHelpVisible(false)
  }
  const buttonToolbarThemesOptions = {
    icon: 'close',
    onClick: function () {
      handlePopupThemesHide()
    },
  }
  const buttonToolbarHelpOptions = {
    icon: 'close',
    onClick: function () {
      handlePopupHelpHide()
    },
  }

  const navigation = [
    {
      text: 'Aplicaciones',
    },

    {
      text: 'Home',
      path: '/home',
      icon: 'home',
    },

    {
      text: 'Examples',
      icon: 'folder',
      items: [
        {
          text: 'Profile',
          path: '/profile',
        },
        {
          text: 'Tasks',
          path: '/tasks',
        },
      ],
    },
  ]

  function normalizePath() {
    return navigation.map((item) => {
      if (item.path && !/^\//.test(item.path)) {
        item.path = `/${item.path}`
      }
      return { ...item, expanded: isLarge }
    })
  }

  const items = useMemo(
    normalizePath,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const {
    navigationData: { currentPath },
  } = useNavigation() as any

  const treeViewRef: any = useRef()
  const wrapperRef = useRef()
  const getWrapperRef = useCallback(
    (element) => {
      const prevElement = wrapperRef.current
      if (prevElement) {
        events.off(prevElement, 'dxclick')
      }

      wrapperRef.current = element
      events.on(element, 'dxclick', (e: any) => {
        // openMenu(e)
        closeMenu(e)
      })
    },
    [openMenu],
  )

  useEffect(() => {
    const treeView = treeViewRef.current && treeViewRef.current.instance
    if (!treeView) {
      return
    }

    if (currentPath !== undefined) {
      treeView.selectItem(currentPath)
      treeView.expandItem(currentPath)
    }

    if (compactMode) {
      treeView.collapseAll()
    }
  }, [, /* currentPath */ compactMode])
  function addIconClass(className: string, newClassName: string) {
    var testarray = document.querySelector(className)
    console.log('Elementos', testarray)
    /*  for (var i = 0; i < testarray!.length; i++) {
      testarray[i].className += newClassName;
    } */
  }

  return (
    <div
      className={
        'dx-swatch-additional side-navigation-menu dx-theme-background-color '
      }
      // style={{height:"100vh"}}
      ref={getWrapperRef}
      id={'panelList'}
    >
      {children}
      <ScrollView>
        <div
          className={'menu-container'}
          style={menuStatus ? { marginLeft: '-1em' } : { marginLeft: '-3em' }}
        >
          <div className="panel-list " style={{ marginLeft: '3em' }}>
            <div className="">
              <Button
                //width={120}
                text={menuStatus ? 'Inicio' : ''}
                hint="Inicio"
                icon="home"
                type="normal"
                stylingMode="text"
                style={{ fontWeight: 'bold' }}
                onClick={(e) => {
                  history.push('/expedientePage')
                  closeMenu(e)
                }}
              ></Button>
            </div>

            <div className="rect demo-dark">
              {!compactMode ? (
                <h5
                  style={{
                    fontWeight: 'bold',
                    marginBottom: '0',
                  }}
                >
                  APLICACIONES
                </h5>
              ) : null}
              {/*
              <div> <Button
                  text={menuStatus ? 'Contactos' : ''}
                  hint="Contactos"
                  icon="user"
                  type="normal"
                  stylingMode="text"
                  style={{ fontWeight: 'bold', margin: '0' }}
                  onClick={(e) => {
                    history.push('/expedientePage')
                    closeMenu(e)
                  }}
                ></Button>
              </div>
                */}
              <div> <Button
                  text={menuStatus ? 'Contactos' : ''}
                  hint="Contactos"
                  icon="user"
                  type="normal"
                  stylingMode="text"
                  style={{ fontWeight: 'bold', margin: '0' }}
                  onClick={(e) => {
                    history.push('/AddContactos')
                    closeMenu(e)
                  }}
                ></Button>
                </div>
            </div>

            {isModuloAllowed(userState!.user!, modulos.ADMINISTRACION) ? (
              <div className="rect demo-dark">
                <div>
                </div>
                <div>
                  
                </div>
              </div>
            ) : null}

            <div className="rect demo-dark">
              {!compactMode ? (
                <h5 style={{ fontWeight: 'bold', marginBottom: '0' }}>
                  CONFIGURACIÓN
                </h5>
              ) : null}
              <div></div>
              <div></div>
              <div>
                <Button
                  //width={220}

                  text={menuStatus ? 'Tema' : ''}
                  hint="Tema"
                  icon="palette"
                  type="normal"
                  stylingMode="text"
                  style={{ fontWeight: 'bold' }}
                  onClick={(e) => {
                    handlePopupThemesShow()
                    closeMenu(e)
                  }}
                ></Button>
              </div>
            </div>
            <div className="rect demo-dark"></div>
          </div>
          <Popup
            visible={popUpThemes}
            onHiding={handlePopupThemesHide}
            dragEnabled={true}
            closeOnOutsideClick={false}
            showTitle={true}
            title="Selección de Tema"
            resizeEnabled={true}
            showCloseButton={false}
            width="70vw"
            height="20vh"
          >
            <ToolbarItem
              options={buttonToolbarThemesOptions}
              widget="dxButton"
              location="after"
            />
            <div>
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
                  window.location.reload()
                }}
              />
            </div>
          </Popup>
        </div>
      </ScrollView>
    </div>
  )
}
