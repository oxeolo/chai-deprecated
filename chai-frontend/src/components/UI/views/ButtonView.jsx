import React, {Component} from 'react';
import './buttonView.css';

const ButtonView = ({children}) => (
    <button className = 'buttonView'>
        {children}
    </button>
)

export default ButtonView;