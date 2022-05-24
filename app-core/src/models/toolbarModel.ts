import { toolbarInterface } from '../interfaces/toolbarInterface'

export class ToolbarModel implements toolbarInterface {
  constructor(
    formName: string,
    buttonName: any,
    allowSave: any,
    allowEdit: any,
    allowClear: any,
    allowSaveAddNew: any,
    allowAddNew: any,
    allowRefresh: any,
    allowRevert: any,
  ) {
    this.formName = formName
    this.buttonName = buttonName
    this.allowSave = allowSave
    this.allowEdit = allowEdit
    this.allowClear = allowClear
    this.allowSaveAddNew = allowSaveAddNew
    this.allowAddNew = allowAddNew
    this.allowRefresh = allowRefresh
    this.allowRevert = allowRevert
  }
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
