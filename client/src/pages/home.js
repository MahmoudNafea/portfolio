import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HomePage extends Component {

    render() {
        return (
            <div className="home">
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
                <div className="container text-center homePage " >
                    <h2 className="title">Hello, I'm Mahmoud Nafea</h2>
                    <h4 className="intro">Fullstack Software developer </h4>
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
