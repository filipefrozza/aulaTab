import React, {Component} from 'react';
import {View, Text, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import styles from '../../lib/styles';
import API from '../../lib/api';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {password: "", email: "", token: ""};
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
                        onChangeText={(text) => {this.setState({email: text})}}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha" 
                        secureTextEntry 
                        returnKeyType="go" 
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <Text style={{flex: 1}}>Email: {this.state.email} | Senha: {this.state.password}</Text>
                    <Button style={styles.button} title="Logar" onPress={() => {this.logar()}} />
                    <Button style={styles.button} title="Cancelar" onPress={() => this.props.navigation.navigate('Welcome')} />
                </View>
            </View>
        );
    }

    logar() {
        API.post('users/login',{
            email: this.state.email,
            password: this.state.password
        }).then((res) => {
            API.defaults.headers.common['Authorization'] = "Bearer "+res.data.token;
            this.props.navigation.navigate('App');
        }).catch((e) =>{
            if(e.response){
                if(e.response.status == 400){
                    alert("Usuário/Senha inválido");
                }else{
                    alert("Houve um erro na comunicação");
                }
            }else if(e.request){
                alert("Problemas no servidor");
            }else{
                alert("Problemas no aplicativo");
            }
        });
    }
}