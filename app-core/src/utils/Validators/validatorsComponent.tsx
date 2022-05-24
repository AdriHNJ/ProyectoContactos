import { PatternRule, RequiredRule } from 'devextreme-react/form'
import React, { ReactElement } from 'react'

export function NIFValidatorComponent() {
  return (
    <>
      <RequiredRule message="Nif is required" />
      <PatternRule message="Nif invalid" pattern={/^[0-9]{8,8}[A-Za-z]$/} />
    </>
  )
}
