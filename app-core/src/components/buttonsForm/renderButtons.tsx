import { Button } from 'devextreme-react'
import React from 'react'

export const renderButtonsComponent = (
  validationGroup: string,
  handleCancelClick: () => void,
) => {
  return (
    <>
      <Button
        icon="remove"
        text="Cancelar"
        type="normal"
        stylingMode="outlined"
        style={{
          float: 'right',
          margin: '1em',
        }}
        onClick={handleCancelClick}
      />

      <Button
        icon="save"
        text="Guardar"
        type="success"
        useSubmitBehavior={true}
        validationGroup={validationGroup}
        stylingMode="contained"
        style={{ float: 'right', margin: '1em' }}
      />
    </>
  )
}
