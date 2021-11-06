import { useContext } from "react"

import AppContext from "./AppContext"
import Select from "./Select"

const MateriauSelector = (props) => {
  const { mat } = useContext(AppContext)

  return (
    <Select {...props}>
      {mat.map(({ id, type_materiau }) => (
        <option key={id} value={id}>
          {type_materiau}
        </option>
      ))}
    </Select>
  )
}

export default MateriauSelector