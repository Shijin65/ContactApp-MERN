import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Entrance.css"
function Entrance() {

  const Navigate = useNavigate();
  return (
    <div className='d-flex flex-column justify-content-center mt-5  ' >
      
      <div style={{marginTop:"60px"}}><h2>welcome to the master contact making application</h2></div>
  
  <div className='d-flex gap-3 '>
  <div><button type="button" className="btn btn-outline-dark" onClick={()=>{Navigate("/login",{replace:true})}}>LOGIN</button></div>
  <div><button type="button" className="btn btn-dark" onClick={()=>{Navigate("/register",{replace:true})}}>REGISTER</button></div>
  </div>
  </div>
  
  )
}

export default Entrance