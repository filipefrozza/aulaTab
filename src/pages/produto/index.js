import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../../lib/api';
import styles from '../../lib/styles';

export default class ProdutoScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {produtos: [], erro: ""};
    }

    atualizarLista() {
        API.get(
            'produtos'
        ).then(res => {
            console.log(res);
            this.setState({produtos: res.data});
        }).catch(e => {
            if(e.response){
                if(e.response.status == 401){
                    alert("Token inválido");
                }
            }else if(e.request){

            }else{

            }
        });
    }

    componentDidMount() {
        this.atualizarLista();
    }

    render(){
        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Produtos
                </Text>
                <View style={styles.screenContainer}>
                    {
                        this.state.produtos.map(
                            produto => {
                                return (
                                    <View key={produto._id} style={styles.productContainer}>
                                        <Text style={styles.productText}>{produto.nome}</Text>
                                        <Text style={styles.productPrice}>R$ {produto.preco}</Text>
                                    </View>
                                );
                            }
                        )
                    }
                </View>
            </View>
        );
    }  
}

ProdutoScreen.navigationOptions = {
    tabBarIcon: ({tintColor, focused}) => (
        <Icon
            name="md-flask"
            size={28}
            color={tintColor}
        />
    )
};