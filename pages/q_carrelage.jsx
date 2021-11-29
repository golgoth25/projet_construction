import { Field, Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"
import axios from "axios"

import Button from "../src/components/Button"
import FormField from "../src/components/FormField"
import Input from "../src/components/Input"
import Page2 from "../src/components/Page2"
import MateriauSelector from "../src/components/MateriauSelector"

const validationSchema = yup.object().shape({
  longueur_p: yup.number().integer().positive().required(),
  largeur_p: yup.number().integer().positive().required(),
  longueur_c: yup.number().integer().positive().required(),
  largeur_c: yup.number().integer().positive().required(),
  surface: yup.number().integer().positive(),
  nb_carreaux: yup.number().integer().positive(),    
})
const MerchandiseNewPage = () => {
  const initialValues = {
    longueur_p: "",
    largeur_p: "",
    longueur_c: "",
    largeur_c: "",
    surface: "",
    nb_carreaux: "",        
  }
  const handleFormSubmit = async (values) =>{
    const { data } = await axios.post("http://localhost:4000/carrelage", {longueur_p: values.longueur_p, largeur_p: values.largeur_p, longueur_c: values.longueur_c, largeur_c: values.largeur_c });
    console.log("RETURN", data);
  };

  return (
    <Page2>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="px-32 py-24 mt-16 text-left bg-gray-500 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Votre projet Carrelage</h1>
          <h3 className="text-2xl font-bold text-center">Evaluez le nombre de carreaux de carrelage nécessaire à votre objet</h3>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h8 className="text-2xl font-bold">Dimensions de votre pièce</h8>                                               
                <p>
                  <FormField
                    as={Input}
                    name="longueur_p"
                    label="Longueur (en m)"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <p>
                  <FormField
                    as={Input}
                    name="largeur_p"
                    label="Largeur (en m)"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <h8 className="text-2xl font-bold text-center">Dimension des carreaux de carrelage</h8>
                <p>
                  <FormField
                    as={Input}
                    name="longueur_c"
                    label="Longueur (en cm)"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <p>
                  <FormField
                    as={Input}
                    name="largeur_c"
                    label="Largeur (en cm)"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <p>
                  <Button type="submit">Submit</Button>
                </p>
                <h8 className="text-2xl font-bold text-center">Résultats</h8>
                <p>
                  <FormField
                    as={Input}
                    name="surface"
                    label="Longueur (en m²)"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <p>
                  <FormField
                    as={Input}
                    name="nb_carreaux"
                    label="Nombre de carreaux"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
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