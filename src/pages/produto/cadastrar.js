import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import API from '../../lib/api';

export default class CadastrarScreen extends Component{
    constructor(props) {
        super(props);
        this.state = { nome: "", peso: "", preco: "", descricao: "" };
    }

    cadastrar(){
        API.post('produtos', this.state).then((res) => {
            alert("Cadastrado");
            this.props.navigation.navigate('Listar');
        }).catch((e) => {
            if (e.response) {
                if (e.response.status == 400) {
                    alert("Você não tem permissão");
                } else {
                    if(this.state.nome == ""){  
                        alert("Você precisa preencher um nome");
                    }else if(this.state.preco == ""){
                        alert("Você precisa preencher um preco");
                    }
                }
            } else if (e.request) {
                alert("Problemas no servidor");
            } else {
                alert("Problemas no aplicativo");
            }
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Novo Produto
                </Text>
                <View style={styles.screenContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        returnKeyType="next"
                        onSubmitEditing={() => this.precoInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => { this.setState({ nome: text }) }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Preço"
                        returnKeyType="next"
                        onSubmitEditing={() => this.pesoInput.focus()}
                        ref={(input) => this.precoInput = input}
                        onChangeText={(text) => this.setState({ preco: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Peso"
                        returnKeyType="next"
                        onSubmitEditing={() => this.descricaoInput.focus()}
                        ref={(input) => this.pesoInput = input}
                        onChangeText={(text) => this.setState({ peso: text })}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Descricao"
                        returnKeyType="go" 
                        multiline={true}
                        numberOfLines={5}
                        scrollEnabled={true}
                        ref={(input) => this.descricaoInput = input}
                        onChangeText={(text) => this.setState({ descricao: text })}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {this.cadastrar();}}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Listar')}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}