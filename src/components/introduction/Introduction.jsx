import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Instronduction.scss'
import anh_1 from './img/ptsanh.jpg'
import anh_2 from './img/Untitled-1.jpg'
import anh_3 from './img/download.png'
import anh_4 from './img/aaa.png'
import anh_5 from './img/logo.png'
import Introduction__content from './Introduction__content';
import Introduction__list from './Introduction__list';

Introduction.propTypes = {

};

function Introduction(props) {


    const initlocation =
        [{ id: 1, title: `${anh_2}`, class: 'Introduction__img--image html displayEvent', action: null },
        { id: 2, title: `${anh_3}`, class: 'Introduction__img--image scss displayEvent ', action: null },
        { id: 3, title: `${anh_4}`, class: 'Introduction__img--image react displayEvent', action: null },
        { id: 4, title: `${anh_5}`, class: 'Introduction__img--image redux displayEvent', action: null },
        { id: 5, title: `${anh_1}`, class: 'Introduction__img--imageMain' }
        ]
    const [source, setSource] = useState(initlocation);
    const [conten, setContent] = useState('');

    const handleMouseEnter = () => {
        const newSource = [...source];
        for (let i = 0; i < newSource.length - 1; i++) {

            const a = newSource[i].class;
            let k = a.split(' ');
            const newClass = k[0] + ' ' + k[1];
            newSource[i].class = newClass;

        }
        setSource(newSource);
    }


    const handleMouseLeave = () => {
        const newSource = [...source];
        for (let i = 0; i < newSource.length - 1; i++) {
            newSource[i].class += (' ' + 'displayEvent');
            console.log('day la class moi: ', newSource[i]);

        }
        setSource(newSource);
    }
    useEffect(() => {
        function textSpeed() {
            var a = "Hi, I'm Phong, I'm front-end web developer, I have skills on HTML, SCSS, responsive, reactjs.";

            const text = document.querySelector('.Introduction__content--para');
            text.innerHTML = '';

            a = a.split('');


            var i = 0;
            const time = setInterval(() => {
                text.innerHTML += a[i];
                i++
                if (i >= a.length) clearInterval(time);
            }, 70);
            // return () => {
            //     console.log('da return');
            //     clearInterval(time);
            // }

        }
        textSpeed();
    }, []);





    return (
        <div className='Introduction'>

            <div className="Introduction__img">
                <Introduction__list sources={source}
                    onImgMouseEnter={handleMouseEnter}
                    onImgMouseLeave={handleMouseLeave} />
            </div>

            <section className="Introduction__content">
                <Introduction__content />

            </section>


        </div>
    );
}

export default Introduction;