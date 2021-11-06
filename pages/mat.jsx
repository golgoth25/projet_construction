import { useCallback, useEffect, useState } from "react"
import axios from "axios"

import Page from "../src/components/Page"

const MatPage = () => {
  const [mat, setMat] = useState([])  

  useEffect(() => {
    ;(async () => {
      const { data } = await axios("http://localhost:4000/materiau")
      setMat(data)
    })()
  }, [])  
}

export default MatPage