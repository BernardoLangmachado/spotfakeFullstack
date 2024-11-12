import React from "react";
import { StyleSheet, View, Text, Image, Modal, Pressable, TouchableOpacity, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";



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
        try{
            const data = {
                "file": image,
                "upload_preset": 'ml_default',
                "name": 'teste', //n funfa
            }
            const res = await fetch('http://api.cloudinary.com/v1-v/dy08n53ts/upload', {
                method: 'POST',
                headers:{
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
                <View style={style.partadafoto}>

                    {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image
                            source={{ uri: 'https://static.vecteezy.com/ti/fotos-gratis/t1/11215319-planeta-terra-com-nascer-do-sol-no-espaco-foto.jpg' }}
                            style={style.image}
                        />
                    </TouchableOpacity>

                    {/* Modal de confirmação 
                    <Modal
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={style.modalBackground}>
                            <View style={style.modalContainer}>
                                <Text style={style.modalText}>Quer trocar sua foto?</Text>
                                <View style={style.buttonContainer}>
                                    <Button
                                        title="Sim"
                                        onPress={() => {
                                            setModalVisible(true);
                                            handlePickImage();
                                        }}
                                    />
                                    <Button
                                        title="Não"
                                        onPress={() => setModalVisible(false)}
                                    />
                                </View>
                            </View>
                        </View>
                    {/* </Modal> */}
                

                <Text style={style.titulo}>Seu Perfil</Text>
                {/* isso aqui é um view pra subir as coisa no condrado, ta tudo subindo, literalemnete tudo
                     que t adentro da viwe "quadrado" ta subinddo , pra colocar pra baixo usa o margintop */}
                <Pressable onPress={() => pickImage()}>
                    <Image style={style.fotoeu} source={{ uri: image }} />
                </Pressable>
            </View>

            <View style={style.plalists}>

                <Text style={style.tituloquadrado}>Suas Playlists</Text>

                <View style={style.playlist1}>
                    <Text style={style.texetplaylists}>Metal Musisc</Text>
                </View>

                <View style={style.playlist2}>
                    <Text>Clasicas Musisc</Text>
                </View>

                <View style={style.playlist3}>
                    <Text>Br Musisc</Text>
                </View>

                <View style={style.playlist4}>
                    <Text> Add New PlayList</Text>
                </View>

                <View style={style.playlist5}>
                    <Text> Excluir PlayList</Text>
                </View>

                <View style={style.playlist6}>
                    <Text> Favoritas </Text>
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
        width: 420,
        height: 720,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 20,

    },

    partadafoto: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    titulo: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',

    },

    fotoeu: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },

    // modalBackground: {
    //     flex: 1,
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   modalContainer: {
    //     width: 300,
    //     padding: 20,
    //     backgroundColor: 'white',
    //     borderRadius: 10,
    //     alignItems: 'center',
    //   },
    //   modalText: {
    //     fontSize: 16,
    //     marginBottom: 20,
    //   },
    //   buttonContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '100%',
    //   },

    plalists: {
        flex: 1,
        width: 322,
        height: 386,
        justifyContent: 'space-between',
        backgroundColor: '#c4c4c4',
        borderRadius: 15,
        padding: 17,
        flexDirection: 'row',
        alignContent: 'space-around',
        flexWrap: 'wrap',
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

    playlist2: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        marginBottom: 4,

    },

    playlist3: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        marginBottom: 4,
    },

    playlist4: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        marginBottom: 4,
    },

    playlist5: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        marginBottom: 4,
    },

    playlist6: {
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