import React from 'react'

function Header(props) {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='logo512.png' alt=''/> 
            {props.text}
        </div>
    </div>
  )
}

export default Header