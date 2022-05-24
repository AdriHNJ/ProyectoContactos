import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "shared-utils";
import { ColumnModel } from "../../../models/columnModel";
@JsonObject("HistorialBody")
class HistorialBody {
  @JsonProperty("CodigoGestoria", String)
  CodigoGestoria: string = "";
  @JsonProperty("Contador", Number)
  Contador: number = 0;
  @JsonProperty("FechaInicio", DateConverter || null)
  FechaInicio: undefined;
  @JsonProperty("FechaFinalizado", DateConverter || null)
  FechaFinalizado: undefined;
  @JsonProperty("Descripcion", String)
  Descripcion: string = "";
  @JsonProperty("Observaciones", String)
  Observaciones: string = "";
  @JsonProperty("Serie", String)
  Serie: string = "";
  @JsonProperty("Expediente", Number)
  Expediente: number = 0;
}
@JsonObject("ExpedienteHistoriaModel")
export class ExpedienteHitorialModel {
  @JsonProperty("Campos", [ColumnModel] || [])
  Fields: ColumnModel[] = [];

  @JsonProperty("Datos", [HistorialBody] || [])
  Datos: HistorialBody[] = [];
}
