import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import API from '../../lib/api';

export default class CadastrarScreen extends Component{
    constructor(props) {
        super(props);
        this.state = { nome: "", peso: "", preco: "", descricao: "" };
    }

    buscar(id) {
        API.get(`produtos/${id}`, this.state).then((res) => {
            if (res.data.nome) {
                this.setState(res.data);
            } else {
                alert("Houve um problema");
                this.props.navigation.navigate('Detalhe',{id: id});
            }
        }).catch((e) => {
            if (e.response) {
                if (e.response.status == 400) {
                    alert("Você não tem permissão");
                } else {
                    if (this.state.nome == "") {
                        alert("Você precisa preencher um nome");
                    } else if (this.state.preco == "") {
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

    editar(id){
        API.put(`produtos/${id}`, this.state).then((res) => {
            alert("Alterado");
            this.props.navigation.navigate('Detalhe', {id: id});
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

    componentDidMount() {
        if (this.props.navigation.getParam('id')) {
            this.buscar(this.props.navigation.getParam('id'));
        } else {
            alert("Você não selecionou um produto");
            this.props.navigation.navigate('Listar');
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Editar Produto
                </Text>
                <View style={styles.screenContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        returnKeyType="next"
                        onSubmitEditing={() => this.precoInput.focus()}
                        autoCorrect={false}
                        defaultValue={this.state.nome}
                        onChangeText={(text) => { this.setState({ nome: text }) }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Preço"
                        returnKeyType="next"
                        keyboardType="numeric"
                        onSubmitEditing={() => this.pesoInput.focus()}
                        ref={(input) => this.precoInput = input}
                        defaultValue={`${this.state.preco}`}
                        onChangeText={(text) => this.setState({ preco: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Peso"
                        returnKeyType="next"
                        keyboardType="numeric"
                        onSubmitEditing={() => this.descricaoInput.focus()}
                        ref={(input) => this.pesoInput = input}
                        defaultValue={`${this.state.peso}`}
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
                        defaultValue={this.state.descricao}
                        onChangeText={(text) => this.setState({ descricao: text })}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {this.editar(this.state._id);}}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Detalhe', {id: this.state._id})}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}