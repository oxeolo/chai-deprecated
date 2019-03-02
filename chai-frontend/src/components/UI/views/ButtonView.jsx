import React, {Component} from 'react';
import './buttonView.css';

import {Link} from 'react-router-dom';

const ButtonView = ({children, onClick = () => {}}) => (
    <button className = 'buttonView'
            onClick = {onClick}
    >
        {children}
    </button>
)

export const LinkButtonView = ({to}) => (
    <ButtonView>
        <Link to={to}/>
    </ButtonView>
)

export default ButtonView;