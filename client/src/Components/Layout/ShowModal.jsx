import React from 'react';
import {useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';

function ShowModal(props) {
  const Navigate =useNavigate()
  const deletehandler = async (id) => {
    if (window.confirm("are you sure you want to delete this contact?")) {

//DELETE CONTACT//---------------------------------------------------

      const res = await fetch(`http://localhost:8001/api/contact/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("auth")}`

          }
        })
      const userres = await res.json();
      console.log(userres.newcont)
      props.setContacts(userres.newcont)
      toast.error(`contact deleted "${userres.DELETED_CONTACT}"`)
    }

    props.onHide()
  }
  console.log(props.modaldata)
  return (

    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className='mt-5' style={{ marginTop: "250px" }}>
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter" className='mt-3'>
          Contact Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example ">
        <Container>
          <Row className="mt-4" >

            <Col xs={6} md={2}>
              name :
            </Col><Col xs={12} md={10}>
              <h3 className='text-uppercase'>{props.modaldata.name}</h3>
            </Col>
          </Row>
          <Row className="mt-3" >

            <Col xs={6} md={2}>
              phone :
            </Col>
            <Col xs={12} md={10}>
              <h5>{props.modaldata.phone}</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2}>
              Email :
            </Col>
            <Col xs={12} md={10}>
              <h5>{props.modaldata.email}</h5>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>

        <div className='d-flex gap-3'>
          <div>
            <button type="button" className="btn btn-primary" onClick={()=>{ Navigate(`/editcontact/${props.modaldata._id}`,{replace:true} ) }}>Edit</button>
          </div>
          <div>
            <button className='btn btn-danger'
              onClick={() => { deletehandler(props.modaldata._id) }}>Move to trash</button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default ShowModal;