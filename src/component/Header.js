//capital letter for the first letter when naming component 
//to achieve the top command statetment press 'rafce, then enter' this is because we have installed 
//ES7 React/Redux/GraphQL/React-Natve snippets. It create a bioler plate of our component. 

// to import prop type you can type "impt" to import prop types
import PropTypes from 'prop-types'
import Button from './Button'  
//This import react
import React from 'react'

const Header = ({title, onAdd , showAdd}) => {
   
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'}
       text= {showAdd ? 'Close' : 'Add'} onClick= 
      {onAdd} />
    </header>
  )
}
//this is a default header it is used when you dont assign in any head 
// in your App.js file 

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//css in javascript

// const headingStyle = {
//     color: "red", backgroundColor: "blue"
// }

export default Header
