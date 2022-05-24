import React, { ReactElement } from "react";
import { LoadPanel } from "devextreme-react/load-panel";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/combineReducers";

function LoaderComponent(): ReactElement {
  //const history = useHistory();
  const configState = useSelector((state: RootState) => state.config);

  return (
    <LoadPanel
      id="genericLoadPanel"
      shadingColor="rgba(192,192,192,0.96)" //rgba(192,192,192,0.9)
      position="center"
      // onHiding={ocultarLoader}
      visible={configState.visibleLoader}
      showIndicator={true}
      shading={true}
      showPane={true}
      closeOnOutsideClick={false}
    />
    /*   <div>
      <LoadPanel
        closeOnOutsideClick={false}
        visible={true}
        onShowing={() => {
          setTimeout(() => {
            history.push("/expedientePage");
          }, 3000);
        }}
      />
    </div> */
  );
}

export default LoaderComponent;
