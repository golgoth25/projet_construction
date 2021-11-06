import classNames from "classnames"

const Select = (props) => {
  const { className, ...otherProps } = props

  return (
    <select
      {...otherProps}
      className={classNames("border-2 border-gray-400 py-1.5 px-2", className)}
    />
  )
}

export default Select