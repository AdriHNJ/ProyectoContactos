import { useState, ReactElement, useEffect, useRef } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/combineReducers'
import {
  getBoolean,
  GridHeight,
  NotifyType,
  showToast,
} from '../../../utils/sharedUitls'
import { Button } from 'devextreme-react/button'
import { Popup } from 'devextreme-react/popup'
import ScrollView from 'devextreme-react/scroll-view'
import { checkScreenSize } from 'shared-utils'
import {
  addHideLoader,
  addShowLoader,
} from '../../../redux/actions/configActions'
/* import './expedienteTable.scss'
import '../expedienteStyles.scss' */
import { runInsights } from '../../../services/telemetryService'
//import { runInsights } from 'telemetry-portal'
import { ToolbarItem } from 'devextreme-react/popover'
import { CheckBox } from 'devextreme-react'
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
import { ExpedienteGridCampoDatoModel } from '../models/ExpedienteCampoDatoModel'
import { getCostes, getDetalleCoste } from '../service/costeService'
import { getDetalleVehiculo } from '../service/vehiculoService'
import { getTareasPendientesByExpediente } from '../service/tareaPendiente'
import { getDocumentoByExpediente } from '../service/documentosService'
import { useScreenSizeGrid } from '../../../utils/media-query'

// "react-library-grid": "file:..",

let dataGrid: any = null
let idRowSelected: string
let popUpshowInfo: any = null

function ExpedienteIndex(): ReactElement {
  const expedienteState = useSelector((state: RootState) => state.expediente)
  const userState = useSelector((state: RootState) => state.user)
  const [showForm, setShowForm] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [showInfoConfig, setShowInfoConfig] = useState(false)
  const [checkboxFilterRow, setcheckboxFilterRow] = useState(false)
  const [structure, setStructure] = useState(new ExpedienteGridCampoDatoModel())
  var visibleFilterRow = localStorage.getItem('CheckFilterrow')
  const dispatch = useDispatch()
  const [rowFocused, setRowFocused] = useState('')
  const appInsights = runInsights()
  const history = useHistory()
  const expedienteGridRef = useRef(null)
  const gridheight = useScreenSizeGrid()
  useEffect(() => {
    async function fetchData() {
      try {
        localStorage.removeItem('storage')
        const structure = await getStructure(userState?.user!)
        setStructure(structure)
        dispatch(addExpedientes(structure))
        // appInsights.trackPageViewPerformance({
        //   name: ExpedienteIndex.name,
        // })
        // await dispatch(addExpedientes(await getCampos(userState!.user!)))
        dispatch(addHideLoader(false))
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

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

  const openExpedienteEnterKey = async (rowData: any) => {
  
  }

  const handleOpenCreatePopup = async () => {}

  const focusEventChanged = async (e: any) => {
    if (e.row) {
      setRowFocused(e.row.key)
      idRowSelected = e.row.key
    }
  }
  const focusEventChanging = async (e: any) => {}

  const handleHideInfo = () => {
    setShowInfo(false)
  }
  const handleHideInfoConfig = () => {
    setShowInfoConfig(false)
  }

  function fillDataGrid(): DataGridModel {
    const buttonColumn: ButtonColumnModel = new ButtonColumnModel({
      text: 'texto',
      icon: null,
      hint: '',
      cellRender: ({}) => {
        alert('hello world')
      },
    })
    const buttonColumn2: ButtonColumnModel = new ButtonColumnModel({
      text: 'texto2',
      icon: null,
      hint: '',
      cellRender: ({}) => {
        alert('hello world2')
      },
    })
    let dataGridModel = new DataGridModel({
      dataGridName: 'gridExpedientesComponent',
      height: gridheight,
      rowFocused: rowFocused,
      ref: expedienteGridRef,
      columns: structure.Campos,
      openRow: openExpediente,
      openRowEnterKey: openExpedienteEnterKey,
      focusEventChanged: focusEventChanged,
      focusEventChanging: focusEventChanging,
      openCreatePopup: null,
      user: userState!.user!,
      url: `${process.env.REACT_APP_API_URL_CORE}/Expedientes/GetExpedientes/FilterGroup`,
      urlAux: `${process.env.REACT_APP_API_URL_CORE}/Expedientes/GetExpedientes`,
      buttonsColumns: [],
      filterRow: true,
      filterPanel: true,
      columnChooser: true,
      headerFilter: true,
      exportData: true,
      showSearchPanel: true,
      showToolbar: true,
      history: history,
      singularName: 'Expediente',
      pluralName: 'Expediente',
      pageName: 'Expediente',
      openedPopup: showForm,
    })

    return dataGridModel
  }
  //prevenir tabla en blanco con el cierre del expediente al pulsar en back
  window.addEventListener(
    'popstate',
    function () {
      // window.location.reload()
    },
    false,
  )

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
      {/*       {isRolAllowed(userState!.user!, modulos.EXPEDIENTES, [
        modulosClaims.VIEW,
      ]) ? ( */}
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
          <h3 style={{ margin: 0, padding: 0 }}>Consulta de Expedientes</h3>
          {structure?.Campos != undefined && structure?.Campos.length > 0 ? (
            <SharedGrid
              key="dataGridExpedientes"
              dataGridModel={fillDataGrid()}
            />
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
      {/* 
        <div
          className={'content-block dx-card responsive-paddings'}
          style={{ borderColor: '#f4f9ff', borderWidth: '2px', margin: '0.6%' }}
        >
          <NotFound data={{ type: 1 }}></NotFound>
        </div> */}

      {}
    </>
  )
}

export default ExpedienteIndex
