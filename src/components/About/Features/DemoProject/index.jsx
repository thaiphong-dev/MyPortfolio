// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss'
import ProjectRender from './Project';
DemoProject.propTypes = {

};
const list = [{
    id: 0, name: "Calculator", title: "Develop using standard HTML 5, CSS, Javascript",
    link: "https://thaiphong1101.github.io/calculator"
}, {
    id: 1, name: "Mobile Login form", title: "Develop using standard HTML 5, CSS, Javascript",
    link: " https://thaiphong1101.github.io/loginForm"
}];

function DemoProject(props) {
    // const [project, setProject] = useState([]);

    return (
        <div className='demoProject'>
            <div className="demoProject__title">Project cá nhân</div>
            < ProjectRender projectList={list} />
        </div>
    );
} export default DemoProject