import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("PermisosModel")
export class PermisosModel {
  @JsonProperty("AccesoAdministracion", Boolean)
  AccesoAdministracion: boolean = false;

  @JsonProperty("ListadoUsuarios", Boolean)
  ListadoUsuarios: boolean = false;

  @JsonProperty("AccesoExpedientes", Boolean)
  AccesoExpedientes: boolean = false;

  @JsonProperty("AccesoPeticiones", Boolean)
  AccesoPeticiones: boolean = false;

  @JsonProperty("EliminarTickets", Boolean)
  EliminarTickets: boolean = false;

  @JsonProperty("ModificarPeticiones", Boolean)
  ModificarPeticiones: boolean = false;

  @JsonProperty("EliminarPeticiones", Boolean)
  EliminarPeticiones: boolean = false;
}
