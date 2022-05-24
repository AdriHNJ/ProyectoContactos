import { JsonObject, JsonProperty } from 'json2typescript'
import { ColumnModel, ColumnModelCore } from '../../../../models/columnModel'
import { DateConverter } from '../../../../utils/dateUtils'

@JsonObject('CosteModel')
class CosteModel {
  @JsonProperty('CodigoGestoria', String)
  CodigoGestoria: string = ''
  @JsonProperty('Serie', String)
  Serie: string = ''
  @JsonProperty('Expediente', Number)
  Expediente: number = 0
  @JsonProperty('Concepto', String)
  Concepto: string = ''
  @JsonProperty('Tipoconcepto', Number)
  Tipoconcepto: number = 0
  @JsonProperty('Fecha', DateConverter)
  Fecha: undefined
  @JsonProperty('CodigoConcepto', Number)
  CodigoConcepto: number = 0
  @JsonProperty('BaseImponible', Number)
  BaseImponible: number = 0
  @JsonProperty('LineaSuplido', Number)
  LineaSuplido: number = 0
  @JsonProperty('FacturarA', String)
  FacturarA: string = ''
  @JsonProperty('Observaciones', String)
  Observaciones: string = ''
  @JsonProperty('PorcentajeIva', Number)
  PorcentajeIva: number = 0
  @JsonProperty('CuotaIva', Number)
  CuotaIva: number = 0
  @JsonProperty('TotalLinea', Number)
  TotalLinea: Number = 0
}

@JsonObject('CosteDetalleBody')
class CosteDetalleBody {
  @JsonProperty('Suplidos', Number)
  Suplidos: number = 0
  @JsonProperty('Honorarios', Number)
  Honorarios: number = 0
  @JsonProperty('Anticipos', Number)
  Anticipos: number = 0
  @JsonProperty('Facturado', Boolean)
  Facturado: boolean = false
  @JsonProperty('IVA', Number)
  IVA: number = 0
  @JsonProperty('Total', Number)
  Total: number = 0
  // @JsonProperty('Notas', String)
  // Notas: string = ''
}

@JsonObject('CosteGridModel')
class CosteGridModel {
  @JsonProperty('NumeroExpediente', Number)
  NumeroExpediente: number = 0
  @JsonProperty('FacturarA', String)
  FacturarA: string = ''
  @JsonProperty('NumeroLinea', Number)
  NumeroLinea: number = 0
  @JsonProperty('FechaTramitacion', DateConverter)
  FechaTramitacion: undefined
  @JsonProperty('Importe', Number)
  Importe: number = 0
  @JsonProperty('Observaciones', String)
  Observaciones: string = ''
  @JsonProperty('Unidades', Number)
  Unidades: number = 0
  @JsonProperty('PorcentajeDescuento', Number)
  PorcentajeDescuento: number = 0
  @JsonProperty('PorcentajeIVA', Number)
  PorcentajeIVA: number = 0
  @JsonProperty('Concepto', String)
  Concepto: string = ''
  @JsonProperty('ClaveExterna', Number)
  ClaveExterna: number = 0
  @JsonProperty('TipoConcepto', String)
  TipoConcepto: string = ''
  @JsonProperty('CuotaIva', Number)
  CuotaIva: Number = 0
  @JsonProperty('TotalLinea', Number)
  TotalLinea: Number = 0
}

@JsonObject('CosteCampoDatoGridModel')
export class CosteCampoDatoGridModel {
  @JsonProperty('Campos', [ColumnModelCore] || [])
  Campos: ColumnModelCore[] = []

  @JsonProperty('Datos', [CosteGridModel] || [])
  Datos: CosteGridModel[] = []
}

@JsonObject('CosteCampoDatoModel')
export class CosteCampoDatoModel {
  @JsonProperty('Campos', [ColumnModelCore] || [])
  Campos: ColumnModelCore[] = []

  @JsonProperty('Datos', [CosteDetalleBody] || [])
  Datos: CosteDetalleBody[] = []
}
