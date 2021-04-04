import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'
Skill.propTypes = {

};

function Skill(props) {
    return (
        <div className='skill'>
            <div className="skill__title">Kĩ năng làm việc</div>
            <div className="skill__block">
                <div className="skill__block--program">
                    <h2>Kĩ năng lập trình</h2>
                    <ul>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS(SCSS)</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                    </ul>
                </div>
                <div className="skill__block--nother">
                    <h2>Kĩ năng Khác</h2>
                    <ul><li>Adobe Photoshop</li>
                        <li>English</li></ul>
                </div>
            </div>



        </div >
    );
}

export default Skill;