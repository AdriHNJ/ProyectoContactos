import {
  JsonConverter,
  JsonCustomConvert,
  JsonObject,
  JsonProperty,
} from 'json2typescript'
import { DateConverter } from '../../../utils/dateUtils'

@JsonObject('ExpedienteModel')
export class ExpedienteModel {
  @JsonProperty('Id', Number, 0)
  Id: number = 0
  @JsonProperty('SerieExpediente', String)
  SerieExpediente: string = ''
  @JsonProperty('NumeroExpediente', Number)
  NumeroExpediente: number = 0
  @JsonProperty('FechaInicio', DateConverter)
  FechaInicio: undefined
  @JsonProperty('FechaFinalPrevista', DateConverter)
  FechaFinalPrevista: undefined
  @JsonProperty('FechaFinalReal', DateConverter)
  FechaFinalReal: undefined
  @JsonProperty('Descripcion', String)
  Descripcion: string = ''
  @JsonProperty('Comentario', String)
  Comentario: string = ''
  @JsonProperty('Referencia', String)
  Referencia: string = ''
  @JsonProperty('TotalAnticipos', Number)
  TotalAnticipos: number = 0
  @JsonProperty('IdPunteo', Number)
  IdPunteo: number = 0
  @JsonProperty('Matricula', String)
  Matricula: string = ''
  @JsonProperty('Marca', String)
  Marca: string = ''
  @JsonProperty('Modelo', String)
  Modelo: string = ''
  @JsonProperty('Bastidor', String)
  Bastidor: string = ''
  // @JsonProperty('FechaFabricacion', DateConverter)
  // FechaFabricacion: undefined
  // @JsonProperty('FechaITV', DateConverter)
  // FechaITV: undefined
  @JsonProperty('FechaMatricula', DateConverter)
  FechaMatricula: undefined
  @JsonProperty('CodigoGestoria', String)
  CodigoGestoria: string = ''
  @JsonProperty('CodigoCliente', String)
  CodigoCliente: string = ''
  @JsonProperty('Nomcliente', String)
  Nomcliente: string = ''
  @JsonProperty('Proveedor', String)
  Proveedor: string = ''
  @JsonProperty('NombreProveedor', String)
  NombreProveedor: string = ''
  @JsonProperty('Transmitente', String)
  Transmitente: string = ''
  @JsonProperty('NombreTransmitente', String)
  NombreTransmitente: string = ''
  @JsonProperty('FacturadoSiNo', Boolean)
  FacturadoSiNo: undefined
  @JsonProperty('TotalIva', Number)
  TotalIva: number = 0
  @JsonProperty('TotalFactura', Number)
  TotalFactura: number = 0
  @JsonProperty('FechaTrafico', Number)
  FechaTrafico: number = 0
  @JsonProperty('IdVehiculo', Number)
  IdVehiculo: number = 0
  @JsonProperty('FechaCaducidadItv', DateConverter)
  FechaCaducidadItv: undefined
  @JsonProperty('Estado', String)
  Estado: string = ''
}

@JsonObject('ExpedienteGridModel')
export class ExpedienteGridModel {
  @JsonProperty('Id', Number, 0)
  Id: number = 0
  @JsonProperty('IdKey', Number, 0)
  IdKey: number = 0
  @JsonProperty('IdVehiculo', Number)
  IdVehiculo: Number = 0
  @JsonProperty('SerieExpediente', String)
  SerieExpediente: string = ''
  @JsonProperty('NumeroExpediente', Number)
  NumeroExpediente: number = 0
  @JsonProperty('FechaInicio', DateConverter)
  FechaInicio: undefined
  @JsonProperty('FechaFinalPrevista', DateConverter)
  FechaFinalPrevista: undefined
  @JsonProperty('FechaFinalReal', DateConverter)
  FechaFinalReal: undefined
  // @JsonProperty('NIF', String)
  // NIF: string = ''
  // @JsonProperty('Nombre', String)
  // Nombre: string = ''
  @JsonProperty('Referencia', String)
  Referencia: string = ''
  @JsonProperty('Matricula', String)
  Matricula: string = ''
  @JsonProperty('Marca', String)
  Marca: string = ''
  @JsonProperty('Modelo', String)
  Modelo: string = ''
  @JsonProperty('FechaMatricula', DateConverter)
  FechaMatricula: undefined
}

@JsonObject('ExpedienteDetalleModel')
export class ExpedienteDetalleModel {
  // @JsonProperty('Id', Number, 0)
  // Id: number = 0
  // @JsonProperty('CodigoGestoria', Number)
  // CodigoGestoria: Number = 0
  @JsonProperty('SerieExpediente', String)
  SerieExpediente: string = ''
  @JsonProperty('NumeroExpediente', Number)
  NumeroExpediente: number = 0
  @JsonProperty('Descripcion', String)
  Descripcion: string = ''
  @JsonProperty('Estado', String)
  Estado: string = ''
  @JsonProperty('FechaInicio', DateConverter)
  FechaInicio: undefined
  @JsonProperty('FechaFinalPrevista', DateConverter)
  FechaFinalPrevista: undefined
  @JsonProperty('FechaFinalReal', DateConverter)
  FechaFinalReal: undefined
  @JsonProperty('CodigoCliente', String)
  CodigoCliente: string = ''
  @JsonProperty('NombreCliente', String)
  NombreCliente: string = ''
  @JsonProperty('Colaborador', String)
  Colaborador: string = ''
  @JsonProperty('NombreColaborador', String)
  NombreColaborador: string = ''
  @JsonProperty('Transmitente', String)
  Transmitente: string = ''
  @JsonProperty('NombreTransmitente', String)
  NombreTransmitente: string = ''
  @JsonProperty('Referencia', String)
  Referencia: string = ''
  @JsonProperty('Comentario', String)
  Comentario: string = ''
}
