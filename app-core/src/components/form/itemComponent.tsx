import Form, { Item, Label, SimpleItem } from 'devextreme-react/form'
import React, { useEffect, ReactElement } from 'react'
import { ColumnModelCore } from '../../models/columnModel'
import './itemComponent.scss'
import {
  getColumnAlignment,
  getColumnType,
  getCurrency,
  getDxType,
  getSize,
} from '../../utils/sharedUitls'
function GenericFormComponent(data: any): ReactElement {
  // let draw = true
  // let startDraw = data.range.start == null ? true : false
  const currency = getCurrency()

  useEffect(() => {})
  function checkType(field: any) {
    if (field.Nombre == 'NumeroExpediente') {
      return 'dxTextBox'
    }
    if (field.Nombre == 'Descripcion' || field.Nombre == 'Comentario') {
      return 'dxTextArea'
    }
    if (field.Tipo == 'boolean') {
      return 'dxCheckBox'
    } else {
      return getDxType(field?.Type)
    }
  }
  var optionPercentage = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
  var formatterPercentage = new Intl.NumberFormat('es-ES', optionPercentage)
  var optionCurrency = {
    style: 'currency',
    currency: 'EUR',
  }
  var formatterCurrency = new Intl.NumberFormat('es-ES', optionCurrency)

  // const getJsonTransformFields = (fields: ColumnModelCore[] | undefined): any => {
  //   if (!fields) {
  //     return null
  //   }
  //   let jsonBody: any = {}
  //   fields.map((field) => {
  //     const key = field.Nombre
  //     jsonBody[key] = field.Value
  //   })

  //   return jsonBody
  // }

  return (
    <>
      <Form
        //onContentReady={this.validateForm}
        colCount={'auto'}
        id="form"
        //formData={getJsonTransformFields(data.Campos)}
        labelLocation="top"
        alignItemLabels={false}
        alignItemLabelsInAllGroups={false}
      >
        {data.fields.Campos != null
          ? data.fields.Campos?.map((field: ColumnModelCore) => {
              var value = data.fields.Datos[0][field.Nombre]
              // if (field.Nombre == data.range.start) startDraw = true
              // if (draw && startDraw) {
              //   if (field.Nombre == data.range.end) {
              //     draw = false
              //   }

              return (
                <Item
                  dataField={field.Nombre}
                  colSpan={getSize(field.Nombre)}
                  //cssClass={field.Tipo=="decimal"||field.Tipo=="number"?"alignRight":"alignLeft"}
                  cssClass={'align' + getColumnAlignment(field.Tipo)}
                  visible={
                    field.Tipo === 'date' && field.Nombre === null
                      ? false
                      : field.Visible
                  }
                  editorOptions={{
                    stylingMode: 'filled',
                    readOnly: true,
                    format: getColumnType(field.Tipo, field.Format),
                    fontWeight: 'bold',
                    color: 'black',
                    value:
                      field.Format == 'currency'
                        ? formatterCurrency.format(value)
                        : field.Format == 'percent'
                        ? formatterPercentage.format(value / 100)
                        : field.Tipo === 'datetime' &&
                          (value == '1/1/1' ||
                            value == '31/12/1' ||
                            null ||
                            undefined ||
                            '')
                        ? ''
                        : value,
                    hint: field.Texto + ': ' + value,
                  }}
                  editorType={checkType(field)}
                  itemType
                >
                  <Label text={field.Texto} />
                </Item>
              )
              //}
            })
          : null}
      </Form>
      {/* <Form
        //onContentReady={this.validateForm}
        colCount={'auto'}
        id="form"
        formData={getJsonTransformFields(data.fields)}
        labelLocation="top"
      >
        {data.fields != null
          ? data.fields?.map((field: FieldModel) => {
              if (field.Nombre == data.range.start) startDraw = true
              if (draw && startDraw) {
                if (field.Nombre == data.range.end) {
                  draw = false
                }

                return (
                  <Item
                    dataField={field.Nombre}
                    colSpan={getSize(field.Nombre)}
                    visible={
                      field.Type === 'date' && field.Nombre === null
                        ? false
                        : field.Visible
                    }
                    editorOptions={{
                      readOnly: true,
                      format: getColumnType(field.Type, field.Format),
                      fontWeight: 'bold',
                      color: 'black',
                      hint: field.Value,
                    }}
                    editorType={checkType(field)}
                    itemType
                  >
                    <Label
                      text={field.Caption != null ? field.Caption : field.Nombre}
                    />
                  </Item>
                )
              }
            })
          : null}
      </Form> */}
    </>
  )
}

export default GenericFormComponent
