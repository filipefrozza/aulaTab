import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class RegisterScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <View style={[styles.screenContainer, styles.formContainer]}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}