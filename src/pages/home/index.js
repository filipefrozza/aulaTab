import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../lib/styles';

export default class HomeScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Home Screen</Text>
                <View style={styles.screenContainer}></View>
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