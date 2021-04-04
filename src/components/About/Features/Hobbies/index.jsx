import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'
Hobbies.propTypes = {

};

function Hobbies(props) {
    return (
        <div className='hobbies'>
            <div className="hobbies__title">Sở thích</div>
            <ul className='hobbies__list'>
                <li>Đọc sách</li>
                <li>Nghe nhạc</li>
                <li>Cầu lông</li>
                <li>Du lịch</li>
            </ul>

        </div>
    )
}

export default Hobbies