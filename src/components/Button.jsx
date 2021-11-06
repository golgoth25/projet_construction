import classNames from "classnames"

const Button = (props) => {
  const { className, ...otherProps } = props

  return (
    <button
      className={classNames(
        "bg-blue-600 text-white text-lg px-3 py-2",
        className,
      )}
      {...otherProps}
    />
  )
}

export default Button