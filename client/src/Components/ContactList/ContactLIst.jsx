import React from 'react'
import Contactcard from './Contactcard'


function ContactLIst(props) {

  const showocontact = props.contacts.map((contact)=>{
    return(
      <Contactcard contact={contact}/>
    )
  }) ;


  return (
    <div><h2>{showocontact}</h2>
    
    </div>
  )
}

export default ContactLIst