import { useState, ReactElement, useEffect, useRef } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/combineReducers'
import {
  checkStatusCode,
  getAlignment,
  getBoolean,
  getColumnType,
  GridHeight,
  isNotEmpty,
  NotifyType,
  showToast,
} from '../../../utils/sharedUitls'
import { Button } from 'devextreme-react/button'
import { Popup } from 'devextreme-react/popup'
import ScrollView from 'devextreme-react/scroll-view'
import { checkScreenSize, getCurrency } from 'shared-utils'
import {
  addHideLoader,
  addShowLoader,
} from '../../../redux/actions/configActions'
import './expedienteTable.scss'

import { runInsights } from '../../../services/telemetryService'

import { ToolbarItem } from 'devextreme-react/popover'
import { CheckBox, DataGrid } from 'devextreme-react'
import {
  addCoste,
  addCostes,
  addDocumentos,
  addExpediente,
  addExpedientes,
  addTareaspendientes,
  addVehiculo,
} from '../redux/expedienteActions'

import { getExpediente, getStructure } from '../service/expedienteService'
import NotFound from '../../../components/notFound/notFound'
import { SharedGrid } from 'react-library-grid'
import { ButtonColumnModel, DataGridModel } from 'shared-models'
import ExpedienteInfo from './expedienteInfo'
import { useHistory } from 'react-router-dom'

import { modulos } from '../../../utils/allowModuloUtil'
import {
  ExpedienteCampoDatoModel,
  ExpedienteGridCampoDatoModel,
} from '../models/ExpedienteCampoDatoModel'
import { getCostes, getDetalleCoste } from '../service/costeService'
import { getDetalleVehiculo } from '../service/vehiculoService'
import { getTareasPendientesByExpediente } from '../service/tareaPendiente'
import { getDocumentoByExpediente } from '../service/documentosService'
import { useScreenSize, useScreenSizeGrid } from '../../../utils/media-query'
import {
  Column,
  ColumnChooser,
  Export,
  FilterPanel,
  FilterRow,
  Grouping,
  HeaderFilter,
  LoadPanel,
  Selection,
  Pager,
  Paging,
  Scrolling,
  SearchPanel,
  Sorting,
  StateStoring,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid'
import { now } from 'moment'
import CustomStore from 'devextreme/data/custom_store'
import { ExpedienteModel } from '../models/expedienteModel'

import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter'
import jsPDF from 'jspdf'
import SetTemplateEngine from 'devextreme/core/set_template_engine'
import setTemplateEngine from 'devextreme/core/set_template_engine'
import { Item } from 'devextreme-react/form'
import { formatDate } from 'devextreme/localization'
let dataGrid: any = null
let idRowSelected: string
let popUpshowInfo: any = null
const currency = getCurrency()
//let expedientesCount = 0
function ExpedienteIndexNew(): ReactElement {
  const [expedientesCount, setExpedientesCount] = useState(0)
  const [expedientesTotalFactura, setExpedientesTotalFactura] = useState(0)
  const expedienteState = useSelector((state: RootState) => state.expediente)
  const userState = useSelector((state: RootState) => state.user)
  const [showForm, setShowForm] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [showInfoConfig, setShowInfoConfig] = useState(false)
  const [checkboxFilterRow, setcheckboxFilterRow] = useState(false)
  const [structure, setStructure] = useState(new ExpedienteGridCampoDatoModel())
  const [store, setStore]: any = useState(null)
  var visibleFilterRow = localStorage.getItem('CheckFilterrow')
  const dispatch = useDispatch()
  const [rowFocused, setRowFocused] = useState('')
  const { isXSmall, isLarge } = useScreenSize()
  const expedienteGridRef: any = useRef(null)
  const gridheight = useScreenSizeGrid()
  useEffect(() => {
    async function fetchData() {
      try {
        const structure = await getStructure(userState?.user!)
        setStructure(structure)
        dispatch(addExpedientes(structure))

        const store: any = new CustomStore({
          key: 'IdKey',
          load: function (loadOptions: any) {
            let params = '?'
            ;[
              'skip',
              'take',
              'requireTotalCount',
              //"requireGroupCount",
              'sort',
              'filter',
              'totalSummary',
              //'group'
              //"groupSummary",
            ].forEach(function (i) {
              if (i in loadOptions && isNotEmpty(loadOptions[i])) {
                params += `${i}=${JSON.stringify(loadOptions[i])}&`
              }
            })
            params = params.slice(0, -1)
            if (params.includes('group')) {
              url = `${url}/${params}`
            } else url = `${urlAux}/${params}`
            return fetch(url, {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + token,
              },
            })
              .then((response) => {
                checkStatusCode(response.status)
                return response.json()
              })
              .then((data) => {
                if (data.Datos != null) {
                  return {
                    data: data.Datos,
                    totalCount: data.totalCount,
                    summary: data.summary,
                    //groupCount: data.groupCount,
                  }
                }

                return null
                // logger.info('front.endpoint.get.expedientes.loadStorefromdb.format', {
                //   component: loadStore.name
                // })
              })
              .catch((err) => {
                console.log(err)
                // logger.error('front.endpoint.get.expedientes.loadStore.format', {
                //   component: loadStore.name
                // })
              })
          },
        })
        setStore(store)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])
  function onToolbarPreparing(event: any, dataGrid: any) {
    event.toolbarOptions.items.unshift(
      {
        name: 'filtro',
        location: 'after',
        widget: 'dxButton',
        options: {
          hint: 'Filtros personalizados',
          icon: 'filter',
          onClick: (_e: any) => {
            expedienteGridRef
              ? expedienteGridRef!.current!.instance.option(
                  'filterBuilderPopup.visible',
                  true,
                )
              : showToast(
                  'No se ha podido recargar, inténtelo de nuevo mas tarde',
                  NotifyType.error,
                  5000,
                )
            // let elementFilterPanel: HTMLElement =
            //   document.getElementsByClassName(
            //     'dx-datagrid-filter-panel-text',
            //   )[0] as HTMLElement
            // elementFilterPanel.click()
          },
        },
      },

      {
        location: 'after',
        widget: 'dxButton',
        name: 'id1',
        id: 'id1',
        options: {
          id: 'id1',
          name: 'id2',
          icon: 'refresh',
          hint: 'Refrescar contenido',
          onClick: (_e: any) => {
            expedienteGridRef
              ? expedienteGridRef!.current!.instance.refresh()
              : showToast(
                  'No se ha podido recargar, inténtelo de nuevo mas tarde',
                  NotifyType.error,
                  5000,
                )
          },
        },
      },
      {
        location: 'after',
        widget: 'dxButton',

        options: {
          icon: 'exportpdf',
          hint: 'Exportar a PDF',
          onClick: () => {
            const doc = new jsPDF()
            //setTemplateEngine('hogan')
            exportDataGridToPdf({
              jsPDFDocument: doc,
              component: expedienteGridRef.current!.instance,
              keepColumnWidths: true,
              //selectedRowsOnly: true,
            }).then(() => {
              doc.save('Expedientes.pdf')
            })
          },
        },
      },
    )
  }
  let token = userState?.user?.Token
  let url = `${process.env.REACT_APP_API_URL_CORE}/Expedientes/GetExpedientes`
  let urlAux = `${process.env.REACT_APP_API_URL_CORE}/Expedientes/GetExpedientes`

  const openExpediente = async (rowData: any) => {
    setShowInfo(true)
    dispatch(addShowLoader(true))
    dispatch(
      addExpediente(await getExpediente(rowData.data.Id, userState!.user!)),
    )
    dispatch(addCoste(await getDetalleCoste(rowData.data.Id, userState!.user!)))
    dispatch(
      addVehiculo(
        await getDetalleVehiculo(rowData.data.IdVehiculo, userState!.user!),
      ),
    )
    dispatch(addCostes(await getCostes(rowData.data.Id, userState!.user!)))
    dispatch(
      addTareaspendientes(
        await getTareasPendientesByExpediente(
          rowData.data.Id,
          userState!.user!,
        ),
      ),
    )
    dispatch(
      addDocumentos(
        await getDocumentoByExpediente(rowData.data.Id, userState!.user!),
      ),
    )
    dispatch(addShowLoader(false))
  }

  const openExpedienteEnterKey = async (rowId: any) => {
    setShowInfo(true)
    dispatch(addShowLoader(true))
    let data: ExpedienteCampoDatoModel | undefined = await getExpediente(
      rowId,
      userState!.user!,
    )
    if (data != undefined) {
      dispatch(addExpediente(data))
      dispatch(addHideLoader(false))
    } else {
      setShowInfo(false)
      showToast('No se ha podido cargar el expediente', NotifyType.error, 5000)
    }
  }

  const focusEventChanged = (e: any) => {
    if (e.row) {
      setRowFocused(e.row.key)
      idRowSelected = e.row.key
    }
  }

  const handleHideInfo = () => {
    setShowInfo(false)
  }
  const handleHideInfoConfig = () => {
    setShowInfoConfig(false)
  }

  //handle del filtro por columna
  const handleOnUpdateCheckFilterrow = () => {
    setcheckboxFilterRow(!checkboxFilterRow)
    localStorage.setItem('CheckFilterrow', checkboxFilterRow!.toString())
    window.location.reload()
  }
  function isMobileScreen() {
    if (!checkScreenSize())
      return (
        <Button
          text="Cerrar"
          style={{ float: 'right' }}
          onClick={handleHideInfo}
        />
      )
  }
  const buttonOptions = {
    icon: 'close',
    onClick: function () {
      handleHideInfo()
    },
  }

  return (
    <>
      <div
        className={'content-block dx-card'}
        style={{
          borderColor: '#f4f9ff',
          borderWidth: '2px',
          margin: '0.3%',
          padding: '0.16%',
        }}
      >
        <div id="">
          <h3 style={{ margin: 0, padding: 0 }}>Consulta de Contactos</h3>
          {structure?.Campos != undefined && structure?.Campos.length > 0 ? (
            <DataGrid
              id={'gridExpedientesComponent'}
              keyExpr="IdKey"
              ref={expedienteGridRef}
              dataSource={store}
              remoteOperations={true}
              allowColumnReordering={true}
              allowColumnResizing={true}
              columnAutoWidth={true}
              showBorders={true}
              showRowLines={true}
              height={gridheight}
              onInitialized={function (e) {
                e.component?.selectAll()
              }}
              rowAlternationEnabled={true}
              columnHidingEnabled={checkScreenSize() ? false : true}
              onRowDblClick={(event: any) => {
                if (event.data != undefined) {
                  openExpediente(event)
                }
              }}
              onKeyDown={(e: any) => {
                try {
                  if (e.event.code === 'Enter') {
                    if (
                      expedienteGridRef?.current?.props.focusedRowKey !=
                      undefined
                    )
                      openExpedienteEnterKey(
                        expedienteGridRef?.current?.props.focusedRowKey,
                      )
                  }
                } catch (error) {}
              }}
              focusedRowEnabled={true}
              // focusedRowKey={rowFocused}
              /*   onFocusedRowChanged={(event: any) => {
                  focusEventChanged(event)
                }} */
              onToolbarPreparing={(event: any) => {
                onToolbarPreparing({ ...event, component: dataGrid }, dataGrid)
              }}
            >
              <Scrolling
                mode="virtual"
                rowRenderingMode="virtual"
                showScrollbar="always"
                scrollByThumb={true}
                preloadEnabled={true}
                useNative={true}
              />

              {checkScreenSize() ? (
                <SearchPanel visible={true} width={240} />
              ) : (
                <SearchPanel visible={true} width={100} />
              )}
              <Sorting mode={'multiple'} />
              <HeaderFilter visible={false} />

              <Paging pageSize={1000} />
              <ColumnChooser enabled={true} />
              <LoadPanel enabled={true} />
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Export
                excelWrapTextEnabled={true}
                enabled={true}
                fileName={'Expedientes' + now()}
                allowExportSelectedData={true}
              />

              <Selection
                mode="multiple"
                showCheckBoxesMode={isLarge ? 'always' : 'never'}
              />
              <Grouping
                autoExpandAll={false}
                allowCollapsing={true}
                expandMode={'rowClick'}
              />
              <StateStoring
                enabled={true}
                type="localStorage"
                storageKey={'gridExpedientesComponent'}
              />

              {structure.Campos != undefined
                ? structure.Campos.map((value) => {
                    return (
                      <Column
                        visible={value.Visible}
                        key={value.Nombre}
                        dataField={value.Nombre}
                        caption={value.Texto}
                        dataType={value.Tipo}
                        allowGrouping={
                          value.Nombre == 'TotalFactura' ? false : true
                        }
                        alignment={getAlignment(value.Tipo)}
                        format={getColumnType(value.Tipo, value.Format)}
                        allowHeaderFiltering={
                          value.Tipo == 'date' ? false : true
                        }
                        defaultSortOrder="asc"
                        // allowFiltering={
                        //   value.Nombre == 'TipoUsuario' ? false : true
                        // }
                      />
                    )
                  })
                : null}

              <Summary>
                <TotalItem column="NumeroExpediente" summaryType="count" />
                <TotalItem
                  column="TotalFactura"
                  summaryType="sum"
                  valueFormat={currency}
                  alignment="center"
                  displayFormat="{0}"
                />
              </Summary>
            </DataGrid>
          ) : null}
          <Popup
            visible={showInfoConfig}
            onHiding={handleHideInfoConfig}
            dragEnabled={true}
            closeOnOutsideClick={false}
            showTitle={true}
            title="Configuración"
            width={300}
            height={250}
          >
            <CheckBox
              text="Búsqueda por campo."
              value={
                visibleFilterRow
                  ? getBoolean(visibleFilterRow)
                  : checkboxFilterRow
              }
              onValueChanged={handleOnUpdateCheckFilterrow}
            />
          </Popup>
          <Popup
            ref={(ref) => (popUpshowInfo = ref)}
            visible={showInfo}
            onHiding={handleHideInfo}
            dragEnabled={true}
            closeOnOutsideClick={false}
            showTitle={true}
            title="Consulta Expediente"
            resizeEnabled={true}
            showCloseButton={false}
            width="95%"
            height="95%"
          >
            <ToolbarItem
              options={buttonOptions}
              widget="dxButton"
              location="after"
            />
            <ScrollView width="100%" height="100%">
              <ExpedienteInfo></ExpedienteInfo>
            </ScrollView>
            <div>{isMobileScreen()}</div>
          </Popup>
          <Button
            id="buttonPopUpConf"
            style={{ display: 'none' }}
            onClick={() => setShowInfoConfig(!showInfoConfig)}
          />
        </div>
      </div>

      {/*       <div
          className={'content-block dx-card responsive-paddings'}
          style={{ borderColor: '#f4f9ff', borderWidth: '2px', margin: '0.6%' }}
        >
          <NotFound data={{ type: 1 }}></NotFound>
        </div> */}

      {}
    </>
  )
}

export default ExpedienteIndexNew
