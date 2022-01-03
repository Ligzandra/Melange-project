import React from 'react'
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'

export default function Nav() {

    return (
     

          <nav className="navbar mynav navbar-expand-sm navbar fixed-top ">
                <div className="container-fluid">
                <Link className="navbar-brand fs-2 fw-5 ms-5 text-warning" to="/home">LexProjecto</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active text-warning" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-warning" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-warning" to="/service">Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-warning" to="/register">Sign up</Link>
                    </li>
                    
                    </ul>
                </div>
                </div>
            </nav>
    )
}
