import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
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
            name={ focused ? "md-home" : "ios-home"}
            size={28}
            color={tintColor}
        />
    )
};