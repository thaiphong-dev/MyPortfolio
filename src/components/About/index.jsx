import React from 'react';
import PropTypes from 'prop-types';
import Introduction from './Features/IntroductionMySelf/index'
import Skill from './Features/Skill';
import Certificate from './Features/Certificates';
import Hobbies from './Features/Hobbies';
import DemoProject from './Features/DemoProject';
import './index.scss'

About.propTypes = {

};

function About(props) {
    return (
        <div className='About'>
            <Introduction />
            <Skill />
            <Certificate />
            <Hobbies />
            <DemoProject />
        </div>
    );
}

export default About;