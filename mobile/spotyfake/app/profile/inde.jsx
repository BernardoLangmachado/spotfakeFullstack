import React from "react";
// import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";
import { StyleSheet, View, Text, Image, TextInput, Pressable } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";





const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    },
    url: (
        { secure: true }
    )
});


export default profile = () => {
    const [image, setImage] = useState('https://static.vecteezy.com/ti/fotos-gratis/t1/11215319-planeta-terra-com-nascer-do-sol-no-espaco-foto.jpg')

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
    };

    return (
        <View style={style.container}>

            <View style={style.quadrado}>
                <View style={style.partadafoto}>
                    <Text style={style.titulo}>Seu Perfil</Text>
                    {/* isso aqui é um view pra subir as coisa no condrado, ta tudo subindo, literalemnete tudo
                     que t adentro da viwe "quadrado" ta subinddo , pra colocar pra baixo usa o margintop */}
                    <Pressable onPress={() => pickImage()}>
                        <Image style={style.fotoeu} source={{ uri: image }} />
                    </Pressable>
                </View>

                <View style={style.plalists}> 
                
                    <View style={style.playlist1}>
                        <Text>Metal Musisc</Text>
                    </View>

                    <View style={style.playlist2}>
                        <Text>Clasicas Musisc</Text>
                    </View>

                    <View style={style.playlist3}>
                        <Text>Br Musisc</Text>
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
        padding: 20,
    },

    quadrado: {
        width: 320,
        height: 520,
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
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',

    },

    fotoeu: {
        width: 98,
        height: 98,
        borderRadius: 50,
        marginBottom: 20,
    },

    plalists: {
        flex: 1,
        width: 292,
        height: 286,
        justifyContent: 'flex-start',
        backgroundColor: '#c4c4c4',
        borderRadius: 15,
        padding: 20,
        flexDirection: 'column-reverse',
        alignContent: 'space-around'
    },

    playlist1: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        
        
    },

    playlist2: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        
        
    },

    playlist3: {
        width: 122,
        height: 66,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#be1e09',
        borderRadius: 10,
        padding: 20,
        
    },

},
)