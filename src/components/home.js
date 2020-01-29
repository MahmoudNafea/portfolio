import React, { Component } from 'react';
// import Background from "./background";
// import WOW from "wowjs";



class HomePage extends Component {
    // componentDidMount() {
    //     new WOW.WOW().init();
    // }

    render() {
        return (
            <div className="container text-center">
                {/* <Background /> */}
                <h2 className="title">Hello</h2>
                <h3 className="sub-title">I'm Mahmoud Elsayed Nafea</h3>
                <p className="intro">Software developer and Data analyst </p>
                <p className="intro">Thanks for visiting my portfolio. I hope you enjoy your tour through it </p>
            </div >
        )
    }
}
export default HomePage