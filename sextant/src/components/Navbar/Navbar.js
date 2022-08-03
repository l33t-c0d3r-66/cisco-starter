import React, { useState } from 'react';
import cssClasses from './Navbar.module.css';
import {FaBars} from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai';


const Navbar = () => {
    const [showing, setShowing] = useState(true);
    const showNavbarHandler = () => {
        setShowing(showing?false:true);
    }
    return (
        <div className={cssClasses.Navbar}>
            <nav className={cssClasses.NavTag}>
                <div className={cssClasses.Logo}>SEXTANT</div>
                <label className={cssClasses.MenuButton} onClick={showNavbarHandler}>
                    { showing ? <FaBars /> : <AiFillCloseCircle /> }
                </label>
                <ul style={showing? {left: '-300%'} : {left: '0%'}}>
                    <li>
                        <a href="#" className={cssClasses.NavLinkActive}>Home</a>
                    </li>
                    <li>
                        <a href="#" className={cssClasses.NavLinkActive}>Contact US</a>
                    </li>
                    <li>
                        <a href="#" className={cssClasses.NavLinkActive}>About US</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;