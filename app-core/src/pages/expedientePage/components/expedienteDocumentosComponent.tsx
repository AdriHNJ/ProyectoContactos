import React from 'react'
import { RootState } from '../../../redux/combineReducers'
import { useSelector } from 'react-redux'
import { Button, DataGrid } from 'devextreme-react'
import { Column, Scrolling } from 'devextreme-react/data-grid'
import {
  getColumnAlignment,
  getColumnType,
  getFileIcon,
} from '../../../utils/sharedUitls'
import { getExpedienteFile } from '../service/expedienteService'

function ExpedienteDocumentosComponent() {
  const expedienteState = useSelector((state: RootState) => state.expediente)
  const userState = useSelector((state: RootState) => state.user)
  function cellRender(data: any): any {
    let myIcon = getFileIcon(data.data.NombreArchivoOriginal)
    return (
      <Button
        text="Descargar"
        icon={myIcon}
        hint="Descarga el documento a su equipo"
        onClick={(event: any) => {
          getExpedienteFile(
            data.data.Id,
            encodeURIComponent(data.data.NombreArchivoOriginal),
            userState!.user!,
          )
        }}
      />
    )
  }

  return (
    <>
      <DataGrid
        dataSource={expedienteState?.documentos?.Datos}
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
        <Column
          type="buttons"
          cellRender={(cellRenderData: any) => {
            return cellRender(cellRenderData)
          }}
        />
        {expedienteState?.documentos?.Datos != undefined
          ? expedienteState?.documentos?.Campos.map((value) => {
              return (
                <Column
                  key={value.Nombre}
                  dataField={value.Nombre}
                  caption={value.Texto}
                  dataType={value.Tipo}
                  //alignment={value.Tipo=="decimal"||value.Tipo=="number"?"right":"left"}
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

export default ExpedienteDocumentosComponent
