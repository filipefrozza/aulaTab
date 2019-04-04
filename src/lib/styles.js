import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    title: {
        paddingTop: 15,
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: "#0D47A1",
        color: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    screenContainer: {
        flex: 9, 
        fontSize: 18 
    },
    formContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    productContainer: { 
        flexDirection: "row",  
    },
    productText: {
        borderColor: "rgba(0,0,0,0.5)",
        borderBottomWidth: 1, 
        flex: 4,
        borderBottomLeftRadius: 25,
        paddingVertical: 10,
        paddingLeft: 20
    },
    productPrice: {
        borderColor: "rgba(0,0,0,0.5)",
        borderBottomWidth: 1, 
        paddingRight: 10,
        flex: 1,
        borderBottomRightRadius: 25, 
        paddingVertical: 10,
    },
    container: { 
        flex: 1, 
        alignItems: "stretch" 
    },
    input: {
        height: 40,
        marginBottom: 5,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }, 
    button: {
        height: 40,
        width: 100,
        marginLeft: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2196F3",
        borderRadius: 3
    },
    buttonText: {
        color: "white"
    },
    fab: {
        backgroundColor: "#2196F3",
        height: 70,
        width: 70,
        position: "absolute",
        right: 15,
        bottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 43,
    },
    fabIcon: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold"
    },
    textArea: {
        height: 150
    }
});