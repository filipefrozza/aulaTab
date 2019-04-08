import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import ListarScreen from './listar';
import CadastrarScreen from './cadastrar';
import DetalheScreen from './detalhe';
import EditarScreen from './editar';

const ProductNavigator = createSwitchNavigator({
    Listar: { screen: ListarScreen },
    Cadastrar: { screen: CadastrarScreen },
    Detalhe: { screen: DetalheScreen },
    Editar: {screen: EditarScreen}
});

const ProductContainer = createAppContainer(ProductNavigator);

export default class ProdutoScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { produtos: [], erro: "" };
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ProductContainer/>
        );
    }
}

ProdutoScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name="md-flask"
            size={28}
            color={tintColor}
        />
    )
};