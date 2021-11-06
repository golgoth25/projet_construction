import React from "react"
import { Field } from "formik"

import Label from "./Label"
import ErrorFeedback from "./ErrorFeedback"

const FormField = (props) => {
  const { as: Component, label, name, className, ...otherProps } = props

  return (
    <Label title={label} className={className}>
      <Field name={name}>
        {({ field, meta: { error, touched } }) => (
          <>
            <Component {...field} {...otherProps} />
            {touched ? <ErrorFeedback>{error}</ErrorFeedback> : null}
          </>
        )}
      </Field>
    </Label>
  )
}

export default FormField