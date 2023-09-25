import { useContext, useEffect } from "react"
import AuthContext from "../context/Authcontext"
import { useNavigate } from "react-router-dom";


function Home() {
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate()

  useEffect(() => {
    !user && Navigate("/login", { replace: true })

  })
  return (
    <div className="d-flex justify-content-around  flex-wrap ms-3 mt-5">

      <div className="row">
        <div className="col-md-6 mb-3 mt-2">
          <div className="card text-white bg-success" style={{ maxWidth: "20rem" }}>
            <div className="card-header"><h4 className="card-title">Create Contact</h4></div>
            <div className="card-body">
              <p className="card-text">Click the button below to continue to the create contact page</p>
              <button className="btn ms-auto bg-black" onClick={() => {
                Navigate("/create", { replace: true })
              }}>CREATE</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3 mt-2">
          <div className="card text-white bg-primary" style={{ maxWidth: "20rem" }}>
            <div className="card-header"><h4 className="card-title">All Contacts</h4></div>
            <div className="card-body">
              <p className="card-text">This card will show all the contacts that you created</p>
              <button className="btn ms-auto bg-black" onClick={()=>{
                 Navigate("/contacts", { replace: true })
              }}>SHOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
    <div className="col-md-6 mb-3 mt-2">
      <div className="card text-white bg-warning" style={{ maxWidth: "20rem" }}>
        <div className="card-header"><h4 className="card-title">Edit Contact</h4></div>
        <div className="card-body">
          <p className="card-text">You can make changes to your contact if you need</p>
          <button className="btn ms-auto bg-black">EDIT</button>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-3 mt-2">
      <div className="card text-white bg-danger" style={{ maxWidth: "20rem" }}>
        <div className="card-header"><h4 className="card-title">Delete Contact</h4></div>
        <div className="card-body">
          <p className="card-text">This site allows you to delete your contact if you need</p>
          <button className="btn ms-auto bg-black">DELETE</button>
        </div>
      </div>
    </div>
  </div> */}

    </div>
  )
}

export default Home