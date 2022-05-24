import React from 'react'
import Toolbar, { Item } from 'devextreme-react/toolbar'
import Button from 'devextreme-react/button'
import UserPanel from '../user-panel/user-panel'
import './header.scss'
import { Template } from 'devextreme-react/core/template'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import { useScreenSize } from '../../utils/media-query'

export default ({
  menuToggleEnabled,
  title,
  toggleMenu,
  userState,
  menuStatus,
  company,
}: {
  menuToggleEnabled: any
  title: any
  toggleMenu: any
  userState: any
  menuStatus: any
  company: any
}) => {
  const { isLarge, isXSmall } = useScreenSize()
  return (
    <header className={'header-component'}>
      <Toolbar className={'header-toolbar'}>
        <Item
          visible={menuToggleEnabled}
          location={'before'}
          widget={'dxButton'}
          cssClass={'menu-button'}
        >
          <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
        </Item>
        <Item
          location={'before'}
          cssClass={'header-title'}
          text={title}
          visible={!!title}
        />

        <Item
          location={'before'}
          cssClass={'header-title'}
          /* visible={!menuStatus} */
        >
          {company?.PrincipalLogo != undefined ? (
            <img
              //GOODLOGO
              src={`data:image/jpeg;base64,${company?.PrincipalLogo}`}
              style={
                isXSmall
                  ? {
                      height: 'auto',
                      maxWidth: '100px',
                      maxHeight: '50px',
                      marginTop: '-5%',
                    }
                  : {
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '146px',
                      maxHeight: '50px',
                      marginTop: '-5%',
                    }
              }
              alt=""
            />
          ) : null}
        </Item>
        <Item
          location={'before'}
          cssClass={'header-title'}
          /* visible={!menuStatus} */
        >
          {company?.SecondaryLogo != undefined ? (
            <img
              //GOODLOGO
              src={`data:image/jpeg;base64,${company?.SecondaryLogo}`}
              style={
                isXSmall
                  ? {
                      height: 'auto',
                      maxWidth: '100px',
                      maxHeight: '50px',
                      marginTop: '-5%',
                    }
                  : {
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '146px',
                      maxHeight: '50px',
                      marginTop: '-5%',
                    }
              }
              alt=""
            />
          ) : null}
        </Item>
        <Item location={'after'} visible={isLarge ? true : false}>
          <div
            style={{
              fontWeight: 'bold',
            }}
          >
            {company?.Slogan}
          </div>
        </Item>
        <Item location={'after'}>
          <div></div>
        </Item>
        <Item
          location={'after'}
          locateInMenu={'auto'}
          menuItemTemplate={'userPanelTemplate'}
          cssClass={'userItem'}
        >
          <Button
            className={'user-button authorization'}
            width={210}
            height={'100%'}
            stylingMode={'text'}
          >
            <UserPanel menuMode={'context'} />
          </Button>
        </Item>
        <Template name={'userPanelTemplate'}>
          <UserPanel menuMode={'list'} />
        </Template>
      </Toolbar>
    </header>
  )
}
