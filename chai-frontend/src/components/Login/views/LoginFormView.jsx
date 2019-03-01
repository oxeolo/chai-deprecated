import React, {Component} from 'react';
import './loginFormView.css';

import InputView from '../../UI/views/InputView';
import ButtonView from '../../UI/views/ButtonView';

const LoginFormView = () => (
    <div className = 'loginForm'>
        <InputView
            placeholder = {'email'}
        />
        <InputView
            placeholder = {'password'}
            type = {'password'}
        />
        <ButtonView>
            login
        </ButtonView>
    </div>
)

export default LoginFormView;