import { Column } from "devextreme-react/data-grid";
import { ColumnModel } from "../../../models/columnModel";
import { menuInterface } from "../interfaces/menuGenericInterface";
import { menuItemInterface } from "../interfaces/menuGenericItemInterface";


export class MenuGenericModel implements menuInterface {
  constructor(
    menuName: string,
    //store: any,
    storeTemas?: any,
    items?: menuItemInterface,
    storeUsuario?: any,
    wikiUrl?: string,
    linksLegales?: any

  ) {
    this.menuName = menuName;
    //this.store = store;
    this.storeTemas = storeTemas;
    this.storeUsuario = storeUsuario;
    this.wikiUrl = wikiUrl;
    this.linksLegales = linksLegales;
    this.items = items
  }
  menuName: string;
  store: any;
  storeTemas: any;
  items: menuItemInterface | undefined;
  storeUsuario: any;
  wikiUrl: string | undefined;
  linksLegales: any;

}
