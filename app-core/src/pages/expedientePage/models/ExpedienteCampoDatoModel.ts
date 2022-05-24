import { JsonObject, JsonProperty } from 'json2typescript'
import { ColumnModel } from 'shared-models'
import { ColumnModelCore } from '../../../models/columnModel'
import {
  ExpedienteDetalleModel,
  ExpedienteGridModel,
  ExpedienteModel,
} from './expedienteModel'

@JsonObject('ExpedienteGridCampoDatoModel')
export class ExpedienteGridCampoDatoModel {
  @JsonProperty('Campos', [ColumnModel] || [])
  Campos: ColumnModel[] = []
  @JsonProperty('Datos', [ExpedienteGridModel] || [])
  Datos: ExpedienteGridModel[] = []
}

// // @JsonObject('ColumnModelCore')
// export class ColumnModelCore {
//   @JsonProperty('Nombre', String)
//   Nombre: string = ''
//   @JsonProperty('Tipo', String)
//   Tipo: string = ''
//   @JsonProperty('NombTextore', String)
//   Texto: String = ''
//   @JsonProperty('Format', String)
//   Format: String = ''
//   @JsonProperty('Size', Number)
//   Size: number = 0
//   @JsonProperty('Visible', Boolean)
//   Visible: boolean = false
// }

@JsonObject('ExpedienteCampoDatoModel')
export class ExpedienteCampoDatoModel {
  @JsonProperty('Campos', [ColumnModelCore] || [])
  Campos: ColumnModelCore[] = []
  @JsonProperty('Datos', [ExpedienteDetalleModel] || [])
  Datos: ExpedienteDetalleModel[] = []
}

// @JsonObject('ColumnModelCore')
// export class ColumnModelCore {
//   @JsonProperty('Nombre', String)
//   Nombre: string = ''
//   @JsonProperty('Tipo', String)
//   Tipo: string = ''
//   @JsonProperty('NombTextore', String)
//   Texto: String = ''
//   @JsonProperty('Format', String)
//   Format: String = ''
//   @JsonProperty('Size', Number)
//   Size: number = 0
//   @JsonProperty('Visible', Boolean)
//   Visible: boolean = false
// }
