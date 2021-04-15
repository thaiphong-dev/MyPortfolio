import React from 'react';
import PropTypes from 'prop-types';
import anh from '../../images/bg.jpg'
import './index.scss'
Portfolio.propTypes = {

};

function Portfolio(props) {
    return (
        <div className="layout">
            <div className="layout__hidenlay">
                <h1>Simple Calculator</h1>
                <img src={anh} alt="anh" />
            </div>
            <div className="layout__overlay">
                <h2>This is first project with using Javascript</h2>
                <a className="layout__overlay-link" href="https://github.com/thaiphong1101/calculator/">
                    <span className="layout__overlay-link--title" >
                        visit website
                    </span>
                    <span className="layout__overlay-link--icon">
                        <svg class="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false"
                            data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 
                    9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 
                    0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                    </span>
                </a>
            </div>

        </div>
    );
}

export default Portfolio;