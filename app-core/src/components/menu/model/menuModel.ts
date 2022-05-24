import { Column } from "devextreme-react/data-grid";
import { ColumnModel } from "../../../models/columnModel";
import { menuInterface } from "../interfaces/menuInterface";
//import { DatagridSimpleType } from "../types/dataGridSimpleTypes";

export class MenuModel implements menuInterface {
  constructor(
    menuName: string,
    //dataGridName: string,
    store: any,
    //storeCampos: any,
    //dataGrid: any,
    //  type:DatagridSimpleType,
    //userModel:any
    //columns: ColumnModel[] | undefined,

  ) {
    this.menuName = menuName;
    this.store = store;
    /* this.dataGridName = dataGridName;
    this.storeDatos = storeDatos;
    this.storeCampos = storeCampos;    
    this.dataGrid = dataGrid;
    this.type=type;
    this.userModel=userModel;
     *///this.columns = columns;

  }
  menuName: string;
  store: any;
  /*   dataGridName: string;
    //columns: ColumnModel[] | undefined;
    storeDatos: any;
    storeCampos: any;
    dataGrid: any;
    type:DatagridSimpleType;
    userModel:any
   */
}
