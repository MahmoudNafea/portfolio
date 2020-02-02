import React from 'react';
import { Card } from 'react-bootstrap';
import burger from './../img/burger.PNG';
import weather from './../img/weather.PNG';
import indecision from './../img/indecision.PNG';
import googleAnalysis from './../img/googleAnalysis.PNG';
import reactHooks from './../img/reactHooks.PNG';


const Projects = () => {
    return (
        <div className="container text-center" >
            <h2>Some of my projects</h2>
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={burger} />
                        <Card.Body>
                            <Card.Title>The Burger</Card.Title>
                            <Card.Text>
                                Reactjs, Redux, HTML, CSS and Firebase.
                            </Card.Text>
                            <Card.Link href="https://theburger-web-app.firebaseapp.com/" className=" btn btn-success">View app</Card.Link>
                            <Card.Link href="https://github.com/MahmoudNafea/TheBurger-web-app" className="btn btn-success">View on github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={weather} />
                        <Card.Body>
                            <Card.Title>The weather</Card.Title>
                            <Card.Text>
                                Nodejs, express, Javascript, HTML, CSS and Heroku.
                            </Card.Text>
                            <Card.Link href="https://nefo-theweather-app.herokuapp.com/" className=" btn btn-success">View app</Card.Link>
                            <Card.Link href="https://github.com/MahmoudNafea/TheWeatherApp" className="btn btn-success">View on github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={indecision} />
                        <Card.Body>
                            <Card.Title>To do app</Card.Title>
                            <Card.Text>
                                Reactjs, HTML, Sass and Firebase.
                            </Card.Text>
                            <Card.Link href="https://indecision-2bd03.firebaseapp.com/" className=" btn btn-success">View app</Card.Link>
                            <Card.Link href="https://github.com/MahmoudNafea/Indecision-app" className="btn btn-success">View on github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={googleAnalysis} />
                        <Card.Body>
                            <Card.Title>Google play analysis and visualization</Card.Title>
                            <Card.Text>
                                Python, Numpy, Pandas, Plotly, Seaborn,..etc.
                            </Card.Text>
                            <Card.Link href="https://github.com/MahmoudNafea/Google-play-apps" className="btn btn-success">View on github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={reactHooks} />
                        <Card.Body>
                            <Card.Title>Hooks to do list</Card.Title>
                            <Card.Text>
                                React hooks, HTML, CSS and Firbase
                            </Card.Text>
                            <Card.Link href="https://reacthooks-ddcc5.firebaseapp.com/" className=" btn btn-success">View app</Card.Link>
                            <Card.Link href="https://github.com/MahmoudNafea/todo-reactHooks" className="btn btn-success">View on github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={burger} />
                        <Card.Body>
                            <Card.Title>Fitness tracker</Card.Title>
                            <Card.Text>
                                Mernstack. Nodejs, Express, Reactjs, MongoGB and Heroku
                            </Card.Text>
                            <Card.Link href="https://theburger-web-app.firebaseapp.com/" className=" btn btn-success">View app</Card.Link>
                            <Card.Link href="https://github.com/MahmoudNafea/Fitness-tracker-mernStack" className="btn btn-success">View on github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>


    )
}

export default Projects

