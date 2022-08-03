import React from 'react';
import cssClasses from './Banner.module.css';
const Banner = (props) => {
    return (
        <div className={cssClasses.Banner}>
            <h1>{props.bannerText}</h1>
        </div>
    );
}

export default Banner;