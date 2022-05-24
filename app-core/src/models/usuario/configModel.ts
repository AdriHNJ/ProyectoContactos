import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("ConfigModel")
export class ConfigModel {
  @JsonProperty("Tema", String || null)
  Tema: string = "";
  @JsonProperty("Logo1", String || null)
  Logo1: string = "";
  @JsonProperty("Logo2", String || null)
  Logo2: string = "";
  @JsonProperty("MensajeCentral", String || null)
  MensajeCentral: string = "";
  //@JsonProperty("Usuario", String || null)
  //Usuario: string = "";
  @JsonProperty("LinkLegal", String || null)
  LinkLegal: string = "";
  @JsonProperty("LinkCookies", String || null)
  LinkCookies: string = "";
  @JsonProperty("LinkRgpd", String || null)
  LinkRgpd: string = "";
}
