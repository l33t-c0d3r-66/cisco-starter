import React from 'react';
import cssClasses from './Exhibits.module.css';

const Exhibit = (props) => {
    return (
        <div className={cssClasses.Exhibit}>
            <h2 className={cssClasses.ExhibitHeading}>{props.name}</h2>
            <div className={cssClasses.ExhibitContent}>
                {props.children}
            </div>
        </div>
    );
}

export default Exhibit;
