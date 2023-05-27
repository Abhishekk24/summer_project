import React from 'react'

const Header = ({title}) => {
  return (
    <header><b>{title}</b></header>
  )
}

Header.defaultProps={
  title:'Grocery List'
}


export default Header