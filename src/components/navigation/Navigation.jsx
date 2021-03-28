import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss'

Navigation.propTypes = {

};
const listElements =
    [{ id: 1, title: 'Home', link: '#' },
    { id: 2, title: 'About', link: '#' },
    { id: 3, title: 'Portfolio', link: '#' },
    { id: 4, title: 'Contact', link: '#' },];

function handleClick() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
}

function Navigation(props) {

    return (
        <div className='Navigation'>
            <h2 onClick={handleClick} className="Navigation__name"> Từ Thái Phong </h2>
            <ul className='Navigation__list'>
                {listElements.map(ele => (
                    <li className='Navigation__list--title'
                        key={ele.id}>
                        {/* <a href={links} className='Navigation__list--link'>{ele.title}</a> */}
                        {ele.title}

                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Navigation;