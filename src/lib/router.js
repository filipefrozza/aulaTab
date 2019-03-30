import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../pages/home';
import Second from '../pages/home/second';
import Third from '../pages/home/third';

const AppNavigator = createMaterialTopTabNavigator({
    Home: HomeScreen,
    Second: Second,
    Third: Third
},{
    tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: "tomato",
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: "red", 
        }
    },
});

export default AppNavigator;