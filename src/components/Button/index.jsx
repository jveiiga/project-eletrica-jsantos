import PropTypes from "prop-types"

const Button = ({ className,  width, height, padding, border, borderRadius, color, backgroundColor, name, value, fontSize, hoverColor,  hoverBorderColor, transition, cursor}) => {

  const styledButton = {
    width: width,
    height: height,
    padding: padding,
    border: border,
    borderRadius: borderRadius,
    color: color,
    backgroundColor: backgroundColor,
    name: name,
    value: value,
    fontSize: fontSize,
    hoverColor: hoverColor,
    hoverBorderColor: hoverBorderColor,
    transition: transition,
    cursor: cursor,
  }

  return (
    <button className={className} style={styledButton}>
      {name}
    </button>
  )
}

export default Button

Button.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  fontSize: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  transition: PropTypes.string,
  cursor: PropTypes.string,
}