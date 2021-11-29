import { Field, Formik } from "formik"
import { useCallback } from "react"
import { useState, useEffect } from "react"
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
   
  const handleFormSubmit = (values) =>{    
    setSurface(values.longueur_p*values.largeur_p*1.05);
    setNb_carr(values.longueur_p*values.largeur_p*1.05/((values.longueur_c/100)*(values.largeur_c/100)));       
  };

  useEffect(() => {
    ;(async () => {
      const { data } = await axios("http://localhost:4000/article")

      setArticles2(data)
    })()
  },[])
  const [articles2, setArticles2] = useState([{}]); 
  const es6 = articles2[0].prix;  
  const es4 = [];
    
  
  for (let i =0; i < articles2.length; i++) {
    let er = articles2[i];
    let er2 = er.prix * surface;      
    let key = "cout";
    er[key] = er2;
    console.log("chouhou", er);
  }
  
  const [recup, setRecup] = useState([{}]);
  const handleClick = () => {
    setRecup(articles2);
  }

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
          <span></span>
          <h1 className="text-2xl font-bold text-center">Résultats</h1>
          <h6 className="text-2xl font-bold">Surface (en m²) : {surface}</h6>
          <h6 className="text-2xl font-bold">Nombre de carreaux de carrelage nécessaire : {nb_carr}</h6>
          <span>rr</span>
          <h1>Affichage des offres</h1>
          <span></span>                      
            <div className="container flex justify-center mx-auto">
              <p>
                <Button onClick = {handleClick}>Affichez</Button>
              </p>
              <div class="flex flex-col">
                <div className="w-full">
                  <div className="border-b border-pink-200 shadow">          
                    <div className="table-auto border-separate border border-black-900">
                      <thead class="bg-gray-50">            
                        <th className="w-1/2 ...">Nom article</th>
                        <th className="w-1/4 ...">Prix article</th>
                        <th className="w-1/4 ...">Cout total</th>
                      </thead>                                            
                          {recup.map((article) => (             
                          <tr class="whitespace-nowrap border-separate">
                            <td class="px-6 py-4 text-sm text-pink-500">{article.nom_article}</td>
                            <td class="px-6 py-2 text-xs text-black-500">{article.prix}</td>
                            <td>{article.cout}</td>
                          </tr>                             
                        ))}                      
                    </div>                  
                  </div>
                </div>
              </div>
            </div>                         
        </div>
      </div>
    </Page2>
  )
}

export default MerchandiseNewPage