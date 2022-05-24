import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('RoleModel')
export class RoleModel {
  @JsonProperty('Id', Number)
  Id: Number = 0
  @JsonProperty('Name', String)
  Name: String = ``
}
