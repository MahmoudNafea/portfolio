import React from 'react';
import accenture from './../img/accenture.jpg'
import spectrum from './../img/spectrum.jpg'
import topelectric from './../img/topelectric.jpg'


const WorkPage = () => {
    return (
        <div>
            <h2>My employers</h2>
            <div className="employers">
                <a href="https://www.accenture.com/my-en">
                    <img src={accenture} alt="icon" className="logo" />
                    Visit now
                </a>
                <p>Data analyst for 2 years to present in digital and business industry.
                     Work on social media data. Analyze the data to study the trends.
                      Make reports and present it to management and the team.</p>

                <a href="http://www.spectrum-diagnostics.com/new/">
                    <img src={spectrum} alt="icon" className="logo" />
                    Visit now
                </a>
                <p>Quality assurance specialist for one year ensures the procedures
                     and final product meet the client’s requirements.</p>

                <a href="">
                    <img src={topelectric} alt="icon" className="logo" />
                    Visit now
                </a>
                <p>Quality assurance specialist for six months ensures the procedures
                     and final product meet the client’s requirements.</p>

            </div>
        </div >
    )
}

export default WorkPage