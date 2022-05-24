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
import { getColumnType, getCurrency } from 'shared-utils'
import {
  actionKey,
  onToolbarPreparing,
  refreshDataGrid,
} from '../../utils/tableUtils'
import { DataGridModel } from './model/dataGridModel'
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter'

const currency = getCurrency()
let dataGrid: any
let rowFocused: any
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
function CreateDataGridComponent(dataGridModel: DataGridModel): ReactElement {
  dataGrid = dataGridModel
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        actionKey(e, dataGridModel.dataGrid, 'Left Key')
        break
      case 38:
        actionKey(e, dataGridModel.dataGrid, 'Up Key')
        break
      case 39:
        actionKey(e, dataGridModel.dataGrid, 'Right Key')
        break
      case 40:
        actionKey(e, dataGridModel.dataGrid, 'Down Key')
        break
    }
  }
  return (
    <>
      <DataGrid
        ref={(ref) => (dataGridModel.dataGrid = ref)}
        id={dataGridModel.dataGridName}
        dataSource={dataGridModel.store}
        remoteOperations={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        showBorders={true}
        showRowLines={true}
        rowAlternationEnabled={true}
        columnHidingEnabled={checkScreenSize() ? false : true}
        // onRowDblClick={(event: any) => {
        //   if (event.data != undefined) {
        //     dataGridModel.openRow(event)
        //   }
        // }}
        onKeyDown={(e: any) => {
          try {
            if (e.event.code === 'Enter') {
              if (
                dataGridModel.dataGrid.instance.getSelectedRowsData() !=
                undefined
              )
                dataGridModel.openRowEnterKey(
                  dataGridModel.dataGrid.instance.getSelectedRowsData(),
                )
            }
          } catch (error) {}
        }}
        focusedRowEnabled={true}
        focusedRowKey={rowFocused}
        onFocusedRowChanged={(event: any) => {
          //dataGridModel.focusEventChanged(event)
          //rowFocused = event.row.key
        }}
        onFocusedRowChanging={(event: any) => {
          rowFocused = event.newRowIndex
          //dataGridModel.focusEventChanging(event)
        }}
        onToolbarPreparing={(event: any) => {
          onToolbarPreparing({ ...event, component: dataGridModel.dataGrid })
        }}
      >
        {checkScreenSize() ? (
          <SearchPanel visible={true} width={240} />
        ) : (
          <SearchPanel visible={true} width={100} />
        )}
        <Sorting mode={'multiple'} />
        <Paging pageSize={100} />
        <ColumnChooser enabled={true} />
        <Scrolling
          mode="virtual"
          rowRenderingMode="virtual"
          showScrollbar="Always"
          scrollByThumb={true}
          preloadEnabled={true}
          useNative={true}
        />
        <LoadPanel enabled={true} />
        {/* <FilterRow visible={firstTime ? true : getBoolean(visibleFilterRow!)} /> */}
        <FilterRow visible={true} />
        <FilterPanel visible={true} />
        <HeaderFilter visible={true} allowSearch={true} searchTimeout={1000} />
        <Export enabled={true} />
        <Grouping
          autoExpandAll={false}
          allowCollapsing={true}
          expandMode={'rowClick'}
        />
        <StateStoring enabled={true} type="localStorage" storageKey="storage" />

        {dataGridModel.columns != undefined
          ? dataGridModel.columns.map((value) => {
              return (
                <Column
                  visible={value.Visible}
                  key={value.Nombre}
                  dataField={value.Nombre}
                  caption={value.Texto}
                  dataType={value.Tipo}
                  allowGrouping={value.Nombre == 'Totfactura' ? false : true}
                  allowHeaderFiltering={value.Tipo == 'date' ? false : true}
                  defaultSortOrder="asc"
                  allowFiltering={value.Nombre == 'TipoUsuario' ? false : true}
                />
              )
            })
          : null}
        {/* <Summary>
          <TotalItem
            column="NumeroExpediente"
            summaryType="count"
            displayFormat="{0}"
          />
          <TotalItem
            column="Totfactura"
            summaryType="sum"
            valueFormat={currency}
            alignment="center"
            displayFormat="{0}"
          />
        </Summary> */}
      </DataGrid>
      <Button
        id="buttonRefresh"
        style={{ display: 'none' }}
        onClick={() => refreshDataGrid(true, dataGridModel.dataGrid)}
      />
    </>
  )
}

export default CreateDataGridComponent
