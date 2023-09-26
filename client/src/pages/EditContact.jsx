import react, { useContext, useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom'
// import AuthContext from '../context/Authcontext';
import ToastContext from "../context/Toastcontext";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
function EditContact() {
  const { toast } = useContext(ToastContext);
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });
  //   const {user}=useContext(AuthContext);
  const Navigate =useNavigate()
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(id);
        const res = await fetch(`https://contactapp-mern.onrender.com/api/contact/${id}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        });
        const serverres = await res.json();
        console.log(serverres);
        setContactDetails(serverres);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handlechange = (event) => {
    const { name, value } = event.target;
    setContactDetails({ ...ContactDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(`https://contactapp-mern.onrender.com/api/contact/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
      body: JSON.stringify(ContactDetails),
    });
    const serverres = await res.json();

    if (!serverres.error) {
      toast.success("contact edited successfully");

      setContactDetails({
        name: "",
        phone: "",
        email: "",
      });
      Navigate(`/contacts`,{replace:true} )
    } else {
      toast.error(serverres.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" w-50 position-absolute top-50 start-50 translate-middle">
          <h2 className=" text-center">Add Contact</h2>

          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 form-label mt-4">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              autoComplete="on"
              value={ContactDetails.name}
              placeholder="Enter name"
              onChange={handlechange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="email"
              value={ContactDetails.email}
              autoComplete="on"
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Phone" className="form-label mt-4">
              Phone number
            </label>
            <input
              type="Phone"
              className="form-control"
              id="Phone"
              name="phone"
              placeholder="Phone"
              value={ContactDetails.phone}
              autoComplete="on"
              onChange={handlechange}
            />
          </div>

          <Col
            xs={12}
            md={6}
            className="d-flex align-items-start justify-content-start mt-3 "
          >
            <button type="submit" className="btn btn-success mt-3 ">
              SAVE CHANGES
            </button>
          </Col>
        </div>
      </form>
    </>
  );
}

export default EditContact;
