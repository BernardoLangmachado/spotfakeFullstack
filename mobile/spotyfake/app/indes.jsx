import React, { useState } from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, Pressable } from "react-native"

import { Link } from "expo-router";

const {formData,setFormData} = useState({
    nome:'',
    sombrenome:'',
    email:'',
    password:'',
    datenascimento:'',
});

cosnt [showPassword, setShowPassword] = useState(false);
const [Menssage, setMenssage] = useState(null);

const confere = async () => {
    if(!formData.name || !formData.sombrenome || !formData.email || !formData.password || !formData.datenascimento) {
        setMenssage('Todos os Campos devem ser preenchidos')
        return;
    }
    try {
            cosnt response = await fetch('http://localhost:8000/registro',{
                method: 'POST',
                headers: {
                    Accpet: 'aplication/json',
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify(formData)
            });

    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    quadrado: {
        width: 320,
        height: 460,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        justifyContent: 'center'
    },

    buttonsContainer: {
        flexDirection: 'colon',
        justifyContent: 'space-between',
        width: '70%',
    },

    botaoderegistro: {
        backgroundColor: '#720e00',
        borderRadius: 20,
        height: 54,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center'

    },
});


export default registrar = () => {
    const [nome, onChangeNome] = React.useState();
    const [sombrenome, onChangeSombrenome] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [senha, onChangeSenha] = React.useState();
    const [dataNascimento, onChangeDataNascimento] = React.useState();

    return (

        <View style={styles.container}>

            <View style={styles.quadrado}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNome}
                    value={nome}
                    placeholder="Escreva seu nome"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSombrenome}
                    value={sombrenome}
                    placeholder="Escreva seu Sobre nome"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Escreva seu Email"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSenha}
                    value={senha}
                    placeholder="Escreva seu Senha"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDataNascimento}
                    value={dataNascimento}
                    placeholder="Escreva sua Data de Nascimento"
                />

                <Pressable style={styles.botaoderegistro}>

                </Pressable>

            </View>
        </View>



    );
};

