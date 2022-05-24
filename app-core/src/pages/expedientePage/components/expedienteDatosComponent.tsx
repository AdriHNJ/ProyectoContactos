import { Form } from 'devextreme-react'
import { GroupItem, SimpleItem } from 'devextreme-react/form'
import React from 'react'
import { useSelector } from 'react-redux'
import { ColumnModel } from 'shared-models'
import GenericFormComponent from '../../../components/form/itemComponent'
import { RootState } from '../../../redux/combineReducers'

function ExpedienteDatos() {
  const expedienteState = useSelector((state: RootState) => state.expediente)
  return (
    <>
      {expedienteState.expediente != null ? (
        <GenericFormComponent
          fields={expedienteState.expediente}
          // range={{ start: null, end: 'Nomtransmitente' }}
        ></GenericFormComponent>
      ) : // <div className={'content-block  responsive-paddings'}>

      null}
    </>
  )
}

export default ExpedienteDatos
