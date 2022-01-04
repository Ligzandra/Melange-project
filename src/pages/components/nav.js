import React from 'react'
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'

export default function Nav() {

    return (
     

          <nav className="navbar mynav navbar-expand-sm navbar fixed-top ">
                <div className="container-fluid">
                <Link className="navbar-brand fs-2 fw-5 ms-5 text-warning" to="/home">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto ">
                    <li className="nav-item ms-5">
                        <Link className="nav-link active text-warning " aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link className="nav-link  text-warning" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link className="nav-link  text-warning" to="/service">Services</Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link className="nav-link  text-warning" to="/our-project">Our project</Link>
                    </li>
					 <li className="nav-item ms-3">
                        <Link className="nav-link  text-warning" to="/blog">Blog</Link>
                    </li>
                     <li className="nav-item ms-3">
                        <Link className="nav-link  text-warning" to="/contact">Contact Us</Link>
                    </li>
					<button className="navbtn ms-3">Schedule Inspection</button>
                    </ul>
                </div>
                </div>
            </nav>
    )
}
