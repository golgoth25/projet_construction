const Label = (props) => {
    const { title, children, ...otherProps } = props
  
    return (
      <label {...otherProps}>
        <span className="text-lg font-bold block">{title}</span>
        {children}
      </label>
    )
  }
  
  export default Label