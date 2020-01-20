import React from 'react';
import myphoto from './../img/myphoto.jpg'

const AboutPage = () => {
    return (
        <div>
            <h1>About me</h1>
            <p className="text">
                Nice to see you. Let me introduce myself with the basic information about me.
                 I'm Egyptian working now in Malaysia. I've bachelor's degree in science and I'm 27 years old.
            </p>
            <p className="text">
                My experience is more than 3 years in technology and business industry.
                 My current employer's Accenture Malaysia as I'm working as data analyst for two years so far.
            </p>
            <img src={myphoto} alt={myphoto} className="img" />
        </div>
    )
}

export default AboutPage