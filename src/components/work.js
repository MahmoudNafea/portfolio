import React from 'react';
import { Card } from 'react-bootstrap';
import accenture from './../img/accenture.jpg'
import spectrum from './../img/spectrum.jpg'
import topelectric from './../img/topelectric.jpg'

const WorkPage = () => {
    return (
        <div className="container text-center">
            <h2>My previous employers</h2>
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={accenture} />
                        <Card.Body>
                            <Card.Title>Data analyst</Card.Title>
                            <Card.Text>
                                Since July 2018 to present.
                            </Card.Text>
                            <Card.Link href="https://www.accenture.com/my-en" className="btn btn-success">Visit the company</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={spectrum} />
                        <Card.Body>
                            <Card.Title>Quality assurance</Card.Title>
                            <Card.Text>
                                Pure QA for one year.
                     </Card.Text>
                            <Card.Link href="http://www.spectrum-diagnostics.com/new/" className="btn btn-success">Visit the company</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={topelectric} />
                        <Card.Body>
                            <Card.Title>Quality assurance</Card.Title>
                            <Card.Text>
                                Pure QA for six months.
                            </Card.Text>
                            <Card.Link href="http://www.cced.gov.eg/ar/" className="btn btn-success">Visit the company</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default WorkPage















// const WorkPage = () => {
//     return (
//         <div >
//             <h2>My previous employers</h2>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className="card text-center" >
//                             <div className="img-fluid">
//                                 <img src={accenture} alt="myphoto" className="img-fluid" />
//                                 <div className="card-block" >
//                                     <h2>Data analyst</h2>
//                                 </div>
//                                 <div className="card-text ">
//                                     <p> Since July 2018 to present</p>
//                                     <a href="https://www.accenture.com/my-en" className="btn btn-success">Visit the company</a>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                     <div className="col-md-4">
//                         <div className="card text-center" >
//                             <div className="card-block">
//                                 <img src={spectrum} alt="myphoto" className="img-fluid" />>
//                                 <div className="card-title" >
//                                     <h2>Quality assurance</h2>
//                                 </div>
//                                 <div className="card-text ">
//                                     <p> Pure QA for one year</p>
//                                     <a href="http://www.spectrum-diagnostics.com/new/" className="btn btn-success">Visit the company</a>
//                                 </div>
//                             </div>

//                         </div>


//                     </div>
//                     <div className="col-md-4">
//                         <div className="card text-center" >
//                             <div className="card-block">
//                                 <img src={topelectric} alt="myphoto" className="img-fluid" />>
//                                 <div className="card-title" >
//                                     <h2>Quality assurance</h2>
//                                 </div>
//                                 <div className="card-text ">
//                                     <p> Pure QA for six months</p>
//                                     <a href="http://www.cced.gov.eg/ar/" className="btn btn-success">Visit the company</a>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div >
//         </div>


//     )
// }

// export default WorkPage

