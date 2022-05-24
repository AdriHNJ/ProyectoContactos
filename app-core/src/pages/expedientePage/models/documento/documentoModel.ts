import { JsonObject, JsonProperty } from 'json2typescript'
import { ColumnModel, ColumnModelCore } from '../../../../models/columnModel'

@JsonObject('DocumentoGridModel')
class DocumentoGridModel {
  @JsonProperty('Id', Number)
  Id: number = 0
  //   @JsonProperty('ClaveExterna', Number)
  //   ClaveExterna: number = 0
  @JsonProperty('NombreArchivoOriginal', String)
  NombreArchivoOriginal: string = ''
  @JsonProperty('NombreArchivoCliente', String)
  NombreArchivoCliente: string = ''
  @JsonProperty('Observaciones', String)
  Observaciones: string = ''
}

@JsonObject('DocumentoCampoDatoModel')
export class DocumentoCampoDatoModel {
  @JsonProperty('Campos', [ColumnModelCore] || [])
  Campos: ColumnModelCore[] = []

  @JsonProperty('Datos', [DocumentoGridModel] || [])
  Datos: DocumentoGridModel[] = []
}
