import React from 'react'
import { useSelector } from 'react-redux'
import GenericFormComponent from '../../../../components/form/itemComponent'
import { RootState } from '../../../../redux/combineReducers'

function ExpedienteVehiculosDatos() {
  const expedienteState = useSelector((state: RootState) => state.expediente)
  return (
    <>
      {expedienteState.vehiculo != null ? (
        <GenericFormComponent
          fields={expedienteState.vehiculo}
          // range={{ start: 'Matricula', end: 'Proceso' }}
        ></GenericFormComponent>
      ) : null}
    </>
  )
}

export default ExpedienteVehiculosDatos
