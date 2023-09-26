import React, { useContext, useEffect, useState } from 'react'
import ToastContext from '../context/Toastcontext';
import ShowModal from '../Components/Layout/ShowModal';
import {Link, useNavigate } from 'react-router-dom'


function ShowContact() {

    const [modalShow, setModalShow] = useState(false);
    const [modaldata ,setModalData]= useState({})

    const { toast } = useContext(ToastContext)
    const [Contacts, setContacts] = useState([]);
    const Navigate =useNavigate()

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await fetch(`https://contactapp-mern.onrender.com/api/contact`, {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${localStorage.getItem("auth")}` },
                })
                const userres = await res.json();
                console.log(userres.length)
                setContacts(userres)
                if (userres.length === 0) {
                    toast.error("No Contacts Created")
                    Navigate("/home", { replace: true })
                }
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
    }, [])

    return (

        <div className="container pt-5">
            <h1>Contact List</h1>
            <div className="row " >
            {(Contacts.length===0)? 

            <div className=' mt-5'>
                <h5>contact list is empty</h5>
                <button type='button' className='btn btn-primary mt-2' onClick={()=>{ Navigate("/create", { replace: true })}}>create contact</button>
                
                
            </div>
            
            : <div><p>Total Number of Contacts : {Contacts.length}</p></div>}
                { Contacts && Contacts.map((contact) => (
                    <div className=" col-sm-6 col-md-4 mt-3" key={contact._id}  onClick={() => 
                       { setModalShow(true)
                        setModalData({})
                        setModalData(contact)}
                    }>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text">Phone: {contact.phone}</p>   
                            </div>
                           
                        </div>
                    </div>
                ))}

            <ShowModal setContacts={setContacts}  show={modalShow} modaldata={modaldata} onHide={() => setModalShow(false)} />
            <button type='button' className='btn btn-primary mt-2' onClick={()=>{ Navigate("/home", { replace: true })}}>Return home</button>

                {/* <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Jane Smith</h5>
                            <p className="card-text">Phone: 987-654-3210</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default ShowContact