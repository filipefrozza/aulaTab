import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../lib/styles';

export default class Third extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Third Screen</Text>
                <View style={styles.screenContainer}></View>
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