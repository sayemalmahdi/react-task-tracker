import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h2>Hello from Header components</h2>
      <h2 style={{color:'red'}}>Hello from Header components</h2>
      <h2 style={{color:'red', backgroundColor:'black'}}>Hello from Header components</h2>
      <h2 style={headingStyle}>Hello from Header components</h2>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title : 'Hello From default props',
}

Header.propTypes = {
    title : PropTypes.string.isRequired ,
}

const headingStyle = {
    color:'white', 
    backgroundColor:'blue' 
}


export default Header
