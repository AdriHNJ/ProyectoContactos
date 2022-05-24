import { DataGrid } from "devextreme-react";
import {
  Column,
  FilterPanel,
  FilterRow,
  GroupPanel,
  HeaderFilter,
  Pager,
  Paging,
  Scrolling,
  Sorting,
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHideLoader } from "../../../redux/actions/configActions";
import "../expedienteStyles.scss";

function ExpedienteTableParams(): ReactElement {
  const pageSizes = [5, 10];
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(addHideLoader(false));
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  function isNotEmpty(value: any) {
    return value !== undefined && value !== null && value !== "";
  }

  const store: any = new CustomStore({
    key: "OrderNumber",
    load: function (loadOptions: any) {
      let params = "?";
      [
        "skip",
        "take",
        "requireTotalCount",
        "requireGroupCount",
        "sort",
        "filter",
        "totalSummary",
        "group",
        "groupSummary",
      ].forEach(function (i) {
        if (i in loadOptions && isNotEmpty(loadOptions[i])) {
          params += `${i}=${JSON.stringify(loadOptions[i])}&`;
        }
      });
      params = params.slice(0, -1);

      return fetch(
        `https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders${params}`
      )
        .then((response) => response.json())
        .then((data) => {
          return {
            data: data.data,
            totalCount: data.totalCount,
            summary: data.summary,
            groupCount: data.groupCount,
          };
        })
        .catch(() => {
          throw "No se han podido mostrar los datos";
        });
    },
  });
  return (
    <>
      <DataGrid
        id="gridExpedientesComponent"
        dataSource={store}
        showBorders={true}
        remoteOperations={true}
      >
        <Paging defaultPageSize={12} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[8, 12, 20]} />
        <GroupPanel visible={true} />
        <Sorting mode={"multiple"} />
        <FilterRow visible={true} />
        <FilterPanel visible={true} />
        <HeaderFilter visible={true} />
        {/* <Scrolling mode="infinite" /> */}
        <Column dataField="OrderNumber" dataType="number" />
        <Column dataField="OrderDate" dataType="date" />
        <Column dataField="StoreCity" dataType="string" />
        <Column dataField="StoreState" dataType="string" />
        <Column dataField="Employee" dataType="string" />
        <Column dataField="SaleAmount" dataType="number" format="currency" />
        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={5} />
      </DataGrid>
    </>
  );
}

export default ExpedienteTableParams;
