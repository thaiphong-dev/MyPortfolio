import React from 'react';
import PropTypes from 'prop-types';

ProjectRender.propTypes = {
    projectList: PropTypes.array,
};

ProjectRender.defaultProps = {
    projectList: [],
};

function ProjectRender(props) {
    const { projectList } = props;

    return (
        <div className='render'>
            {projectList.map(item => (



                <ul key={item.id}>
                    <h3 className="name">{item.name}</h3>
                    <li>{item.title}</li>
                    <li><a href={item.link}>{`link ${item.link}`}</a></li>
                </ul>
            ))

            }

        </div>
    )


}

export default ProjectRender;