import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from '../../lib/styles';

export default class WelcomeScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Welcome</Text>
                <View style={[styles.screenContainer, styles.formContainer]}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Login') }}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}