import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../pages/home';
import ProdutoScreen from '../pages/produto';
import Third from '../pages/home/third';

const AppNavigator = createMaterialTopTabNavigator({
    Home: HomeScreen,
    Produto: ProdutoScreen,
    Third: Third
},{
    tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: "#0D47A1",
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: "#2196F3", 
        }
    },
});

export default AppNavigator;