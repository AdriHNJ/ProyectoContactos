import React from 'react'
import Form, { Tab, TabbedItem } from 'devextreme-react/form'
import ExpedienteCostesComponent from './coste/expedienteCostesComponent'
import ExpedienteHistorialComponent from './expedienteHistorialComponent'
import ExpedienteDocumentosComponent from './expedienteDocumentosComponent'
import './expedienteInfoTabs.scss'
import { ExpedienteInfoProps } from '../interface/ExpedienteInfoPropsInterface'

function ExpedienteeInfoTabs() {
  return (
    <>
      <Form id="tabExpediente">
        <TabbedItem>
          <Tab title="Costes">
            <ExpedienteCostesComponent></ExpedienteCostesComponent>
          </Tab>
          <Tab title="Historial">
            <ExpedienteHistorialComponent></ExpedienteHistorialComponent>
          </Tab>
          <Tab title="Documentos">
            <ExpedienteDocumentosComponent></ExpedienteDocumentosComponent>
          </Tab>
        </TabbedItem>
      </Form>
    </>
  )
}
export default ExpedienteeInfoTabs
