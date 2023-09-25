import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/Authcontext'
import ToastContext from '../context/Toastcontext'



function Regiester() {

    const { toast }=  useContext(ToastContext)
    const{ RegisterUser }= useContext(AuthContext)
    const [state ,setstate]=useState(false)
    const [userData, setuserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword:""
    })

    const handleData = (event) => {

        const { name , value } = event.target;
        setstate(false)
        setuserData({ ...userData, [name] : value })

    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.password === userData.confirmpassword) {
        //     setuserData({confirmpassword:""})
        //    delete userData.confirmpassword;

            RegisterUser({...userData,confirmpassword:""})
        }else{
            setuserData({confirmpassword:""})
            toast.error('password not match')
            setstate(true)

        }

         
    }

    return (
        <div className='w-50  align-self-center'><div>
            <h2 className='mt-5 text-center'>Register Here</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label htmlFor="Username" className="col-sm-2 form-label mt-4 ">Username</label>
                    <input type="text" 
                    className="form-control" 
                    id="username" 
                    name='username'
                    autoComplete="username"
                    placeholder="Enter username..."
                    value={userData.username}
                    onChange={handleData} 
                    required/>
                </div>


                <div className="form-group ">
                    <label htmlFor="email" className="col-sm-2 form-label mt-4 ">Email address</label>
                    <input type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    aria-describedby="emailHelp"
                    autoComplete="email" 
                    placeholder="Enter email"
                        value={userData.email}
                        onChange={handleData}
                        required />
                </div>


                <div className="form-group">
                    <label htmlFor="Password" className="form-label mt-4">Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="Password" 
                    name='password'
                    placeholder="Password" 
                    autoComplete="off"
                        value={userData.password}
                        onChange={handleData} 
                        required/>
                </div>


                <div className="form-group ">
                    <label htmlFor="confirmPassword" className="form-label mt-4"> Confirm Password</label>
                    <input type="password" 
                    className = "form-control"
                    id="confirmpassword" 
                    name='confirmpassword'
                    placeholder="confirm Password" 
                    autComplete="off"
                    value={userData.confirmpassword}
                    onChange={handleData} 
                    required/>
                    {state ? <div className="text-danger"> The password not match. Try again?</div>:""}
                </div>
                

                <p className="mt-2 bg-black">Already Have a account?..<Link to='/login'>login</Link></p>
                <button type="submit" className="btn btn-success mt-4 ">Create</button>
                {/* <button type="button" className="btn btn-danger mt-4 ms-2" onClick={() => { setuserData("") }}>Clear</button> */}
            </form> </div>

        </div >



    )
}

export default Regiester