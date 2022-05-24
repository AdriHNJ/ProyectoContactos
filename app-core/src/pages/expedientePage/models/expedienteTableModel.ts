import { JsonObject, JsonProperty } from "json2typescript";
import { ColumnModel } from "../../../models/columnModel";
@JsonObject("ExpedienteTableModel")
export class ExpedienteTableModel {
  @JsonProperty("Campos", [ColumnModel] || [])
  Campos: ColumnModel[] = [];

  // @JsonProperty("Datos", [ExpedienteModel] || [])
  // Datos: ExpedienteModel[] = [];
}
