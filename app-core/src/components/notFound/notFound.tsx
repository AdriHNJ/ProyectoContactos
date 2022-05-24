import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import './notFound.css'
import { isAlreadyLoggedUser } from '../../redux/utils/reduxUtils'
import { Button } from 'devextreme-react'
function NotFound(config: any): ReactElement {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <div>
      {config.data.type == 1 ? (
        <div className="mainNotfound">
          <div /* className="message-box" */>
            <h1>¡Ops!</h1>
            <h3> No tienes permisos para ver esta página.</h3>

            <div>
              <Button
                width={120}
                text="Volver"
                type="default"
                stylingMode="contained"
                onClick={() => {
                  history.goBack()
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {' '}
          <div>
            <h1>¡Ops!</h1>
            <h3> Pagina no encontrada...</h3>
            <p>(404)</p>
            <div>
              <Button
                width={120}
                text="Volver"
                type="default"
                stylingMode="contained"
                onClick={() => {
                  history.goBack()
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotFound
