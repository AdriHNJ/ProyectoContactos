import { JsonObject, JsonProperty } from 'json2typescript'
import { ColumnModel, ColumnModelCore } from '../../../../models/columnModel'
import { DateConverter } from '../../../../utils/dateUtils'

// @JsonObject('VehiculoModel')
// class VehiculoModel {
//   @JsonProperty('CodigoGestoria', String)
//   CodigoGestoria: string = ''
//   @JsonProperty('Serie', String)
//   Serie: string = ''
//   @JsonProperty('Expediente', Number)
//   Expediente: number = 0
//   @JsonProperty('Concepto', String)
//   Concepto: string = ''
//   @JsonProperty('Tipoconcepto', Number)
//   Tipoconcepto: number = 0
//   @JsonProperty('Fecha', DateConverter)
//   Fecha: undefined
//   @JsonProperty('CodigoConcepto', Number)
//   CodigoConcepto: number = 0
//   @JsonProperty('BaseImponible', Number)
//   BaseImponible: number = 0
//   @JsonProperty('LineaSuplido', Number)
//   LineaSuplido: number = 0
//   @JsonProperty('FacturarA', String)
//   FacturarA: string = ''
//   @JsonProperty('Observaciones', String)
//   Observaciones: string = ''
//   @JsonProperty('PorcentajeIva', Number)
//   PorcentajeIva: number = 0
//   @JsonProperty('CuotaIva', Number)
//   CuotaIva: number = 0
//   @JsonProperty('TotalLinea', Number)
//   TotalLinea: Number = 0
// }

@JsonObject('VehiculoDetalle')
class VehiculoDetalle {
  //   @JsonProperty('Id', Number)
  //   Id: number = 0
  @JsonProperty('Matricula', String)
  Matricula: string = ''
  @JsonProperty('Marca', String)
  Marca: string = ''
  @JsonProperty('Modelo', String)
  Modelo: string = ''
  @JsonProperty('Bastidor', String)
  Bastidor: string = ''
  @JsonProperty('FechaFabricacion', DateConverter)
  FechaFabricacion: undefined
  @JsonProperty('FechaITV', DateConverter)
  FechaITV: undefined
  @JsonProperty('FechaMatricula', DateConverter)
  FechaMatricula: undefined
  @JsonProperty('Observaciones', String)
  Observaciones: string = ''
}

@JsonObject('VehiculoCampoDatoModel')
export class VehiculoCampoDatoModel {
  @JsonProperty('Campos', [ColumnModelCore] || [])
  Campos: ColumnModelCore[] = []

  @JsonProperty('Datos', [VehiculoDetalle] || [])
  Datos: VehiculoDetalle[] = []
}
