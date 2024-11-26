import React, { useState } from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, Pressable, TextInput, TouchableOpacity } from "react-native"

import { Link } from "expo-router";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    quadrado: {
        width: '25%',
        height: '77%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        marginBottom: 20,
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
        height: '13%',
        width: '34%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: '16%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10, // isso aqui aumneta o espaaço do textinput
        width: '100%',
    },

    textbt: {
        color: '#FFFFFF',
    }
});


export default registrar = () => {
    const [nome, onChangeNome] = React.useState("");
    const [sombrenome, onChangeSombrenome] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangeSenha] = React.useState("");
    const [dataNascimento, onChangeDataNascimento] = React.useState("");

    const confere = async () => {
        if (!nome || !sombrenome || !email || !password || !dataNascimento) {
            setMenssage('Todos os Campos devem ser preenchidos')
        }
        try {
            const respota = await fetch(
                "http://localhost:8000/autenticacao/login", {
                method: 'post', headers: {
                    'Accept': 'application /json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email, nome: nome, sombrenome: sombrenome, password: password, dataNasciment: dataNascimento
                })
            }
            )
            console.log(respota)
        }
        catch (e) {
            console.log(e)
        }

    }

    return (

        <View style={styles.container}>

            <View style={styles.quadrado}>

                <Text style={styles.titulo}> Registre-se</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { onChangeNome(text) }}
                    value={nome}
                    placeholder="Escreva seu nome"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { onChangeSombrenome(text) }}
                    value={sombrenome}
                    placeholder="Escreva seu Sobre nome"
                />

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

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { onChangeDataNascimento(text) }}
                    value={dataNascimento}
                    placeholder="Escreva sua Data de Nascimento"
                />

                <Link href="login/FazerLogin" asChild>
                    <TouchableOpacity style={styles.botaoderegistro}>
                        <Text style={styles.textbt}>resgistrar</Text>
                    </TouchableOpacity>
                </Link>

            </View>
        </View>



    );
};


