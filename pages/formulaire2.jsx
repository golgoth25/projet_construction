import { Field, Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"

import Button from "../src/components/Button"
import FormField from "../src/components/FormField"
import Input from "../src/components/Input"
import Page2 from "../src/components/Page2"
import MateriauSelector from "../src/components/MateriauSelector"

const validationSchema = yup.object().shape({
  id_materiau: yup.number().integer().min(1).required(),
  longueur: yup.number().integer().positive().required(),
  largeur: yup.number().integer().positive().required(),    
})
const MerchandiseNewPage = () => {
  const initialValues = {
    id_materiau: "",
    longueur: "",
    largeur: "",        
  }
  const handleFormSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <Page2>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="px-32 py-24 mt-16 text-left bg-gray-500 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Caractéristiques de votre projet sol</h1>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>            
                <p>
                <FormField
                  as={MateriauSelector}
                  name="id_materiau"
                  label="Sélectionner un matériau"
                  className="block mb-3"
                />
                </p>
                <p>
                  <FormField
                    as={Input}
                    name="longueur"
                    label="Longueur plancher (en cm)"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <p>
                  <FormField
                    as={Input}
                    name="largeur"
                    label="Largeur plancher (en cm)"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <p>
                  <Button type="submit">Submit</Button>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Page2>
  )
}

export default MerchandiseNewPage