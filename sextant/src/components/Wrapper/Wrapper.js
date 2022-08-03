import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';

import cssClasses from './Wrapper.module.css';

function Wrapper (props){

    return (
        <div className={cssClasses.Wrapper}>
              {props.children}  
        </div>
    );
}

export default Wrapper;