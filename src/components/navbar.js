import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Background from './../background';





const Navbar = () => {


    return (
        <nav
            id="navbar"
            className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a
                    className="home-style navbar-brand"
                >
                    Back to Space
                    </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a

                            className="btn-style nav-item nav-link">
                            About
                            </a>
                        <a

                            className="btn-style nav-item nav-link">
                            Projects
                            </a>
                        <a

                            className="btn-style nav-item nav-link">
                            Contact
                            </a>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;