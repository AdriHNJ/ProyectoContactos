import { JsonObject, JsonProperty } from 'json2typescript'
import { ColumnModel } from './columnModel'

@JsonObject('GridStructureModel')
export class GridStructureModel {
  @JsonProperty('Campos', [ColumnModel] || [])
  Fields: ColumnModel[] = []
}
