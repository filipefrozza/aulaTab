import React, {Component} from 'react';
import {createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './welcome';
import LoginScreen from './login';
import RegisterScreen from './register';
import App from './app';

const StartNavigator = createSwitchNavigator({
    Welcome: {screen: WelcomeScreen},
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
    App: {screen: App}
});

export default StartNavigator;