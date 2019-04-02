import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../../lib/styles';

export default class WelcomeScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Welcome</Text>
                <View style={styles.screenContainer}>
                    <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
                    <Button title="Register" onPress={() => this.props.navigation.navigate('Register')} />
                </View>
            </View>
        );
    }
}