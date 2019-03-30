import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
    tabBarIcon: ({tintColor, focused}) => (
        <Icon
            name={ focused ? "md-planet" : "ios-planet"}
            size={28}
            color={tintColor}
        />
    )
};