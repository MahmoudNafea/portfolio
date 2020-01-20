import React from 'react';
import accenture from './../img/accenture.jpg'
import spectrum from './../img/spectrum.jpg'
import topelectric from './../img/topelectric.jpg'


const WorkPage = () => {
    return (
        <div>
            <h2>My employers</h2>
            <div>
                <a href="https://www.accenture.com/my-en">
                    <img src={accenture} alt="icon" className="accenture" />
                </a>
                <a href="http://www.spectrum-diagnostics.com/new/">
                    <img src={spectrum} alt="icon" className="accenture" />
                </a>
                <a href="">
                    <img src={topelectric} alt="icon" className="accenture" />
                </a>
            </div>
        </div>
    )
}

export default WorkPage