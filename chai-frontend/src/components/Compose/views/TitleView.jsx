import React, {Component} from 'react';
import './titleView.css';
import BookView from '../../Books/views/BookView';


const TitleView = ({title}) => (
    <div className = 'titleView'>
        <BookView/>
        <div className = 'title'>
            {title}
        </div>
        <div className = 'divider'/>
    </div>
)

export default TitleView;