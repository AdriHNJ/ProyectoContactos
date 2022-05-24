import React, { ReactElement } from 'react'
import ExpedienteVehiculosDatos from './vehiculo/expedienteVehiculoDatos'
import ExpedienteDatos from './expedienteDatosComponent'
import ExpedienteeInfoTabs from './expedienteInfoTabs'
import Box, { Item } from 'devextreme-react/box'
import ExpedienteDetalleCostesComponent from './coste/expedienteDetalleCostesComponet'
import { ExpedienteInfoProps } from '../interface/ExpedienteInfoPropsInterface'

function ExpedienteInfo(): ReactElement {
  return (
    <>
      <React.Fragment>
        <div className={'content-block  responsive-paddings'}>
          <div className={'content-block'}>
            <Box direction="row" width="100%" height="50%">
              <Item ratio={1}>
                <div style={{ borderBottomStyle: 'solid' }}>
                  Detalles Expediente
                </div>
              </Item>
            </Box>
            <br></br>
            <ExpedienteDatos></ExpedienteDatos>
            <br></br>
            <Box direction="row" width="100%" height="50%">
              <Item ratio={1}>
                <div style={{ borderBottomStyle: 'solid' }}>
                  Detalles Costes
                </div>
              </Item>
            </Box>
            <ExpedienteDetalleCostesComponent></ExpedienteDetalleCostesComponent>
            <br></br>

            <br></br>
            <Box direction="row" width="100%" height="50%">
              <Item ratio={1}>
                <div style={{ borderBottomStyle: 'solid' }}>
                  Detalles del Vehículo
                </div>
              </Item>
            </Box>
            <ExpedienteVehiculosDatos></ExpedienteVehiculosDatos>
            <br></br>
            <div style={{ height: '20em' }}>
              <ExpedienteeInfoTabs></ExpedienteeInfoTabs>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}

export default ExpedienteInfo
