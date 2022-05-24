import { ColumnModel } from "../../../models/columnModel";
import { DatagridSimpleType } from "../types/dataGridSimpleTypes";

export interface dataGridSimpleInterface {
  dataGridName: string;
  dataGrid: any;
  storeDatos: any;
  storeCampos: any;
  type: DatagridSimpleType
  //columns: ColumnModel[] | undefined;
 
 
}
