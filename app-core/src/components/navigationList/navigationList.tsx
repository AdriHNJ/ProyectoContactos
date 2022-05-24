import React, { ReactElement } from "react";

import List from "devextreme-react/list.js";

function NavigationList(): ReactElement {
  const navigation = [
    { id: 1, text: "Products", icon: "product" },
    { id: 2, text: "Sales", icon: "money" },
    { id: 3, text: "Customers", icon: "group" },
    { id: 4, text: "Employees", icon: "card" },
    { id: 5, text: "Reports", icon: "chart" },
  ];

  return (
    <div className="list" style={{ width: "200px" }}>
      <List
        dataSource={navigation}
        hoverStateEnabled={false}
        activeStateEnabled={false}
        focusStateEnabled={false}
        elementAttr={{
          class: "panel-list dx-theme-accent-as-background-color",
        }}
      />
    </div>
  );
}

export default NavigationList;
