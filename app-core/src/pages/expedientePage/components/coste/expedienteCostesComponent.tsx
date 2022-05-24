import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from 'devextreme-react'
import {
  Column,
  Scrolling,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid'
import {
  getColumnAlignment,
  getColumnType,
  getCurrency,
} from '../../../../utils/sharedUitls'
import { RootState } from '../../../../redux/combineReducers'
import { ValueErrorBar } from 'devextreme-react/chart'

function ExpedienteCostesComponent(): ReactElement {
  const expedienteState = useSelector((state: RootState) => state.expediente)
  const currency = getCurrency()
  function fomatterPercentage(number: number) {
    let numberFormatted = number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
    return numberFormatted
  }

  function parserPercentage(number: number) {
    let numberFormatted = number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
    return numberFormatted + ' %'
  }

  return (
    <>
      <DataGrid
        dataSource={expedienteState.costes?.Datos}
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
        {expedienteState.costes?.Campos != undefined
          ? expedienteState.costes?.Campos.map((value) => {
              return (
                <Column
                  key={value.Nombre}
                  dataField={value.Nombre}
                  caption={value.Texto}
                  dataType={value.Tipo}
                  //alignment={value.Tipo=="decimal"||value.Tipo=="number"?"right":"left"}
                  // format={
                  // value.Nombre=="PorcentajeIVA"||value.Nombre=="PorcentajeDescuento"?"00' %'": value.Nombre == "TotalLinea" || value.Nombre =="CuotaIva" || value.Nombre == "Importe"? currency : getColumnType(value.Tipo, value.Format)
                  //}
                  format={getColumnType(value.Tipo, value.Format)}
                  alignment={getColumnAlignment(value.Tipo)}
                  visible={value.Nombre === 'Id' ? false : value.Visible}
                />
              )
            })
          : null}

        <Summary>
          <TotalItem
            column="Importe"
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
      </DataGrid>
    </>
  )
}

export default ExpedienteCostesComponent
