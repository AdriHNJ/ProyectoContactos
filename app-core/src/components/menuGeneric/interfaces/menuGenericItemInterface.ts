import { ColumnModel } from "../../../models/columnModel";
//import { DatagridSimpleType } from "../types/dataGridSimpleTypes";
enum ItemType {
  text = "text",
  button = "button",
  image = "image",
  iframe = "iframe",
  menu = "menu"
}
export interface menuItemInterface {
  itemName: string;
  label: string;
  icon: string;
  value: any;
  position: number;
  type: ItemType;
}
