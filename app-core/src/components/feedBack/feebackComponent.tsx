import React, { ReactElement } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import html2canvas from 'html2canvas'
import { Button, Popover, ScrollView, TextArea } from 'devextreme-react'
import { checkScreenSize } from 'shared-utils'

import { Checkbox, FormControlLabel } from '@material-ui/core'

import './feedbackComponent.css'
import { UserModel } from '../../models/usuario/userModel'
import { feedBackCall } from './services/feedbackService'
type FeedBackProps = {
  user: UserModel
  isLoggedIn: Boolean | undefined
}
function FeedBack({ user, isLoggedIn }: FeedBackProps): ReactElement {
  const [withShadingOptionsVisible, showWithShadingOptions] = useState(false)
  const [incidencia, setIncidencia] = useState('')
  const [checkedScreenShotIsTrue, setcheckedScreenShotIsTrue] = useState(false)

  const onIncidenciaChange = (e: any) => {
    setIncidencia(e.value)
  }
  const reportarError = () => {
    handlePopoverInfoHide()
    //captura de pantalla
    let elemento = document.getElementsByTagName('body')[0]
    setTimeout(function () {
      html2canvas(elemento, { scrollY: -window.scrollY }).then(function (
        canvas,
      ) {
        var img = canvas.toDataURL('image/jpeg').split(';base64,')[1]
        if (checkedScreenShotIsTrue) {
          feedBackCall(incidencia, img, user)
        } else {
          feedBackCall(incidencia, '', user)
        }
      })
    }, 5000)
    //Limpio El mensaje.
    setIncidencia('')
  }

  const handlePopoverInfoShow = () => {
    showWithShadingOptions(!withShadingOptionsVisible)
  }
  const handlePopoverInfoHide = () => {
    showWithShadingOptions(false)
  }
  const styles = {
    buttonStyle: {
      // backgroundColor: '#fc454e',
      width: 'auto',
      height: 'auto',
      borderRadius: 13,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      // bottom: 20,
      right: 20,
      zIndex: '1600',
      textAlign: 'center',

      //display: "none",
    },
    buttonStyleMobile: {
      // backgroundColor: '#fc454e',
      width: 'auto',
      height: 'auto',
      borderRadius: 13,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: 20,
      right: 20,
      zIndex: '1600',
      textAlign: 'center',
      //  display: "none",
    },
  }

  return (
    <>
      {isLoggedIn === true ? (
        <>
          <div id="ContenedorFeedBack" /*className="grid-item"*/>
            <Button
              id="link5"
              style={
                checkScreenSize()
                  ? styles.buttonStyle
                  : styles.buttonStyleMobile
              }
              text="Enviar Comentarios"
              type="success"
              stylingMode="contained"
              onClick={handlePopoverInfoShow}
            />

            <Popover
              target="#link5"
              position="left"
              width={'auto'}
              height={'auto'}
              visible={withShadingOptionsVisible}
              onHiding={handlePopoverInfoHide}
              dragEnabled={true}
              closeOnOutsideClick={true}
              showTitle={true}
              title=" "
            >
              <ScrollView
                id="scrollviewFeedBack"
                bounceEnabled={true}
                showScrollbar={'onScroll'}
              >
                <form>
                  <div className="item">
                    <TextArea
                      defaultValue={incidencia}
                      value={incidencia}
                      showClearButton={true}
                      placeholder="Escriba aquí..."
                      valueChangeEvent="keyup"
                      id="Incidencia"
                      className="Incidencia"
                      name="Incidencia"
                      onValueChanged={onIncidenciaChange}
                      autoResizeEnabled={true}
                      minHeight={200}
                      maxHeight={600}
                      style={{ maxWidth: 300, minWidth: 200 }}
                    ></TextArea>
                  </div>
                  <div className="item">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => {
                            setcheckedScreenShotIsTrue(!checkedScreenShotIsTrue)
                          }}
                          color="primary"
                          checked={checkedScreenShotIsTrue}
                          value="remember"
                        />
                      }
                      label="Enviar captura"
                    />
                  </div>
                  <div className="item">
                    <Button
                      text="Enviar"
                      type="default"
                      stylingMode="contained"
                      onClick={reportarError}
                      style={{ backgroundColor: '#64B5F6' }}
                    />
                  </div>
                </form>
              </ScrollView>
            </Popover>
          </div>
        </>
      ) : null}
    </>
  )
}

export default FeedBack
