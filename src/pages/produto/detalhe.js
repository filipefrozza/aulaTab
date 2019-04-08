import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import API from '../../lib/api';

export default class DetalheScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { _id: "", nome: "", peso: "", preco: "", descricao: "" };
    }

    buscar(id) {
        API.get(`produtos/${id}`, this.state).then((res) => {
            if(res.data.nome){
                this.setState(res.data);
            }else{
                alert("Houve um problema");
                this.props.navigation.navigate('Listar');
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

    deletar(id){
        API.delete(`produtos/${id}`, this.state).then((res) => {
            alert("Deletado com sucesso");
            this.props.navigation.navigate('Listar');
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

    componentDidMount(){
        if(this.props.navigation.getParam('id')){
            this.buscar(this.props.navigation.getParam('id'));
        }else{
            alert("Você não selecionou um produto");
            this.props.navigation.navigate('Listar');
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Novo Produto
                </Text>
                <View style={styles.screenContainer}>
                    <Text style={[styles.detailText, styles.detailTitle]}>
                        {this.state.nome}
                    </Text>
                    <Text style={styles.detailText}>
                        R$ {this.state.preco}
                    </Text>
                    <Text style={styles.detailText}>
                        {this.state.peso} Kg
                    </Text>
                    <Text style={styles.detailText}>
                        {this.state.descricao}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Editar', {id: this.state._id});}}>
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.deletar(this.state._id)}>
                            <Text style={styles.buttonText}>Deletar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Listar')}>
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}