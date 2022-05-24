import DataGrid, {
  Column,
  ColumnChooser,
  Export,
  FilterPanel,
  FilterRow,
  Grouping,
  HeaderFilter,
  LoadPanel,
  Paging,
  Scrolling,
  SearchPanel,
  Sorting,
  StateStoring,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid'
import { Button } from 'devextreme-react/button'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import React, { ReactElement } from 'react'
import { checkScreenSize } from 'shared-utils'
import { getColumnType, getCurrency, getFileIcon } from 'shared-utils'
import {
  actionKey,
  onToolbarPreparing,
  refreshDataGrid,
} from '../../utils/tableUtils'
import { DataGridSimpleModel } from './model/dataGridSimpleModel'
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter'
import { DataGridModel } from '../grid/model/dataGridModel'
import { getExpedienteFile } from '../../pages/expedientePage/service/expedienteService'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/combineReducers'
import { DatagridSimpleType } from './types/dataGridSimpleTypes'

const currency = getCurrency()
let dataGrid: any

export function getDataGrid(): DataGridModel {
  return dataGrid
}
export function exportGrid() {
  const doc: jsPDF = new jsPDF({
    orientation: 'landscape',
  })

  autoTable(doc, {
    theme: 'plain',
    body: [
      [
        {
          content: 'Expedientes',
        },
      ],
    ],
  })
  exportDataGridToPdf({
    jsPDFDocument: doc,
    component: dataGrid.dataGrid.instance,
  }).then(() => {
    doc.save('Expedientes.pdf')
  })
}

function CreateDataGridSimpleComponent(
  dataGridSimpleModel: DataGridSimpleModel,
): ReactElement {
  dataGrid = dataGridSimpleModel
  const currency = getCurrency()
  var dataSourceDatosSelector: any
  var dataSourceFieldsSelector: any

  function cellRender(data: any): any {
    let myIcon = getFileIcon(data.data.Identificacion)
    return (
      <Button
        text="Descargar"
        icon={myIcon}
        hint="My Command"
        onClick={(event: any) => {
          /*          getExpedienteFile(
            encodeURIComponent(data.data.NombreArchivo),
            dataGridSimpleModel.userModel.user
          ); */
        }}
      />
    )
  }

  return (
    <>
      <DataGrid
        ref={(ref) => (dataGrid = ref)}
        elementAttr={{ id: dataGridSimpleModel.dataGridName }}
        dataSource={dataGridSimpleModel.storeDatos}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        showBorders={true}
        showRowLines={true}
        rowAlternationEnabled={true}
        focusedRowEnabled={false}
        //height={200}
      >
        {dataGridSimpleModel.type == DatagridSimpleType.Documentos ? (
          <Column
            type="buttons"
            cellRender={(cellRenderData: any) => {
              return cellRender(cellRenderData)
            }}
          />
        ) : null}

        {dataGridSimpleModel.storeCampos != undefined
          ? dataGridSimpleModel.storeCampos.map((value: any) => {
              return (
                <Column
                  key={value.Nombre}
                  dataField={value.Nombre}
                  caption={value.Texto}
                  dataType={
                    value.Nombre === 'PorcentajeIva' ? 'number' : value.Tipo
                  }
                  format={
                    value.Nombre === 'PorcentajeIva'
                      ? "00' %'"
                      : getColumnType(value.Tipo, value.Format)
                  }
                  //customizeText="%"
                />
              )
            })
          : null}

        <Summary>
          <TotalItem
            column="BaseImponible"
            summaryType="sum"
            valueFormat={currency}
          />
          <TotalItem
            column="CuotaIva"
            summaryType="sum"
            valueFormat={currency}
          />
          <TotalItem
            column="TotalLinea"
            summaryType="sum"
            valueFormat={currency}
          />
        </Summary>
        {/*  <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={5} /> */}
      </DataGrid>
    </>
  )
}

export default CreateDataGridSimpleComponent
