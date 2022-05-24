import React, {useEffect, useState} from 'react';
import axios from 'axios';


import DataGrid, {
  Column,
  Scrolling,
  Pager,
  Paging,
  RowDragging,
  Editing,
  Popup,
  Form,
} from 'devextreme-react/data-grid';



import Button from 'devextreme-react/button';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';


import 'devextreme-react/text-area';
import { getContactos } from './service/contactosService';
import { EmptyItem, Item } from 'devextreme-react/form';
import { refreshDataGrid } from 'react-library-grid';
import { FileUploader } from 'devextreme-react';
import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';
import { Center } from 'devextreme-react/map';
import { EndOfLineState } from 'typescript';

export default function App(){
  
  const [data, setData]=useState([]);
  const [contactos, setContactos]:any=useState();
  const displayModes = [{ text: 'Display Mode \'full\'', value: 'full' }, { text: 'Display Mode \'compact\'', value: 'compact' }];
  const allowedPageSizes = [5, 10, 'all'];
  const labelModes = ['outside', 'static', 'floating', 'hidden'];
  const notesOptions = { height:120}

  useEffect(() => {
    async function fetchData() {
      try {
      var contactosResult = await getContactos("null")
      console.log(contactosResult?.data.results);

      setContactos(contactosResult?.data.results);
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])
  const dataGridRef = React.createRef();

 function onToolbarPreparing(event: any) {
    event.toolbarOptions.items.unshift(
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
          onClick: (_e: any) => {},
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

  return(<>
    <div className='content-block dx-card responsive-paddings'>
      <h2>Contactos</h2>
    </div>
    <div id="data-grid-demo">
    <DataGrid
      dataSource={contactos}
      showBorders={true}
      allowColumnResizing={true}
      allowColumnReordering={true}
      onToolbarPreparing={(event: any) => {
                  onToolbarPreparing(event)
      }}
    >
      <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            <Popup width={1100} height={1020} />
            <Form>
              <Item itemType="group" caption="Datos de la Empresa" colCount={4} colSpan={2}>
                <Item dataField="IdEmpresa"/> 
                <EmptyItem colSpan={3}/>
                <Item dataField="Nombre" colSpan={4} />              
                <Item dataField="Nom.Comercial" colSpan={4}/>
                
              </Item>

              <Item itemType="group" caption="Dirección" colCount={4} colSpan={2}>
                <Item dataField="Cod Sigla"  editorType={"dxSelectBox"}/>
                <Item dataField="VíaPublica" colSpan={3}/>                
                <Item dataField="Numero" />
                <Item dataField="Extensión" colSpan={3} />              
                <Item dataField="C Postal" />
                <Item dataField="Comp.Domicilio" colSpan={3} />
                <Item dataField="Localidad" colSpan={2}/>
                <Item dataField="Municipio" colSpan={2}/>
                <Item dataField="Provincia" colSpan={2}/>
                <Item dataField="Autonomia" colSpan={2}/>
                
              </Item>

              <Item itemType="group" caption="Datos de Contacto" colCount={3} colSpan={2}>
                <Item dataField="Nombre Contacto" colSpan={2}/>
                <Item dataField="Cargo" />
                <Item dataField="Telefono"/>
                <Item dataField="ExtensiónTelefono" />
                <Item dataField="Móvil" />
                <Item dataField="Web" colSpan={1}/>
                <Item dataField="Email" colSpan={2}/>
              </Item>

              <Item itemType="group" caption="Marketing" colCount={3} colSpan={2}>                
                <Item dataField="Ventas" />
                <Item dataField="NumTrabajadores" />
                <Item dataField="CNAE" editorType={"dxSelectBox"}/>
                <Item dataField="Notas" colSpan={3} editorType={"dxTextArea"} editorOptions={notesOptions}/>
              </Item>
            </Form>
          </Editing>
      <Scrolling
                mode="virtual"
                rowRenderingMode="virtual"
                showScrollbar="always"
                scrollByThumb={true}
                preloadEnabled={true}
                useNative={true}
              />
              
      <Paging defaultPageSize={10} /> 
      <Pager
        visible={true}
        allowedPageSizes={allowedPageSizes}
      />
      <RowDragging
        allowReordering={true}
        dropFeedbackMode="push"
      />

    </DataGrid>
    <div className="fileuploader-container">
          <FileUploader selectButtonText="Select photo" labelText="" accept="image/*" uploadMode="useForm" />
        </div>
    </div>
    </>)
}