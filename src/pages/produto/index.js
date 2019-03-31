import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProdutoScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {produtos: ""};
    }

    render(){
        const {navigate} = this.props.navigation;

        fetch('http://192.168.15.8:3000/api/v1/users/check', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOWZiMzA3OWRjM2QwMTQwOGQ3Njg3NyIsImVtYWlsIjoiZmlsaXBlZnJvenphLmZtQGdtYWlsLmNvbSIsImlhdCI6MTU1Mzk5Mjk0OSwiZXhwIjoxNTUzOTkzMTQ5fQ._ZMCLekw0KTW2JBhR56cT24GcwNUZiABl17UmwJQXzM"
            },
            // body: JSON.stringify({
            //   email: 'filipefrozza.fm@gmail.com',
            //   password: '123456',
            // })
        })
        .then((response) => response.text())
        .then((responseJson) => {
            this.setState({produtos: responseJson});
        })
        .catch((error) => {
            console.error(error);
        });


        return(
            <View>
                <Text>Produto</Text>
                <Text>{this.state.produtos}</Text>
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