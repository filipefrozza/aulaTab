import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProdutoScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Text>Produto</Text>
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