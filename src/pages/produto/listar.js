import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../../lib/api';
import styles from '../../lib/styles';

export default class ListarScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { produtos: [], erro: "" };
    }

    atualizarLista() {
        API.get(
            'produtos'
        ).then(res => {
            console.log(res);
            this.setState({ produtos: res.data });
        }).catch(e => {
            if (e.response) {
                if (e.response.status == 401) {
                    alert("Token inválido");
                }
            } else if (e.request) {

            } else {

            }
        });
    }

    componentDidMount() {
        this.atualizarLista();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Produtos
                </Text>
                <View style={styles.screenContainer}>
                    {
                        this.state.produtos.map(
                            produto => {
                                return (
                                    <TouchableOpacity 
                                        key={produto._id} 
                                        style={styles.productContainer}
                                        onPress={() => {this.props.navigation.navigate('Detalhe',{id: produto._id})}}
                                    >
                                        <Text style={styles.productText}>{produto.nome}</Text>
                                        <Text style={styles.productPrice}>R$ {produto.preco}</Text>
                                    </TouchableOpacity>
                                );
                            }
                        )
                    }
                    <TouchableOpacity
                        style={styles.fab}>
                        <Icon onPress={() => {this.props.navigation.navigate('Cadastrar');}} style={styles.fabIcon} name="md-add" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}