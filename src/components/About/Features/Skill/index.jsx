import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'
Skill.propTypes = {

};

function Skill(props) {
    return (
        <div>
            <div className="title">Kĩ năng làm việc</div>
            <div className="skills">
                <p>HTML</p>
                <div className="skill">
                    <div className="skill__html">80%</div>
                </div>
                <p>SCSS</p>
                <div className="skill">
                    <div className="skill__scss">80%</div>
                </div>
                <p>JAVASCRIPT</p>
                <div className="skill">

                    <div className="skill__js">65%</div>
                </div>
                <p>REACTJS</p>
                <div className="skill">
                    <div className="skill__reactJS">68%</div>
                </div>
            </div>

        </div>
    );
}

export default Skill;