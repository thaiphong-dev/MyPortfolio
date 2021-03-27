import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Instronduction.scss'
import anh_1 from './ptsanh.jpg'
import anh_2 from './Untitled-1.jpg'
import anh_3 from './download.png'
import anh_4 from './react.jpg'
import anh_5 from './logo.png'
import Event from './event';
Introduction.propTypes = {

};

function Introduction(props) {


    const location2 =
        [{ id: 1, title: `${anh_2}`, class: 'Introduction__img--image html displayEvent', action: null },
        { id: 2, title: `${anh_3}`, class: 'Introduction__img--image scss displayEvent ', action: null },
        { id: 3, title: `${anh_4}`, class: 'Introduction__img--image react displayEvent', action: null },
        { id: 4, title: `${anh_5}`, class: 'Introduction__img--image redux displayEvent', action: null },
        {
            id: 5, title: `${anh_1}`, class: 'Introduction__img--imageMain',
            action1: () => {
                document.querySelector('#id1').classList.remove('displayEvent');
                document.querySelector('#id2').classList.remove('displayEvent');
                document.querySelector('#id3').classList.remove('displayEvent');
                document.querySelector('#id4').classList.remove('displayEvent');


            },
            action2: () => {
                document.querySelector('#id1').classList.add('displayEvent');
                document.querySelector('#id2').classList.add('displayEvent');
                document.querySelector('#id3').classList.add('displayEvent');
                document.querySelector('#id4').classList.add('displayEvent');
            }
        }
        ]
    console.log(location2)
    // const [sources, setSource] = useState(location2);


    return (
        <div className='Introduction'>

            <div className="Introduction__img">
                <Event sources={location2} onImgMouseEnter={location2[4].action1} onImgMouseLeave={location2[4].action2} />
            </div>

            <section className="Introduction__content">
                <p className='Introduction__content--para'>Hi, I'm Phong, i'm front-end web developer, i have skill on HTML, SCSS, responsive, reactjs.</p>

            </section>


        </div>
    );
}

export default Introduction;