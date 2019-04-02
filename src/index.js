import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './pages/login';

const AppIndex = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <AppIndex />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "red",
        paddingHorizontal: 10,
        paddingTop: 5,
    }
})