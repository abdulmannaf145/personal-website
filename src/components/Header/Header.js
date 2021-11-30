import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link style={{textDecoration:'none',fontWeight:'bold',color:'black'}} to="/home">Abdul Mannaf.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{textDecoration:'none',color:'black'}} to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-2 hover-link" style={{textDecoration:'none',color:'black'}} to='/contact'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{textDecoration:'none',color:'black'}} to='/projects'>Projects</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;