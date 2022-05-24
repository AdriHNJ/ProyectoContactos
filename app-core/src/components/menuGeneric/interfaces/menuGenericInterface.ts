import { ColumnModel } from "../../../models/columnModel";
import { menuItemInterface } from "./menuGenericItemInterface";
//import { DatagridSimpleType } from "../types/dataGridSimpleTypes";

export interface menuInterface {
  menuName: string;
  store: any | undefined;
  storeTemas: any | undefined;
  items: menuItemInterface | undefined;
  storeUsuario: any | undefined;
  wikiUrl: string | undefined;
  linksLegales: any | undefined;
}
