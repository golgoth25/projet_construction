import classNames from "classnames"

const ErrorFeedback = (props) => {
  const { children, className, ...otherProps } = props

  if (!children) {
    return null
  }

  return (
    <span
      {...otherProps}
      className={classNames("block mt-1 text-red-600 font-bold", className)}
    >
      {children}
    </span>
  )
}

export default ErrorFeedback