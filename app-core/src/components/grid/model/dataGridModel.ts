import { ButtonColumnModel, ColumnModel, UserModel } from 'shared-models'
import { dataGridInterface } from '../interfaces/dataGridInterface'

// export class DataGridModel implements dataGridInterface {
//   constructor(data: dataGridInterface) {
//     this.dataGridName = data.dataGridName
//     this.dataGrid = data.dataGrid
//     this.store = data.store
//     this.rowFocused = data.rowFocused
//     this.columns = data.columns
//     this.buttonsColumns = data.buttonsColumns
//     this.openRow = data.openRow
//     this.openRowEnterKey = data.openRowEnterKey
//     this.focusEventChanged = data.focusEventChanged
//     this.focusEventChanging = data.focusEventChanging
//     this.openCreatePopup = data.openCreatePopup
//     this.user = data.user
//     this.url = data.url
//     this.urlAux = data.urlAux
//     this.filterRow = data.filterRow != undefined ? data.filterRow : false
//     this.filterPanel = data.filterPanel != undefined ? data.filterPanel : false
//     this.columnChooser =
//       data.columnChooser != undefined ? data.columnChooser : false
//     this.headerFilter =
//       data.headerFilter != undefined ? data.headerFilter : false
//     this.exportData = data.exportData != undefined ? data.exportData : false
//     this.showSearchPanel =
//       data.showSearchPanel != undefined ? data.showSearchPanel : false
//     this.showToolbar = data.showToolbar != undefined ? data.showToolbar : false
//     this.history = data.history
//     this.singularName = data.singularName
//     this.pluralName = data.pluralName
//     this.pageName = data.pageName
//     this.ref = data.ref
//     this.openedPopup = data.openedPopup
//   }
//   showSearchPanel: boolean
//   showToolbar: boolean
//   filterRow: boolean
//   filterPanel: boolean
//   columnChooser: boolean
//   headerFilter: boolean
//   exportData: boolean
//   user: UserModel
//   buttonsColumns: ButtonColumnModel[]
//   dataGridName: string
//   dataGrid: any
//   store: any
//   rowFocused: string
//   columns: ColumnModel[] | undefined
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

export class DataGridModel implements dataGridInterface {
  constructor(
    dataGridName: string,
    store: any,
    dataGrid: any,
    rowFocused: string,
    columns: ColumnModel[] | undefined,
    openRow: any,
    openRowEnterKey: any,
    focusEventChanged: any,
    focusEventChanging: any,
  ) {
    this.dataGridName = dataGridName
    this.store = store
    this.dataGrid = dataGrid
    this.rowFocused = rowFocused
    this.columns = columns
    this.openRow = openRow
    this.openRowEnterKey = openRowEnterKey
    this.focusEventChanged = focusEventChanged
    this.focusEventChanging = focusEventChanging
  }
  dataGridName: string
  rowFocused: string
  columns: ColumnModel[] | undefined
  store: any
  dataGrid: any
  openRow: (rowData: any) => void
  openRowEnterKey: (rowData: any) => void
  focusEventChanged: (rowData: any) => void
  focusEventChanging: (rowData: any) => void
}
