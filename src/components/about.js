import React from 'react';
import myphoto from './../img/myphoto.jpg';


const AboutPage = () => {
    return (
        <div className="container">
            <div >
                <div className="row">
                    <div className="col-sm-7" >
                        <h1 className="text-center" style={{ marginBottom: 5 + "rem" }}>My story</h1>

                        <p >
                            Nice to see you. Let me introduce myself with the basic information about me.
                             I'm Egyptian working now in Malaysia. I've bachelor's degree in science and I'm 27 years old.
                    </p>
                        <p >
                            My experience is more than 3 years in technology and business industry.
                             My current employer's Accenture Malaysia as I'm working as data analyst for two years so far.
                    </p>

                    </div>
                    <div className="col-sm-5">
                        <div className="img-wrap">
                            <img src={myphoto}
                                alt="myphoto" />
                        </div>
                    </div>



                </div>
            </div >
        </div>
    )
}

export default AboutPage