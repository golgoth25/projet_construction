import { Field, Formik } from "formik"
import { useCallback, useState } from "react"
import * as yup from "yup"
import axios from "axios"

import Button from "../src/components/Button"
import FormField from "../src/components/FormField"
import Input from "../src/components/Input"
import Page2 from "../src/components/Page2"
import Select2 from "../src/components/Select2"

const validationSchema = yup.object().shape({
  volume: yup.number().integer().positive().required(),
  projet: yup.string().max(255).required(),            
})
const MerchandiseNewPage = () => {
  const initialValues = {
    volume: "",
    projet: "",                        
  }
  const [volume, setVolume] = useState(0);
  const [projet, setProjet] = useState(0);
  const [ciment1, setCiment1] = useState(0);
  const [ciment2, setCiment2] = useState(0);
  const [sable1, setSable1] = useState(0);
  const [sable2, setSable2] = useState(0);
  const [gravier, setGravier] = useState(0);
  const [eau1, setEau1] = useState(0);
  const [eau2, setEau2] = useState(0);  
  
  console.log("volume", volume);
  console.log("projet", projet);
  console.log("ciment1", ciment1);
  console.log("sable1", sable1);  

  const handleFormSubmit = (values) =>{    
    setVolume(values.volume);
    setProjet(values.projet);
    setCiment1(3150*(values.volume/10));
    setCiment2(3500*(values.volume/10));
    setSable1(7000*(values.volume/10));
    setSable2(5500*(values.volume/10));
    setGravier(13000*(values.volume/10));
    setEau1(1575*(values.volume/10));
    setEau2(1750*(values.volume/10));
  };
  
  const sab = 0;
  const cim = 0;
  const gra = 0;
  const eau = 0;

  switch (projet) {
    case 'Terrasse' :
      sab = sable1;
      cim = ciment1;
      gra = gravier;
      eau = eau1;
      break;
    case 'Fondation' :
      sab = sable2;
      cim = ciment1;
      gra = gravier;
      eau = eau1;
      break;
    case 'Linteau' :
      sab = sable1;
      cim = ciment2;
      gra = gravier;
      eau = eau2;
      break;
  }

  console.log("sab", sab);
  console.log("cim", cim);
  console.log("gra", gra);
  console.log("eau", eau);

  return (
    <Page2>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="px-32 py-24 mt-16 text-left bg-gray-500 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Calculez le dosage de béton pour votre projet</h1>
          <h3 className="text-2xl font-bold text-center">Déterminez la quantité de matériau nécessaire à la réalisation de votre projet</h3>
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
                    name="volume"
                    label="Volume souhaité de béton"
                    placeholder=""
                    minLength="1"
                    maxLength="120"
                  />
                </p>
                <p>
                <FormField
                  as={Select2}
                  name="projet"
                  label="Sélectionner un projet"
                  className="block mb-3"
                />
                </p>                
                <p>
                  <Button type="submit">Submit</Button>
                </p>                               
              </form>
            )}
          </Formik>
          <h1 className="text-2xl font-bold text-center">Résultats</h1>
          <h6 className="text-2xl font-bold">Sable (en kg) : {sab}</h6>
          <h6 className="text-2xl font-bold">Ciment (en kg) : {cim}</h6>
          <h6 className="text-2xl font-bold">Gravier (en kg) : {gra}</h6>
          <h6 className="text-2xl font-bold">Eau (en litre) : {eau}</h6>
          <span></span>
          <span></span>
          <h1>Affichage des offres</h1>          
        </div>
      </div>
    </Page2>
  )
}

export default MerchandiseNewPage