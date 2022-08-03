import React, { Component } from 'react';
import cssClasses from './Banner.module.css';

class Banner extends Component {
    render() {
        return (
            <div className={cssClasses.Banner}>
                <h1>{this.props.bannerText}</h1>
            </div>
        );
    }
}

export default Banner;