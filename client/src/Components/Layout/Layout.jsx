import React from 'react'
import NavBar from './NavBar'


function Layout({children}) {
  return (
    <div className='d-flex flex-column'>
   <NavBar />
       <div className="container">{children}</div> 
    </div>
  )
}

export default Layout