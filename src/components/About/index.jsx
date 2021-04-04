import React from 'react';
import PropTypes from 'prop-types';
import Introduction from './Features/IntroductionMySelf/index'
import Skill from './Features/Skill';
import Hobbies from './Features/Hobbies';
import DemoProject from './Features/DemoProject';
import './index.scss'
import Knowledge from './Features/Knowledge';

About.propTypes = {

};

function About(props) {
    return (
        <div className='About'>
            <div className="About__introE"><Introduction /></div>
            <div className="About__knowE"><Knowledge /></div>
            <div className="About__projectE"><DemoProject /></div>
            <div className="About__skillE"><Skill /></div>

            <div className="About__hobbiesE"><Hobbies /></div>
        </div>
    );
}

export default About;