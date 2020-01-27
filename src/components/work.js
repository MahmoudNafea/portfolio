import React from 'react';
import accenture from './../img/accenture.jpg'
import spectrum from './../img/spectrum.jpg'
import topelectric from './../img/topelectric.jpg'
import Projects from './projects';


const WorkPage = () => {
    return (
        <React.Fragment>
            <div >
                <h2>My previous employers</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={accenture} alt="myphoto" className="img-fluid" />>

                            </div>

                            </div>
                            <div className="card-title" >
                                <h2>Data analyst</h2>
                            </div>
                            <div className="card-text ">
                                <p> Since July 2018 to present</p>
                                <a href="https://www.accenture.com/my-en" className="btn btn-success">Visit the company</a>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={spectrum} alt="myphoto" className="img-fluid" />>

                            </div>

                            </div>
                            <div className="card-title" >
                                <h2>Quality assurance</h2>
                            </div>
                            <div className="card-text ">
                                <p> Pure QA for one year</p>
                                <a href="http://www.spectrum-diagnostics.com/new/" className="btn btn-success">Visit the company</a>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={topelectric} alt="myphoto" className="img-fluid" />>

                            </div>

                            </div>
                            <div className="card-title" >
                                <h2>Quality assurance</h2>
                            </div>
                            <div className="card-text ">
                                <p> Pure QA for six months</p>
                                <a href="http://www.cced.gov.eg/ar/" className="btn btn-success">Visit the company</a>
                            </div>

                        </div>

                    </div>
                </div >
                <Projects />
            </div>

        </React.Fragment>

    )
}

export default WorkPage

