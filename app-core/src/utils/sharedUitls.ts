import notify from 'devextreme/ui/notify'
import { Moment } from 'moment'
import { Console } from 'winston/lib/winston/transports'
/* import { addCompany } from '../pages/companyAdministracionPages/companyPage/redux/companiesActions' */
/* import {
  postCompany,
  putCompany,
} from '../pages/companyAdministracionPages/companyPage/services/companiesServices' */
import { useScreenSize } from './media-query'
var { DateTime } = require('luxon')

export const getFileIcon = (file: string): string => {
  //En archivos con algún punto en el nombre esto no funciona
  // let index = file.indexOf('.')
  // let type = ''
  // if (index != -1) {
  //   type = file.substring(index + 1, file.length)
  // }
  let type = file.split('.').pop() ?? ''

  switch (type.toUpperCase()) {
    case 'PDF':
      return 'pdffile'
    case 'DOCX':
      return 'docxfile'
    case 'DOC':
      return 'docfile'
    case 'XLS':
      return 'xlsfile'
    case 'XLSX':
      return 'xlsxfile'
    case 'TXT':
      return 'txtfile'
    case 'JPG':
    case 'PNG':
    case 'BMP':
      return 'image'
    default:
      return 'file'
  }
}
export function reloadPage() {
  // The last "domLoading" Time //
  var currentDocumentTimestamp = new Date(
    performance.timing.domLoading,
  ).getTime()
  // Current Time //
  var now = Date.now()
  // Ten Seconds //
  var tenSec = 10 * 1000
  // Plus Ten Seconds //
  var plusTenSec = currentDocumentTimestamp + tenSec
  if (now > plusTenSec) {
    window.location.reload()
  } else {
  }
}
export enum NotifyType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export const showToast = (
  text: string,
  type: NotifyType,
  timer?: number,
): any => {
  return notify(text, type, timer != undefined ? timer : 1200)
}

interface Icurrency {
  style: string
  currency: string
  useGrouping: boolean
  minimumSignificantDigits: number
  type: string
  precision: number
}

export const getCurrency = (): Icurrency => {
  let location = window.localStorage.getItem('lenguage')
  let defaultCurrency: Icurrency = {
    style: 'currency',
    currency: 'EUR',
    useGrouping: true,
    minimumSignificantDigits: 4,
    type: 'currency',
    precision: 2,
  }
  switch (location) {
    case 'es-ES':
      return defaultCurrency
    default:
      return defaultCurrency
  }
}

export const getCookie = (cname: string) => {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export function getBoolean(value: string | boolean | number | null) {
  switch (value) {
    case true:
    case 'true':
    case 1:
    case '1':
    case 'on':
    case 'yes':
      return true
    default:
      return false
  }
}

export enum FormatType {
  date = 'dd/MM/yyyy',
  currency = 'currency',
}

export const getColumnAlignment = (type: String): String => {
  return type == 'decimal' || type == 'number' ? 'Right' : 'Left'
}

export const getColumnType = (type: String, format: String): any => {
  if (format != '') {
    switch (format) {
      case 'percent':
        return "##0' %'" //el formato por defecto multiplica por 100 y nosotros recibimos el valor ya multiplicado
      case 'currency':
        return getCurrency()
      default:
        return format
    }
  }
  switch (type) {
    case 'currency':
      return getCurrency()
    case 'string':
      return null
    case 'number':
      if (format == 'decimal') {
        return getCurrency()
      }
      return null
    case 'date':
      return FormatType.date
    case 'datetime':
      return FormatType.date
    case 'boolean':
      return 'boolean'
    case null:
      if (format == 'float') {
        return getCurrency()
      }
      return 'object'
    // case null:
    //   return "datetime";
    default:
      return null
  }
}
export const getAlignment = (type: String): String => {
  switch (type) {
    case 'currency':
      return 'right'
    default:
      return 'left'
  }
}

export function isNotEmpty(value: any) {
  return value !== undefined && value !== null && value !== ''
}
export function getParameters(value: string) {
  var url_string = window.location.href //window.location.href
  var url = new URL(url_string)
  var valorParametro = url.searchParams.get(value)

  return valorParametro
}
export function isDateTime(value: Moment): boolean {
  if (value != undefined) {
    if (DateTime.isDateTime(value)) {
      if (value.year.toString() === '1') return false
    }
  }
  return true
}

export function logout() {
  localStorage['recordarUsuario'] = 'false'
  localStorage.removeItem('user')
  window.location.reload()
}

export function checkStatusCode(code: number) {
  if (code == 401) {
    localStorage['recordarUsuario'] = 'false'
    // localStorage.removeItem("recordarUsuario");
    localStorage.removeItem('user')
    localStorage.removeItem('storage')
    window.location.reload()
  }
}

export function getDxType(type: string): string {
  switch (type) {
    case 'date':
      return 'dxDateBox'
      break
    case 'number':
      return 'dxNumberBox'
      break
    default:
      return 'dxTextBox'
      break
  }
}

export enum methodsEndPointType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
export enum logType {
  INFO = 'info',
  ERROR = 'error',
}

//temporal tamaños formulario
export function getSize(field: string): number {
  switch (field) {
    case 'Descripcion':
      return 3
      break
    case 'Nomcliente':
      return 2
    case 'Nomproveedor':
      return 2
    case 'Nomtransmitente':
      return 2
    case 'Comentario':
      return 3
    default:
      return 0
      break
  }
}

/**
 * Cambio de posicionamiento de las flechas de filtro del grid
 */

export function ReplaceheaderFilterArrows() {
  // column caption
  //document.querySelector(".dx-header-filter-indicator")!.style.("font-weight", "bold");
  //document.querySelector(".dx-datagrid-text-content.dx-text-content-alignment-right.dx-header-filter-indicator")!.classList.remove("dx-text-content-alignment-right");
  //document.querySelector(".dx-datagrid-text-content.dx-text-content-alignment-right.dx-header-filter-indicator")!.classList.add("dx-text-content-alignment-left");

  var float1 = document.querySelector('.dx-column-indicators') as HTMLElement
  float1.style.float = 'right'
  var float2 = document.querySelector(
    '.dx-datagrid-text-content.dx-text-content-alignment-right.dx-header-filter-indicator',
  ) as HTMLElement
  float2!.style.float = 'right'

  //$(".dx-header-filter-indicator").css("font-weight", "bold");
  //$(".dx-datagrid-text-content.dx-text-content-alignment-right.dx-header-filter-indicator").removeClass("dx-text-content-alignment-right").addClass("dx-text-content-alignment-left");
  // filter & sort icon
  /*  $(".dx-column-indicators").css("float", "right");  
    $(".dx-sort").css("float", "right");  
    // header cell text alignment  
    $('[role="columnheader"]').css("text-align", "left");   */
}
export function warningFormPrevent(
  stateForm: Boolean | undefined,
  formRef: any,
) {
  if (stateForm == false && formRef != null) {
    formRef.current!.instance.resetValues()
  }
}

export async function convertBase64(file: File) {
  var arrayBuffer = await file.arrayBuffer()
  var blob = new Blob([arrayBuffer])

  var reader = new FileReader()
  reader.onload = function (event) {
    const base64Org = event.target!.result?.toString().split(',')
    const base64: string | undefined = base64Org![1].toString()
  }

  return reader.readAsDataURL(blob)
}

export async function onSubmit(
  userState: any,
  company: any,
  calculadoraState: any,
  enlaceState: any,
  companyState: any,
  emailState: any,
  dispatch: any,
) {
  let result: boolean = false
  if (!company?.Id) {
    /*   dispatch(addCompany({ ...company, Id: 0 })) */
  }
  if (company?.Id) {
    /*     result = await putCompany(
      userState!.user!,
      company,
      calculadoraState,
      enlaceState?.enlaces!,
      companyState,
      emailState,
    ) */
  } else {
    /*     result = await postCompany(
      userState!.user!,
      company!,
      calculadoraState,
      enlaceState?.enlaces!,
      companyState,
      emailState,
    ) */
  }

  if (result) {
    localStorage.setItem(
      'parentCompanyModulos',
      JSON.stringify(companyState?.companyModulos),
    )
    return true
    /*    const refreshButton = document.getElementsByClassName(
       'dx-icon dx-icon-refresh',
     )[0] as HTMLElement
     refreshButton.click() */
    //props.setShowForm(false)
  } else {
    return false
  }
}

export const colCountByScreen = {
  xs: 1,
  sm: 2, //2
  md: 2, //3
  lg: 2, //4
}

export const refreshGrid = (props: any, showFrom: boolean) => {
  const refreshButton = document.getElementsByClassName(
    'dx-icon dx-icon-refresh',
  )[0] as HTMLElement
  refreshButton.click()
  props.setShowForm(showFrom)
}

export enum rolesName {
  SUPERADMINISTRADOR = 'Superadministrador',
  ADMINISTRADOR = 'Administrador',
  EMPLEADO = 'Empleado',
  CUENTA = 'Cuenta',
  COLABORADOR = 'Colaborador',
  TRANSMITENTE = 'Transmitente',
  CLIENTE = 'Cliente',
}

export const GridHeight = () => {
  let gridheight = '600'
  const { isXSmall, isSmall, isMedium, isLarge } = useScreenSize()
  gridheight = isXSmall ? '300' : '600'
  gridheight = isSmall ? '400' : '600'
  gridheight = isMedium ? '600' : '600'
  gridheight = isLarge ? '700' : '600'

  return gridheight
}
