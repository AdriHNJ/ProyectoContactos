/* import { ColumnModel } from "../../../models/columnModel"; */

export interface toolbarInterface {
  formName: string
  buttonName: string
  allowSave: (data: any) => void
  allowEdit: (data: any) => void
  allowClear: (data: any) => void
  allowSaveAddNew: (data: any) => void
  allowAddNew: (data: any) => void
  allowRefresh: (data: any) => void
  allowRevert: (data: any) => void
}
