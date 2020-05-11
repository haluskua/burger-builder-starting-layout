

import React from 'react';

import burgerLogo from '../../Assest/Images/original.png'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="myBurger" />
    </div>

);
export default logo;