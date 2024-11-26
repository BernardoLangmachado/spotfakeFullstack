import React from "react";
import { StyleSheet, View, Text, Image, Modal, Pressable, TouchableOpacity, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Link } from "expo-router";



export default profile = () => {
    const [image, setImage] = useState('https://static.vecteezy.com/ti/fotos-gratis/t1/11215319-planeta-terra-com-nascer-do-sol-no-espaco-foto.jpg')
    const [modalVisible, setModalVisible] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }


    }

    // const handlePickImage = () => { // Função que executa o 'pickImage'

    //     console.log("Imagem escolhida"); // Aqui chama 'pickImage' direto.
    // }
    const handleSendImage = async () => {
        try {
            const data = {
                "file": image,
                "upload_preset": 'ml_default',
                "name": 'teste', //n funfa
            }
            const res = await fetch('http://api.cloudinary.com/v1-v/dy08n53ts/upload', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringfy(data)
            });
            const result = await res.json();
            setImage(result.url)
            saveNewImageURLonBackend(result)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={style.container}>

            <View style={style.quadrado}>

                <View style={style.header}>


                    <View style={style.partadafoto}>
                        <Link href="profile/inde" asChild>
                            <Image style={style.fotoeu} source={{ uri: image }} />
                        </Link>
                    </View>


                    <Text style={style.textperfil}>Seu perfil</Text>

                </View>

                <View style={style.plalists}>

                    <Text style={style.tituloquadrado}>Musicas</Text>

                    <View style={style.playlist1}>
                        <Text style={style.texetplaylists}>Metal Musisc</Text>
                    </View>

                </View>

            </View>
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
    },

    quadrado: {
        width: '32%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#751d15',
        borderRadius: 20,
        padding: 20,

    },

    header: {
        flex: 1,
        width: '100%',
        height: '20%',
        backgroundColor: '#c52723',
        borderRadius: 15,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //flexWrap: 'wrap',

    },

    partadafoto: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },


    fotoeu: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginBottom: 20,
    },

    textperfil: {
        fontSize: 24,
        marginBottom: 20,
    },

    plalists: {
        flex: 1,
        width: '100%',
        height: '6%',
        justifyContent: 'space-between',
        backgroundColor: '#c52723',
        borderRadius: 15,
        padding: 17,
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        marginTop: '5%'
    },

    tituloquadrado: {
        fontSize: 19,
        marginBottom: 20,
        textAlign: 'center',

    },

    texetplaylists: {
        fontSize: 11,
        textAlign: 'center',
    },

    playlist1: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        marginBottom: 4,

    },

},
)