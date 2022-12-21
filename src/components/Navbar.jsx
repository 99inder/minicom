import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { actionCreators } from "../redux"

const Navbar = ({showAlert}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(actionCreators.logout());
        showAlert("Logged Out Successfully", "success")
        navigate('/');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-light">MERN App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link to='/' className="nav-link active text-light" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link text-light" href="#">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('authToken') ?
                        <div>
                            <Link to="/login" className="btn btn-primary mx-2" role="button">Login</Link>
                            <Link to="/signup" className="btn btn-success mx-2" role="button">Signup</Link>
                        </div>
                        :
                        <div className='d-flex gap-2'>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            <Link to="/myorders" className="btn btn-warning">My Orders</Link>
                        </div>
                    }
                    <Link to="/cart" className="btn btn-danger mx-2 rounded-circle" role="button"><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar