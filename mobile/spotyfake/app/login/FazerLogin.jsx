import React, { useState } from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, Pressable, TextInput,TouchableOpacity } from "react-native"

import { Link } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    quadrado: {
        width: 320,
        height: 460,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        marginBottom: 36,
        textAlign: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row', // faz ficar na vertical
        justifyContent: 'space-between',
        width: '70%',
        marginTop: 20,
    },

    botaoderegistro: {
        backgroundColor: '#720e00',
        borderRadius: 20,
        height: 54,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 38,
        paddingHorizontal: 10, // isso aqui aumneta o espaaço do textinput
        width: '100%',
    },

    textbt: {
        color: '#FFFFFF',
    }
});


export default registrar = () => {
    const [email, onChangeEmail] = React.useState();
    const [password, onChangeSenha] = React.useState();


    const confere = async () => {
        if (!email || !password) {
            setMenssage('Todos os Campos devem ser preenchidos')
        }

        const respota = await fetch(
            "http://localhost:8000/autenticacao/login", {
            method: 'post', headers: {
                'Accept': 'application /json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emaile: email, password: password })
        }
        )
        console.log(respota)
    }


    return (

        <View style={styles.container}>

            <View style={styles.quadrado}>

                <Text style={styles.titulo}> Login</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { onChangeEmail(text) }}
                    value={email}
                    placeholder="Escreva seu Email"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { onChangeSenha(text) }}
                    value={password}
                    placeholder="Escreva seu Senha"
                />

                <Link href="home/homemusic" asChild>
                    <TouchableOpacity style={styles.botaoderegistro}>
                        <Text style={styles.textbt}>entrar</Text>
                    </TouchableOpacity>
                </Link>

            </View>
        </View>

    );
};

