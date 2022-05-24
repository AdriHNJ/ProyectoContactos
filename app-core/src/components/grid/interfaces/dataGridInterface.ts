import { ButtonColumnModel, ColumnModel, UserModel } from 'shared-models'

// export interface dataGridInterface {
//   dataGridName: string
//   dataGrid: any
//   store: any
//   columns: ColumnModel[] | undefined
//   buttonsColumns: ButtonColumnModel[]
//   rowFocused: string
//   user: UserModel
//   filterRow: boolean
//   filterPanel: boolean
//   columnChooser: boolean
//   headerFilter: boolean
//   exportData: boolean
//   showSearchPanel: boolean
//   showToolbar: boolean
//   url: string
//   urlAux: string
//   history: any
//   singularName: string
//   pluralName: string
//   pageName: string
//   openRow: (rowData: any) => void
//   openRowEnterKey: (rowData: any) => void
//   focusEventChanged: (rowData: any) => void
//   focusEventChanging: (rowData: any) => void
//   openCreatePopup: any
//   ref: any
//   openedPopup: boolean
// }

export interface dataGridInterface {
  dataGridName: string
  dataGrid: any
  store: any
  columns: ColumnModel[] | undefined
  rowFocused: string
  openRow: (rowData: any) => void
  openRowEnterKey: (rowData: any) => void
  focusEventChanged: (rowData: any) => void
  focusEventChanging: (rowData: any) => void
}
