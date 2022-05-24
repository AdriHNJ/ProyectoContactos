import { JsonObject, JsonProperty } from 'json2typescript'
import { ColumnModel, ColumnModelCore } from '../../../../models/columnModel'
import { DateConverter } from '../../../../utils/dateUtils'

@JsonObject('TareaPendienteGridModel')
class TareaPendienteGridModel {
  //   @JsonProperty('Id', Number)
  //   Id: number = 0
  @JsonProperty('FechaInicio', DateConverter)
  FechaInicio: undefined
  @JsonProperty('FechaFin', String) //que Dios me perdone...
  FechaFin: undefined
  @JsonProperty('Descripcion', String)
  Descripcion: string = ''
  @JsonProperty('Observaciones', String)
  Observaciones: string = ''
  @JsonProperty('ClaveExterna', Number)
  ClaveExterna: number = 0
}

@JsonObject('TarePendienteCampoDatoModel')
export class TareaPendienteCampoDatoModel {
  @JsonProperty('Campos', [ColumnModelCore] || [])
  Campos: ColumnModelCore[] = []

  @JsonProperty('Datos', [TareaPendienteGridModel] || [])
  Datos: TareaPendienteGridModel[] = []
}
