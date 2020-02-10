import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Background from '../components/background';
// import Background from "./../components/background";
// import WOW from "wowjs";



class HomePage extends Component {
    // componentDidMount() {
    //     new WOW.WOW().init();
    // }

    render() {
        return (
            <div className="home">
                <div className="container text-center homePage " >
                    <h2 className="title">Hello, I'm Mahmoud Nafea</h2>
                    <h4 className="intro">Software developer && Data analyst </h4>
                    <p className="intro">Thanks for visiting my portfolio. I hope you enjoy your tour through it </p>
                    <div style={{ marginTop: "100px" }}>
                        <Link to="/about" className="btn btn-primary">Get started</Link>
                    </div>
                </div >
            </div>
        )
    }
}
export default HomePage