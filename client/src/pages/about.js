import React from 'react';
import { Image, Alert } from 'react-bootstrap/';
import myphoto from './../img/myphoto.jpg';

const AboutPage = () => {
    return (
        <div>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="container">
                <div >
                    <div className="row" style={{ margin: " 0 0 20px 0 " }}>
                        <div className="col-sm-7" >
                            <h1 className="text-center myTitle" style={{ marginTop: '2rem' }} >My Story</h1>
                            <Alert className="about" >
                                <Alert.Heading style={{ color: "#f0a824" }}>Nice to see you</Alert.Heading>
                                <p>
                                    Let's start with the basic information about me.
                                    I'm Egyptian working now in Malaysia. I've a bachelor's degree in science and I'm 27 years old.
  </p>
                                <p className="mb-0">
                                    My experience is more than 3 years in technology and business industry.<br />
                                    I'm junior software developer with a journey of self-learning in coding.<br />
                                    Hands on front end and back end technology using Reactjs, Nodejs and Python.<br />
                                    I’ve also strong knowledge in data analysis and visualization tools.
                                      </p>
                            </Alert>
                        </div>
                        <div className="col-sm-5">
                            <div className="img-wrap">
                                <Image src={myphoto}
                                    alt="myphoto" fluid roundedCircle className="img" style={{ marginTop: 2 + "rem" }} />
                            </div>
                        </div>



                    </div>
                </div >
            </div>
        </div>
    )
}

export default AboutPage