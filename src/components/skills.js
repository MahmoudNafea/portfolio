import React from 'react';
import { Image, ProgressBar } from 'react-bootstrap';
import python from './../img/python.png';
import javascript from './../img/javascript.png';

const Skills = () => {
    return (
        <div className="container text-center">
            <div style={{ margin: "2rem 0" }}>
                <h2 className="title">Skills</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h4 style={{ margin: "1rem " }}>Data Analysis and Visualization</h4>
                    </div>
                    <div>
                        <Image src={python} fluid style={{ height: '12rem', width: '12rem' }} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Excel Pivot Table </label>
                        <ProgressBar now={80} label={`${80}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Python</label>
                        <ProgressBar now={60} label={`${60}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Numpy, Pandas</label>
                        <ProgressBar now={90} label={`${90}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Matplotlib, Plotly, Seaborn</label>
                        <ProgressBar now={80} label={`${90}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Linear Regression, Logistic Regression</label>
                        <ProgressBar now={50} label={`${50}%`} animated />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h4 className="sub-title" style={{ margin: "1rem " }}>Web Development</h4>
                    </div>
                    <div>
                        <Image src={javascript} fluid style={{ height: '12rem', width: '12rem' }} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Javascript, Nodejs, Reactjs</label>
                        <ProgressBar now={80} label={`${80}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>HTML, CSS, SASS, Bootstrap, JQuery</label>
                        <ProgressBar now={80} label={`${80}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Database NO SQL and SOL</label>
                        <ProgressBar now={60} label={`${60}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>RESTFUL API, Git and Github</label>
                        <ProgressBar now={80} label={`${80}%`} />
                    </div>
                    <div style={{ margin: "1rem " }}>
                        <label>Cloud (Google,AWS,Heroku), Debugging</label>
                        <ProgressBar now={80} label={`${80}%`} animated />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;