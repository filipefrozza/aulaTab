import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Third extends Component{
    render(){
        return(
            <View>
                <Text>Third Screen</Text>
            </View>
        );
    }
}


Third.navigationOptions = {
    tabBarIcon: ({tintColor, focused}) => (
        <Icon
            name={ focused ? "md-flash" : "ios-flash"}
            size={28}
            color={tintColor}
        />
    )
};