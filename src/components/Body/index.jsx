import PropTypes from "prop-types"

const Body = ({ children }) => {
  return (
    <main>
      { children }
    </main>
  )
}

export default Body

Body.propTypes = {
  children: PropTypes.node,
}