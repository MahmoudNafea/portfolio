import React from 'react';
import Background from './../background';

// import { Link } from 'react-router-dom';
// import FadeMenu from './menu';



const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a className="home-style navbar-brand" href="/">NAVBAR</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <a className="btn-style nav-item nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                            <li >
                                <a className="btn-style nav-item nav-link" href="/about">MY STORY</a>
                            </li>
                            <li >
                                <a className="btn-style nav-item nav-link" href="/work">WORK</a>
                            </li>
                            <li >
                                <a className="btn-style nav-item nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>

    )
}

export default Navbar

