import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/Authcontext";
import ToastContext from "../../context/Toastcontext";

function NavBar(props) {

  const Navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext)



  return (
    <div className="fixed-top mt-2">
      <nav
        className="navbar navbar-expand-md  mg-auto  bg-black h-20   " data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <Link to="/home" className="navbar-brand">
            CONTACT MANAGER
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ms-auto">
              {user ? (
                <>
                  <li className="nav-item me-3 h5">{user.username}</li>
                  <li className="nav-item">
                    <button type="button" className="btn btn-danger" onClick={() => {
                      setUser("")
                      localStorage.clear();
                      console.log("log outed from the account");
                      toast.success("logged out successfully");
                      Navigate("/login",{ replace : true });
                    }}>
                      Logout
                    </button>
                  </li></>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link active">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
