import React, { Component } from 'react';
import './titleView.css';
import BookView from '../../Books/views/BookView';
import { Colors } from '../../../utils/colors';
import Overdrive from 'react-overdrive';


const TitleView = ({ title, color }) => (
    <div className='titleView'>
        <BookView
            color={color}
            linkTo='/books'
            small
            open
        />
        <div className='title'>
            {title}
        </div>
        <div className='divider' />
    </div>
)

export default TitleView;