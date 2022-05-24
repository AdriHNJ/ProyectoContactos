import React from 'react'
import { RootState } from '../../../redux/combineReducers'
import { useSelector } from 'react-redux'
import { DataGrid } from 'devextreme-react'
import { Column, Scrolling } from 'devextreme-react/data-grid'
import { getColumnAlignment, getColumnType } from '../../../utils/sharedUitls'

function ExpedienteHistorialComponent() {
  const expedienteState = useSelector((state: RootState) => state.expediente)

  // var fechaInicio = true
  // var fechaFinalizado = true
  // expedienteState?.tareasPendientes?.Datos.map((valueDatos) => {
  //   fechaInicio = Math.sign(valueDatos.FechaInicio!) === -1 ? false : true
  //   fechaFinalizado = Math.sign(valueDatos.FechaFin!) === -1 ? false : true
  // })

  return (
    <>
      <DataGrid
        dataSource={expedienteState?.tareasPendientes?.Datos}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        showBorders={true}
        showRowLines={true}
        rowAlternationEnabled={true}
        focusedRowEnabled={false}
        //height={200}
      >
        <Scrolling showScrollbar="always" />
        <Column type="buttons" width={1} fixed={true} />
        {expedienteState?.tareasPendientes?.Campos != undefined
          ? expedienteState?.tareasPendientes?.Campos.map((value) => {
              return (
                <Column
                  key={value.Nombre}
                  dataField={value.Nombre}
                  caption={value.Texto}
                  //alignment={value.Tipo=="decimal"||value.Tipo=="number"?"right":"left"}
                  dataType={value.Tipo}
                  // visible={
                  //   value.Nombre === 'FechaFinalizado' ? fechaFinalizado : true
                  // }
                  format={getColumnType(value.Tipo, value.Format)}
                  alignment={getColumnAlignment(value.Tipo)}
                  visible={value.Nombre === 'Id' ? false : value.Visible}
                />
              )
            })
          : null}
      </DataGrid>
    </>
  )
}

export default ExpedienteHistorialComponent
