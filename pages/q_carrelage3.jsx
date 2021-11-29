import { Field, Formik } from "formik"
import { useCallback } from "react"
import { useState } from "react"
import * as yup from "yup"
import axios from "axios"

import Button from "../src/components/Button"
import FormField from "../src/components/FormField"
import Input from "../src/components/Input"
import Page2 from "../src/components/Page2"
import MateriauSelector from "../src/components/MateriauSelector"
import { data } from "autoprefixer"
import { date } from "yup"

const validationSchema = yup.object().shape({
  longueur_p: yup.number().integer().positive().required(),
  largeur_p: yup.number().integer().positive().required(),
  longueur_c: yup.number().integer().positive().required(),
  largeur_c: yup.number().integer().positive().required(),        
})
const MerchandiseNewPage = () => {
  const initialValues = {
    longueur_p: "",
    largeur_p: "",
    longueur_c: "",
    largeur_c: "",                
  }
  const [surface, setSurface] = useState(0);
  const [nb_carr, setNb_carr] = useState(0);
  const handleFormSubmit = async (values) =>{
    const { data } = await axios.post("http://localhost:4000/carrelage2", {longueur_p: values.longueur_p, largeur_p: values.largeur_p, longueur_c: values.longueur_c, largeur_c: values.largeur_c });

    setSurface(data.recevied.longueur_p);
    setNb_carr(data.recevied.largeur_p);
    console.log("RETURN", data);        
    console.log("RETOUR", surface);
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
                <h6 className="text-2xl font-bold">Dimensions de votre pièce</h6>                                               
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
                <h6 className="text-2xl font-bold text-center">Dimension des carreaux de carrelage</h6>
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
              </form>
            )}
          </Formik>
          <h1 className="text-2xl font-bold text-center">Résultats</h1>
          <h6 className="text-2xl font-bold">Surface (en m²) : {surface}</h6>
          <h6 className="text-2xl font-bold">Nombre de carreaux de carrelage nécessaire : {nb_carr}</h6>          
        </div>
      </div>
    </Page2>
  )
}

export default MerchandiseNewPage