import React from 'react';
import PropTypes from 'prop-types';

Event.propTypes = {
    onImgMouseEnter: PropTypes.func,
    onImgMouseLeave: PropTypes.func,
    sources: PropTypes.array,
};
Event.defaultProps = {
    onImgMouseEnter: null,
    onImgMouseLeave: null,
    sources: [],
}

function Event(props) {
    const { onImgMouseEnter, sources, onImgMouseLeave } = props;

    function handleMouseEnter(source) {
        if (onImgMouseEnter) {
            onImgMouseEnter(source)
        }
    }
    function handleMouseLeave(source) {
        if (onImgMouseLeave) {
            onImgMouseLeave(source)
        }
    }


    return (
        <ul className='Introduction__list'>
            {sources.map((source) => (
                //     if (source.id !== 5) {
                //     <li className='Introduction__list--item' key={source.id}>
                //         <img className={source.class} src={source.title} alt='anh' />

                //     </li>
                // }
                //     else {
                <li className='Introduction__list--item' key={source.id}>
                    <img onMouseEnter={() => handleMouseEnter(source)} onMouseLeave={() => handleMouseLeave(source)} id={`id${source.id}`} className={source.class} src={source.title} alt='anh' />

                </li>

            ))}
        </ul>

    );
}

export default Event;