//HTML5, CSS(SCSS), Javascript, React hook, React router, React redux
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Instronduction.scss'
import ava from './images/ava3.jpg'

Introduction.propTypes = {

};

function Introduction(props) {




    // const handleMouseEnter = () => {
    //     const newSource = [...source];
    //     for (let i = 0; i < newSource.length - 1; i++) {

    //         const a = newSource[i].class;
    //         let k = a.split(' ');
    //         const newClass = k[0] + ' ' + k[1];
    //         newSource[i].class = newClass;

    //     }
    //     setSource(newSource);
    // }



    // useEffect(() => {
    //     function textSpeed() {
    //         var a = "Hi, I'm Phong, I'm front-end web developer, I have skills on HTML, SCSS, responsive, reactjs.";

    //         const text = document.querySelector('.Introduction__content--para');
    //         text.innerHTML = '';

    //         a = a.split('');


    //         var i = 0;
    //         const time = setInterval(() => {
    //             text.innerHTML += a[i];
    //             i++
    //             if (i >= a.length) clearInterval(time);
    //         }, 70);
    //         // return () => {
    //         //     console.log('da return');
    //         //     clearInterval(time);
    //         // }

    //     }
    //     textSpeed();
    // }, []);





    return (
        <div className='Introduction'>

            {/* <div className="Introduction__img">
                <Introduction__list sources={source}
                    onImgMouseEnter={handleMouseEnter}
                    onImgMouseLeave={handleMouseLeave} />
            </div>

            <section className="Introduction__content">
                <Introduction__content />

            </section> */}
            <div className="Introduction__information">
                <div className="Introduction__information--img">
                    <img src={ava} alt="avata" />
                </div>
                <h5 className="Introduction__information--skill">
                    HI, I AM TU THAI PHONG
                </h5>
                <h1 className="Introduction__information--title">
                    Front-end Developer
                </h1>
                <button className="Introduction__information--btn"><p>Explore work</p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 700 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg></button>
            </div>


        </div>
    );
}

export default Introduction;