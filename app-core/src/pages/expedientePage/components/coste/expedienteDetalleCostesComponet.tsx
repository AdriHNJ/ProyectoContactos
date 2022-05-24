import React from 'react'
import { useSelector } from 'react-redux'
import GenericFormComponent from '../../../../components/form/itemComponent'
import { RootState } from '../../../../redux/combineReducers'

function ExpedienteDetalleCostesComponent() {
  const expedienteState = useSelector((state: RootState) => state.expediente)

  return (
    <>
      {expedienteState.coste != null ? (
        <GenericFormComponent
          fields={expedienteState.coste}
          // range={{ start: 'Totsuplidos', end: 'Referencia' }}
        ></GenericFormComponent>
      ) : null}
    </>
  )
}

export default ExpedienteDetalleCostesComponent
