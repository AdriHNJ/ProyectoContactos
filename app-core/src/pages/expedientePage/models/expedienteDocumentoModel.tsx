import { JsonObject, JsonProperty } from "json2typescript";
import { ColumnModel } from "../../../models/columnModel";

@JsonObject("DocumentoBody")
class DocumentoBody {
  @JsonProperty("CodigoGestoria", String)
  CodigoGestoria: string = "";
  @JsonProperty("SerieExpediente", String)
  SerieExpediente: string = "";
  @JsonProperty("NumeroExpediente", Number)
  NumeroExpediente: number = 0;
  @JsonProperty("Contador", Number)
  Contador: number = 0;
  @JsonProperty("NombreArchivo", String)
  NombreArchivo: string = "";
  @JsonProperty("Identificacion", String)
  Identificacion: string = "";
  @JsonProperty("Observaciones", String)
  Observaciones: string = "";
}
@JsonObject("ExpedienteDocumentoModel")
export class ExpedienteDocumentoModel {
  @JsonProperty("Campos", [ColumnModel] || [])
  Fields: ColumnModel[] = [];

  @JsonProperty("Datos", [DocumentoBody] || [])
  Datos: DocumentoBody[] = [];
}
