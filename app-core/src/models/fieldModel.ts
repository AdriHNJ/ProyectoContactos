import { Any, JsonObject, JsonProperty } from "json2typescript";

@JsonObject("FieldModel")
export class FieldModel {
  @JsonProperty("Nombre", String)
  Name: string = "";
  @JsonProperty("Caption", String)
  Caption: string = "";
  @JsonProperty("Valor", Any)
  Value: any = "";
  @JsonProperty("Tipo", String)
  Type: string = "";
  @JsonProperty("Formato", String)
  Format: string = "";
  @JsonProperty("Visible", Boolean)
  Visible: boolean = false;
  @JsonProperty("Size", Number)
  Size: number = 0;
}
