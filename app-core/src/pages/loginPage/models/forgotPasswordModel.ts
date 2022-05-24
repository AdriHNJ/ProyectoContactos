import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("ForgotPasswordModel")
export class ForgotPasswordModel {
  @JsonProperty("Usuario", String)
  Usuario: string = "";
  @JsonProperty("Permitir", Boolean)
  Permitir: boolean = false;
  @JsonProperty("Mensaje", String)
  Mensaje: string = "";
  @JsonProperty("Auth", String)
  Auth: string = "";
}
