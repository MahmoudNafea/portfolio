import React from "react";
// import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <div id="my-background" className="background">
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
                <div >
                    <h2 className="title">Hello,I'm Mahmoud Elsayed Nafea</h2>
                    <h3 className="sub-title">I'm Mahmoud Elsayed Nafea</h3>
                    <p className="intro">Software developer and Data analyst </p>
                    <p className="intro">Thanks for visiting my portfolio. I hope you enjoy your tour through it </p>
                </div>
            </div>
        );
    }
}

// Background.propTypes = {
//     aboutRef: PropTypes.object,
//     bounceIn: PropTypes.string
// };