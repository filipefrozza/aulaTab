import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from '../../lib/router';
import Icon from 'react-native-vector-icons/Ionicons';

const AppIndex = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor="red"
                    barStyle="light-content"
                />
                <View style={styles.header}>
                    <Icon name="ios-exit" size={28} color="white" onPress={() => this.props.navigation.navigate('Welcome')} />
                    <Icon name="ios-menu" size={28} color="white" />
                </View>
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