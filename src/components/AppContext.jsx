import axios from "axios"
import { createContext, useEffect, useState } from "react"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [mat, setMat] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios("http://localhost:4000/materiau")

      setMat(data)
    })()
  }, [])

  return <AppContext.Provider {...props} value={{ mat }} />
}

export default AppContext