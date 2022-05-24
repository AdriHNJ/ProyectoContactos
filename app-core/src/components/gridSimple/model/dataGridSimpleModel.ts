import { Column } from "devextreme-react/data-grid";
import { ColumnModel } from "../../../models/columnModel";
import {  dataGridSimpleInterface } from "../interfaces/dataGridSimpleInterface";
import { DatagridSimpleType } from "../types/dataGridSimpleTypes";

export class DataGridSimpleModel implements dataGridSimpleInterface {
  constructor(
    dataGridName: string,
    storeDatos: any,
    storeCampos: any,
    dataGrid: any,
    type:DatagridSimpleType,
    userModel:any
    //columns: ColumnModel[] | undefined,

  ) {
    this.dataGridName = dataGridName;
    this.storeDatos = storeDatos;
    this.storeCampos = storeCampos;    
    this.dataGrid = dataGrid;
    this.type=type;
    this.userModel=userModel;
    //this.columns = columns;

  }
  dataGridName: string;
  //columns: ColumnModel[] | undefined;
  storeDatos: any;
  storeCampos: any;
  dataGrid: any;
  type:DatagridSimpleType;
  userModel:any

}
