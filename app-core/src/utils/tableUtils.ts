import { exportGrid } from "../components/grid/dataGridComponent";

export function onToolbarPreparing(e: any) {
  e.toolbarOptions.items.unshift(
    {
      /* key: "Filtro",
        cssClass: "Filtro", */
      name: "filtro",
      location: "after",
      widget: "dxButton",
      options: {
        hint: "Filtros personalizados",
        icon: "filter",
        onClick: (e: any) => {
          let elementFilterPanel: HTMLElement = document.getElementsByClassName(
            "dx-datagrid-filter-panel-text"
          )[0] as HTMLElement;
          elementFilterPanel.click();
        },
      },
    },
    // {
    //   location: "after",
    //   widget: "dxButton",
    //   options: {
    //     icon: "preferences",
    //     hint: "Preferencias de la tabla",
    //     onClick: (e: any) => {
    //       let elementPoppUpConfig: HTMLElement = document.getElementById(
    //         "buttonPopUpConf"
    //       ) as HTMLElement;
    //       elementPoppUpConfig.click();
    //     },
    //   },
    // },
    {
      location: "after",
      widget: "dxButton",
      options: {
        icon: "refresh",
        hint: "Refrescar contenido",
        onClick: (e: any) => {
          let elementPoppUpConfig: HTMLElement = document.getElementById(
            "buttonRefresh"
          ) as HTMLElement;
          elementPoppUpConfig.click();
        },
      },
    },
    {
      location: "after",
      widget: "dxButton",
      options: {
        icon: "exportpdf",
        hint: "Exportar a PDF",
        onClick: () => {
          exportGrid();
        },
      },
    }
  );
}
export function repaintDataGrid(dataGrid: any) {
  dataGrid.instance.repaint();
}
export function refreshDataGrid(entire: boolean, dataGrid: any) {
  dataGrid.instance.refresh(entire);
}

export function actionKey(e: any, dataGrid: any, message: string) {
  e.preventDefault();
  dataGrid.instance.focus();
}
