import React from 'react';
import PropTypes from 'prop-types';
import Introduction from './Features/Introduction/index'
import Skill from './Features/Skill';
import Certificate from './Features/Certificates';
import Hobbies from './Features/Hobbies';
import DemoProject from './Features/DemoProject';

About.propTypes = {

};

function About(props) {
    return (
        <div>
            <Introduction />
            <Skill />
            <Certificate />
            <Hobbies />
            <DemoProject />
        </div>
    );
}

export default About;