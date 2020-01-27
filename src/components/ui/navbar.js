import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Background from './../background';





const Navbar = () => {

    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <a className="home-style navbar-brand" href="/">PORTFOLIO</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarNav"
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
                                    <a className="btn-style nav-item nav-link" href="/projects">PROJECTS</a>
                                </li>
                                <li >
                                    <a className="btn-style nav-item nav-link" href="/contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>

            </div>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </React.Fragment>
    )
}

export default Navbar

