import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Background from "./background";
// import WOW from "wowjs";



class HomePage extends Component {
    // componentDidMount() {
    //     new WOW.WOW().init();
    // }

    render() {
        return (
            <div id="home" className="container text-center">
                {/* <Background /> */}
                <h2 className="title">Hello, I'm Mahmoud Nafea</h2>
                {/* <h3 className="sub-title"></h3> */}
                <h4 className="intro">Software developer && Data analyst </h4>
                <p className="intro">Thanks for visiting my portfolio. I hope you enjoy your tour through it </p>
                <div>
                    <Link to="/about" className="btn btn-primary">Get started</Link>
                </div>
            </div >
        )
    }
}
export default HomePage