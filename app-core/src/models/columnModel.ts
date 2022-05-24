import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('ColumnModel')
export class ColumnModel {
  @JsonProperty('Nombre', String)
  Nombre: string = ''

  @JsonProperty('Tipo', String)
  Tipo: string = ''

  @JsonProperty('Texto', String)
  Texto: String = ''

  @JsonProperty('Format', String)
  Format: String = ''
}

@JsonObject('ColumnModelCore')
export class ColumnModelCore {
  @JsonProperty('Nombre', String)
  Nombre: string = ''
  @JsonProperty('Tipo', String)
  Tipo: string = ''
  @JsonProperty('Texto', String)
  Texto: String = ''
  @JsonProperty('Format', String)
  Format: String = ''
  @JsonProperty('Size', Number)
  Size: number = 0
  @JsonProperty('Visible', Boolean)
  Visible: boolean = false
}
