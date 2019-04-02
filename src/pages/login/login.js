import React, {Component} from 'react';
import {View, Text, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import styles from '../../lib/styles';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {password: "", email: ""};
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.screenContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        returnKeyType="next" 
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({email: text})}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha" 
                        secureTextEntry 
                        returnKeyType="go" 
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <Text>Email: {this.state.email} | Senha: {this.state.password}</Text>
                    <Button style={styles.button} title="Logar" onPress={() => this.props.navigation.navigate('App')} />
                    <Button style={styles.button} title="Cancelar" onPress={() => this.props.navigation.navigate('Welcome')} />
                </View>
            </View>
        );
    }
}