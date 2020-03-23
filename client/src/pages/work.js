import React from 'react';
import Skills from './../components/skills';
import { Card } from 'react-bootstrap';
import accenture from './../img/accenture.jpg';
import spectrum from './../img/spectrum.jpg';
import topelectric from './../img/topelectric.jpg';

const WorkPage = () => {
    return (
        <div>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="container text-center">
                <div style={{ margin: '2rem 0' }}>
                    <h2 className=" myTitle">My Employers</h2>
                </div>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 ">
                        <Card style={{ width: '18rem', height: '21rem' }}>
                            <Card.Img variant="top" style={{ height: '12rem' }} src={accenture} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title > Software developer/analyst</Card.Title>
                                <Card.Text>
                                    Since July 2018 to present.
                            </Card.Text>
                                <Card.Link href="https://www.accenture.com/my-en" className="btn btn-success">Visit the company</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <Card style={{ width: '18rem', height: '21rem' }}>
                            <Card.Img variant="top" src={spectrum} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>Quality assurance</Card.Title>
                                <Card.Text>
                                    Pure QA for one year.
                     </Card.Text>
                                <Card.Link href="http://www.spectrum-diagnostics.com/new/" className="btn btn-success">Visit the company</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <Card style={{ width: '18rem', height: '21rem' }}>
                            <Card.Img variant="top" src={topelectric} style={{ height: '12rem' }} />
                            <Card.Body style={{ color: "black" }}>
                                <Card.Title>Quality assurance</Card.Title>
                                <Card.Text>
                                    Pure QA for six months.
                            </Card.Text>
                                <Card.Link href="http://www.cced.gov.eg/ar/" className="btn btn-success">Visit the company</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <Skills />
            </div>
        </div>

    )
}

export default WorkPage