import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "shared-utils";

@JsonObject("UserTableModel")
export class UserTableModel {
  @JsonProperty("Nif", String)
  Nif: string = "";

  @JsonProperty("Nombre_Usuario", String)
  Nombre_Usuario: string = "";

  @JsonProperty("Fecha_Ultimo_Acceso", DateConverter)
  Fecha_Ultimo_Acceso: number = 0;

  @JsonProperty("Usuario_Maestro", String)
  Usuario_Maestro: string = "";

  @JsonProperty("Estado", Number)
  Estado: number = 0;

  @JsonProperty("CodigoGestoria", String)
  CodigoGestoria: string = "";

  @JsonProperty("TieneInformes", Boolean)
  TieneInformes: boolean = false;

  @JsonProperty("Email", String)
  Email: string = "";

  @JsonProperty("TieneExpedientes", Boolean)
  TieneExpedientes: boolean = false;

  @JsonProperty("Conf_SMTP", String)
  Conf_SMTP: String = "";

  @JsonProperty("Conf_Puerto", Number)
  Conf_Puerto: number = 0;

  @JsonProperty("Conf_Email", String)
  Conf_Email: string = "";

  @JsonProperty("Conf_Nombre", String)
  Conf_Nombre: string = "";

  @JsonProperty("Conf_NombreVisible", String)
  Conf_NombreVisible: string = "";

  @JsonProperty("Conf_SSL", Boolean)
  Conf_SSL: boolean = false;

  @JsonProperty("Modificar_Informes", Boolean)
  Modificar_Informes: boolean = false;

  @JsonProperty("Borrar_Informes", Boolean)
  Borrar_Informes: boolean = false;

  @JsonProperty("Recuperar_Password", Boolean)
  Recuperar_Password: boolean = false;

  @JsonProperty("AsuntosBloqueados", String)
  AsuntosBloqueados: string = "";

  @JsonProperty("BorrarTickets", Boolean)
  BorrarTickets: boolean = false;

  @JsonProperty("AccesoPanelAdministracion", Boolean)
  AccesoPanelAdministracion: boolean = false;

  @JsonProperty("AccesoListadoUsuarios", Boolean)
  AccesoListadoUsuarios: boolean = false;

  @JsonProperty("carpetaFTP", String)
  carpetaFTP: string = "";
}
