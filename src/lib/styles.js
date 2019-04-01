import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    title: {
        paddingTop: 5,
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: "blue",
        color: "white",
        textAlign: "center"
    },
    screenContainer: {
        flex: 9, 
        fontSize: 18 
    },
    productContainer: { 
        borderBottomWidth: 1, 
        flexDirection: "row", 
        paddingVertical: 10 
    },
    productText: {
        paddingLeft: 10,
        flex: 4
    },
    productPrice: {
        paddingRight: 10,
        flex: 1
    },
    container: { 
        flex: 1, 
        alignItems: "stretch" 
    }
});