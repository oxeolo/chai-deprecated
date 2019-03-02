import React from 'react';
import './composePage.css';
import TitleView from '../../components/Compose/views/TitleView';
import ComposeContainer from '../../components/Compose/containers/ComposeContainer';
import StatusContainer from '../../components/Compose/containers/StatusContainer';


const ComposePage = () => (
    <div className = 'composePage'>
        <TitleView
            title = {'Lorem Ipsum'}
        />
        <ComposeContainer/>
        <StatusContainer/>
    </div>
)
export default ComposePage;