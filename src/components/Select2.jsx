import classNames from "classnames"

const Select2 = (props) => {  

  return (
    <select {...props} className={classNames("border-2 border-gray-400 py-1.5 px-2")}>
    <option value="Terrasse">Terrasse</option>
    <option value="Fondation">Fondation</option>
    <option value="Linteau">Linteau</option>
    </select>
  )
}

export default Select2