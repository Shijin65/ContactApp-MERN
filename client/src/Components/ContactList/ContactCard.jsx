import React from 'react'
import "./card.css" 
function Contactcard(props) {
  const {id,name,number}=props.contact
  return (
    <div className="cardcontainer">
      
      <div className="left">
        <div className='icon'><i class="fa fa-user"></i></div>
        <div className="cardleft">
          <div>{name}</div>
          <div>{number}</div>
       </div></div>
      
       <div className="cardright">
       <i class="fa fa-trash "></i>
       </div>
  </div>
  


  )
}

export default Contactcard