import React from 'react';
import PropTypes from 'prop-types';
import avata from './images/ava3.jpg'
import './index.scss'

Introduction.propTypes = {

};

function Introduction(props) {
    return (
        <div className='Introduction'>
            <img className='Introduction__img' src={avata} alt="avata"></img>
            <p className='Introduction__paragraph'>Xin chào, tôi tên là Từ Thái Phong, là một Front-end web Developer trẻ giàu đam mê và nhiệt huyết. Với những kiến thức đã học cùng với tinh thần trách nhiệm trong công việc, tôi hy vọng có thể đóng góp vào sự phát triển của công ty</p>
        </div>
    );
}

export default Introduction;