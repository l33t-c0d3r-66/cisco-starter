import React, { Component } from 'react';
import cssClasses from './Exhibits.module.css';

class Exhibit extends Component {
    render() {
        return (
            <div className={cssClasses.Exhibit}>
                <h2 className={cssClasses.ExhibitHeading}>{this.props.name}</h2>
                <div className={cssClasses.ExhibitContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Exhibit;
