import React from 'react';
import { Card } from 'react-bootstrap';
import burger from './../img/burger.PNG';
import weather from './../img/weather.PNG';
import indecision from './../img/indecision.PNG';
import googleAnalysis from './../img/googleAnalysis.PNG';
import startUp from './../img/startUp.JPG';
import Zulu from './../img/Zulu.PNG';

const Projects = () => {
    return (
        <div>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="container text-center" >
                <div style={{ margin: '2rem 0' }}>
                    <h2 className=" myTitle">Projects</h2>
                    <p>Check out some of my projects</p>
                </div>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-4 col-md-6 mb-3">
                        <Card style={{ width: '18rem', height: '23rem' }}>
                            <Card.Img variant="top" src={startUp} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>Startup Agency</Card.Title>
                                <Card.Text>
                                    React hooks, Nextjs, HTML, SASS and AWS.
                            </Card.Text>
                                <Card.Link href="https://d30gfjuntwcssp.cloudfront.net/index.html" className=" btn btn-success">View app</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3">
                        <Card style={{ width: '18rem', height: '23rem' }}>
                            <Card.Img variant="top" src={burger} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>The Burger</Card.Title>
                                <Card.Text>
                                    Reactjs, Redux, HTML, CSS,Responsive and Firebase.
                            </Card.Text>
                                <Card.Link href="https://theburger-web-app.firebaseapp.com/" className=" btn btn-success">View app</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3">
                        <Card style={{ width: '18rem', height: '23rem' }}>
                            <Card.Img variant="top" src={Zulu} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>E-Commerce</Card.Title>
                                <Card.Text>
                                    Mernstack. Nodejs, Express, Reactjs, MongoGB and Heroku.
                            </Card.Text>
                                <Card.Link href="https://zulustore.herokuapp.com/" className=" btn btn-success">View app</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-4 col-md-6 mb-3">
                        <Card style={{ width: '18rem', height: '23rem' }}>
                            <Card.Img variant="top" src={googleAnalysis} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>Analysis and Visualization</Card.Title>
                                <Card.Text>
                                    Python, Numpy, Pandas, Plotly, Seaborn,..etc.
                            </Card.Text>
                                <Card.Link href="https://github.com/MahmoudNafea/Google-play-apps" className="btn btn-success">View on github</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3">
                        <Card style={{ width: '18rem', height: '23rem' }}>
                            <Card.Img variant="top" src={indecision} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>To do app</Card.Title>
                                <Card.Text>
                                    Reactjs, HTML, Sass, Responsive and Firebase.
                            </Card.Text>
                                <Card.Link href="https://indecision-2bd03.firebaseapp.com/" className=" btn btn-success">View app</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3">
                        <Card style={{ width: '18rem', height: '23rem' }}>
                            <Card.Img variant="top" src={weather} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>The weather</Card.Title>
                                <Card.Text>
                                    Nodejs, express, Javascript, HTML, CSS and Heroku.
                            </Card.Text>
                                <Card.Link href="https://nefo-theweather-app.herokuapp.com/" className=" btn btn-success">View app</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects