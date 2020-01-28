import React from 'react';
import burger from './../img/burger.PNG';
import weather from './../img/weather.PNG';
import indecision from './../img/indecision.PNG';
import googleAnalysis from './../img/googleAnalysis.PNG';
import reactHooks from './../img/reactHooks.PNG';


const Projects = () => {
    return (
        <React.Fragment>
            <div >
                <h2>Some of my projects</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={burger} alt="myphoto" className="img-fluid" />>
                                    <div className="card-title" >
                                        <h2>The Burger website</h2>
                                    </div>
                                    <div className="card-text ">
                                        <p> Reactjs, Redux, HTML, CSS and Firebase. </p>
                                        <a href="https://theburger-web-app.firebaseapp.com/" className="btn btn-success">See app</a>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={weather} alt="myphoto" className="img-fluid" />>
                                    <div className="card-title" >
                                        <h2>The weather website</h2>
                                    </div>
                                    <div className="card-text ">
                                        <p> Nodejs, express, Javascript, HTML, CSS and Heroku. </p>
                                        <a href="https://nefo-theweather-app.herokuapp.com/" className="btn btn-success">See app</a>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={indecision} alt="myphoto" className="img-fluid" />>
                                    <div className="card-title" >
                                        <h2>To do app</h2>
                                    </div>
                                    <div className="card-text ">
                                        <p> Reactjs, HTML, Sass and Firebase.</p>
                                        <a href="https://indecision-2bd03.firebaseapp.com/" className="btn btn-success">See app</a>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={googleAnalysis} alt="myphoto" className="img-fluid" />>
                                    <div className="card-title" >
                                        <h2>Google play analysis and visualization</h2>
                                    </div>
                                    <div className="card-text ">
                                        <p> Python, Numpy, Pandas, Plotly, Seaborn,..etc </p>
                                        <a href="https://github.com/MahmoudNafea/Google-play-apps" className="btn btn-success">View on Github</a>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={reactHooks} alt="myphoto" className="img-fluid" />>
                                    <div className="card-title" >
                                        <h2>React Hooks to do list</h2>
                                    </div>
                                    <div className="card-text ">
                                        <p> React hooks, HTML, CSS and Firbase. </p>
                                        <a href="https://reacthooks-ddcc5.firebaseapp.com/" className="btn btn-success">See app</a>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="col-md-4">
                            <div className="card text-center" >
                                <div className="card-block">
                                    <img src={indecision} alt="myphoto" className="img-fluid" />>
                                    <div className="card-title" >
                                        <h2>Fitness tracker</h2>
                                    </div>
                                    <div className="card-text ">
                                        <p> Mern fullstack. Nodejs, Reactjs, MongoGB and Heroku</p>
                                        <a href="https://indecision-2bd03.firebaseapp.com/" className="btn btn-success">See app</a>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div >
            </div>

        </React.Fragment>

    )
}

export default Projects

